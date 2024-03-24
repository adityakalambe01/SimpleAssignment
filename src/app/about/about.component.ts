import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  showDetails: boolean = false;
  details: string[] = ['Detail 1', 'Detail 2', 'Detail 3'];

  constructor() { }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
