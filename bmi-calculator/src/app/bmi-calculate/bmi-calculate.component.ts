import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calculate',
  templateUrl: './bmi-calculate.component.html',
  styleUrls: ['./bmi-calculate.component.scss']
})
export class BmiCalculateComponent implements OnInit{
  hasSmallScreen!: boolean;
  metricOptionSelected: boolean = true;
  bmiResult: string | undefined;
  inputValues = {
    heightInputFt: "",
    heightInputIn: "",
    heightInputCm: "",
    weightInputKg: "",
    weightInputSt: "",
    weightInputLbs: "",
  }
  weightCategory!: 'underweight' | 'a healthy weight' | 'overweight' | 'obese';
  idealWeightRange!: {
    upperRange: string;
    lowerRange: string;
  }

  ngOnInit(): void {
    this.hasSmallScreen = window.innerWidth < 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: unknown) {
    this.hasSmallScreen = window.innerWidth < 768;
  }

  onOptionChange(isMetricOption: boolean) {
    this.metricOptionSelected = isMetricOption;
    this.bmiResult = undefined;
    this.inputValues = {
      heightInputFt: "",
      heightInputIn: "",
      heightInputCm: "",
      weightInputKg: "",
      weightInputSt: "",
      weightInputLbs: "",
    }
  }

  onInputChange(): void{
    let height: number;
    let weight: number;
    let result: number;
    if(this.inputValues.weightInputKg && this.inputValues.heightInputCm){
      height = +this.inputValues.heightInputCm / 100;
      weight = +this.inputValues.weightInputKg;
      result = weight / (height**2);
      this.idealWeight(result, height)
    }

    if(this.inputValues.weightInputSt !== '' && this.inputValues.weightInputLbs !== '' && this.inputValues.heightInputFt !== '' && this.inputValues.heightInputIn !== ''){
     weight = +this.inputValues.weightInputLbs + (+this.inputValues.weightInputSt * 14);
     height = +this.inputValues.heightInputIn + (+this.inputValues.heightInputFt * 12);
     result = (weight/(height**2)) * 703;
     this.idealWeight(result, height)
    }

    // console.log(this.bmiResult, this.weightCategory, this.idealWeightRange)
  }

  private idealWeight(bmi: number, height: number){
    this.bmiResult = bmi.toFixed(2);

    if (bmi < 18.5) {
      this.weightCategory = 'underweight';
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
      this.weightCategory = 'a healthy weight';
    }
    else if (bmi >= 25 && bmi <= 29.9){
      this.weightCategory = 'overweight';
    }
    else {
      this.weightCategory = 'obese';
    }

    if (this.metricOptionSelected) {
      let lRange = 18.5 * (height**2);
      let uRange = 24.9 * (height**2);
      this.idealWeightRange = {
        lowerRange: `${ (lRange).toFixed(1) }kgs`,
        upperRange: `${ (uRange).toFixed(1) }kgs`
      }
    }

    if (!this.metricOptionSelected) {
      let lRange = (18.5 * (height**2))/703;
      let uRange = (24.9 * (height**2))/703;
      this.idealWeightRange = {
        lowerRange: `${ (lRange/14).toFixed(0) }st ${ (lRange%14).toFixed(0) }lbs`,
        upperRange: `${ (uRange/14).toFixed(0) }st ${ (uRange%14).toFixed(0) }lbs`
      }
    }
  }
}
