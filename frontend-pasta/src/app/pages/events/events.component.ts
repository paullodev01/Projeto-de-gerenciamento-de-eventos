import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { SocketService } from '../../services/socket.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  animations: [
    trigger('eventAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class EventsComponent implements OnInit {
  events: any[] = [];

  constructor(
    private eventService: EventService,
    private socketService: SocketService
  ) {}

  ngOnInit() {
    this.loadEvents();

    // ouvir por novos eventos via WebSocket
    this.socketService.listen('newEvent').subscribe((event: any) => {
      this.events.push(event);
      // colocar uma animação para destacar o novo evento
    });
  }

  loadEvents() {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
    });
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id).subscribe(() => {
      this.loadEvents();
    });
  }
}

