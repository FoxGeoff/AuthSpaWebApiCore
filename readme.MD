# Project: Authorization and Authentication for an Angular SPA, asp.net core Webapi and OpenserverId4

## Add Client side Authentication

# Add AuthGuard Service

# Add AuthGuardService to route 
* { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuardService] }

# Add AuthService (Connections to IdentityServer4)

# Add 'oidc-client'
* npm install oidc-client