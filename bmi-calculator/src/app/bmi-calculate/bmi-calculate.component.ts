import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calculate',
  templateUrl: './bmi-calculate.component.html',
  styleUrls: ['./bmi-calculate.component.scss']
})
export class BmiCalculateComponent {
  metricOptionSelected: boolean = true;

  onOptionChange(isMetricOption: boolean) {
    this.metricOptionSelected = isMetricOption;
  }
}
