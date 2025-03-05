import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { EventFormComponent } from './pages/event-form/event-form.component';
import { EventsComponent } from './pages/events/events.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
// import { ParticipantFormComponent } from './pages/participant-form/participant-form.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventFormComponent,
    LoginComponent,
    // ParticipantFormComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
