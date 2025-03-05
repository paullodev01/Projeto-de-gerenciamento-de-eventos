import { provideRoutes } from '@angular/router';
import { routes } from './app.routes';

export const API_URL = 'http://localhost:3000';

export const appConfig = {
  providers: [
    provideRoutes(routes)
  ]
};
