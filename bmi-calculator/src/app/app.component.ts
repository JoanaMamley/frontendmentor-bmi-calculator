import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  hasLargeScreen!: boolean;

  ngOnInit(): void {
    this.hasLargeScreen = window.innerWidth >= 1440;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: unknown) {
    this.hasLargeScreen = window.innerWidth >= 1440;
  }
}
