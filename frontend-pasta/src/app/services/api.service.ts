import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getEvents(page: number = 1, limit: number = 10, date?: string, location?: string): Observable<any> {
    let params: any = { page, limit };
    if (date) params.date = date;
    if (location) params.location = location;
    return this.http.get(`${this.baseUrl}/events`, { params });
  }

  getEvent(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/events/${id}`);
  }

  createEvent(event: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/events`, event);
  }

  updateEvent(id: string, event: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/events/${id}`, event);
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/events/${id}`);
  }

  registerParticipant(eventId: string, participant: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/events/${eventId}/register`, participant);
  }
}
