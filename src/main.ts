import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    // Provide the Router for routing functionality
    provideRouter(routes),
    
    // Provide HttpClientModule for making HTTP requests
    provideHttpClient(),
    
    // Additional app configurations
    ...appConfig.providers
  ]
})
  .catch((err) => console.error(err));
