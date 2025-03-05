import { RouterModule, Routes } from '@angular/router';

import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { EventFormComponent } from './pages/event-form/event-form.component';
import { EventsComponent } from './pages/events/events.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: 'event-form', component: EventFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
