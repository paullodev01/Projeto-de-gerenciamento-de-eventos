import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  eventForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(''),
    location: new FormControl(''),
  });

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.eventForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', Validators.required],
      date: ['', [Validators.required, this.futureDateValidator]],
      location: ['', Validators.required],
    });
  }

  futureDateValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const date = new Date(control.value);
    if (date <= new Date()) {
      return { invalidDate: true };
    }
    return null;
  }

  onSubmit(): void {
    console.log("chamando", this.eventForm)
    if (this.eventForm.valid) {
      this.eventService.createEvent(this.eventForm.value).subscribe(() => {
        this.router.navigate(['/events']);
      });
    }
  }
}
