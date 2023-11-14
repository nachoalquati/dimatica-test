import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from '@userService';
import { debounceTime, switchMap } from 'rxjs/operators';
//Missing imports

@Component({
    selector: 'app-users',
    template: `
      <input type="text" [(ngModel)]="query" (ngModelChange)="querySubject.next($event)">
      <div *ngFor="let user of users">
          {{ user.email }}
      </div>
    `
  })
  export class AppUsers implements OnInit {
  
    query = '';
    querySubject = new Subject<string>();
  
    users: { email: string; }[] = [];
  
    constructor(
      private userService: UserService
    ) {
    }
  
    ngOnInit(): void {
        // Keep querySubject as a subject and avoid to use it as an observable.
        this.querySubject.pipe(
            debounceTime(1500), // Wait 1 second after user stops writing.
            switchMap(q => this.userService.findUsers(q)) // Avoid to execute old
            //  querys by using switchMap.
          ).subscribe({
            next: (res) => this.users = res
          });
    }
  }
  