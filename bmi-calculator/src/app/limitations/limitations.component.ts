import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-limitations',
  templateUrl: './limitations.component.html',
  styleUrls: ['./limitations.component.scss']
})
export class LimitationsComponent implements OnInit{
  hasLargeScreen!: boolean;

  ngOnInit(): void {
    this.hasLargeScreen = window.innerWidth >= 1440;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: unknown) {
    this.hasLargeScreen = window.innerWidth >= 1440;
  }
}
