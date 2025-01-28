import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

// Combine appConfig with HTTP client setup
bootstrapApplication(AppComponent, {
  ...appConfig, // Spread appConfig for global settings
  providers: [provideHttpClient()], // Add HTTP client provider
}).catch((err) => console.error(err));