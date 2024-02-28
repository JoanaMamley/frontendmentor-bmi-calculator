import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-limitations',
  templateUrl: './limitations.component.html',
  styleUrls: ['./limitations.component.scss']
})
export class LimitationsComponent {
  @Input() hasLargeScreen!: boolean;
}
