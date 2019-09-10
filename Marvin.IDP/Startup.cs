using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Marvin.IDP
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddIdentityServer()
                .AddDeveloperSigningCredential()
                .AddTestUsers(Config.GetUsers())
                .AddInMemoryIdentityResources(Config.GetIdentityResources()) //
                .AddInMemoryApiResources(Config.GetApiResources())
                .AddInMemoryClients(Config.GetClients());

            services.AddAuthentication()
            .AddIdentityServerAuthentication("api", options =>
            {
                options.Authority = "https://localhost44379"; //5555
                    options.RequireHttpsMetadata = false;
                options.ApiName = "api1";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();
            app.UseDeveloperExceptionPage();

            app.Map("/api", api =>
            {
                api.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
                api.UseAuthentication();

                api.Run(async context =>
                {
                    var result = await context.AuthenticateAsync("api");
                    if (!result.Succeeded)
                    {
                        context.Response.StatusCode = 401;
                        return;
                    }

                    context.Response.ContentType = "application/json";
                    await context.Response.WriteAsync(JsonConvert.SerializeObject("API Response!"));
                });
            });

            app.UseIdentityServer();

            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
        }
    }
}
