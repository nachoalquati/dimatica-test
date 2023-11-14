import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-user-form',
    template: `
        <form [formGroup]="userForm" (ngSubmit)="doSubmit()">
            <input type="text" formControlName="email" placeholder="email">
            <input type="text" formControlName="name" placeholder="name">
            <input type="date" formControlName="birthday" placeholder="birthday">
            <input type="number" formControlName="zip" placeholder="zip">
            <input type="text" formControlName="city" placeholder="city">
            <button type="submit" [disabled]="userForm.invalid" (click)="doSubmit()">Register</button>
        </form>
    `
  })
  export class AppUserForm {
  

    userForm: FormGroup;


    @Output()
    event = new EventEmitter<{ email: string; name: string; birthday: Date; address: { zip: number; city: string; };}>;
    
    constructor(
      private formBuilder: FormBuilder
    ) {
        this.userForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            name: ['', Validators.required ],
            birthday: [null, Validators.required],
            zip: [null, Validators.required],
            city: ['', Validators.required],
          });
    }
  
    doSubmit(): void {
        if (this.userForm.valid) {
            this.event.emit(this.userForm.value);
        }
    }
  }
  