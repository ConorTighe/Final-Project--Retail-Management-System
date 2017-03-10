import { Component } from '@angular/core';

@Component({
  selector: 'deta',
  template: `
    <div>
      <h2>{{message}}</h2>
    </div>
  `,
})
export class DetailsComponent {
  message:string;
  constructor() {
    this.message = 'data here'
  }
}