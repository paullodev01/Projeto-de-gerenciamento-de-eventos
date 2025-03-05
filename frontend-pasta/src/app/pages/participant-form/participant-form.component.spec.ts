import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ParticipantFormComponent } from './participant-form.component';

describe('ParticipantFormComponent', () => {
  let component: ParticipantFormComponent;
  let fixture: ComponentFixture<ParticipantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantFormComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form when all fields are filled', () => {
    component.participantForm.controls['name'].setValue('Joao Almeida');
    component.participantForm.controls['email'].setValue('joao.almeida@example.com');
    expect(component.participantForm.valid).toBeTruthy();
  });

  it('should have an invalid form when fields are empty', () => {
    component.participantForm.controls['name'].setValue('');
    component.participantForm.controls['email'].setValue('');
    expect(component.participantForm.invalid).toBeTruthy();
  });

  it('should have an invalid form when email is not valid', () => {
    component.participantForm.controls['name'].setValue('Joao Almeida');
    component.participantForm.controls['email'].setValue('invalid-email');
    expect(component.participantForm.invalid).toBeTruthy();
  });
});
