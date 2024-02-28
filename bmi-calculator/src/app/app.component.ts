import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hasLargeScreen!: boolean;

  ngOnInit(): void {
    this.hasLargeScreen = window.innerWidth >= 1440;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: unknown) {
    this.hasLargeScreen = window.innerWidth >= 1440;
  }
}
