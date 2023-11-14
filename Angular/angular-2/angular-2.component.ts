
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Use the pipe instead of using the function

@Component({
    selector: 'app-users',
    changeDetection: ChangeDetectionStrategy.OnPush,
    // Using on push strategy to reduce the amount of times angular checks for changes,
    // now angular checks only when inputs change or when the component fires an event.
    template: `
      <div *ngFor="let user of users">
          {{ user.name | capitalizePipe }}
      </div>
    `
  })
  export class AppUsers {
  
    @Input()
    users: { name: string; }[];
  
    constructor() {}
    
  }
  