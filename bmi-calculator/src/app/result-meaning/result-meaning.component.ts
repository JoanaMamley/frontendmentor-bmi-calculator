import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-meaning',
  templateUrl: './result-meaning.component.html',
  styleUrls: ['./result-meaning.component.scss']
})
export class ResultMeaningComponent {
  @Input() hasLargeScreen!: boolean;
}
