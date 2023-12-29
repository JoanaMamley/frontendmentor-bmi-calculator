import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calculate',
  templateUrl: './bmi-calculate.component.html',
  styleUrls: ['./bmi-calculate.component.scss']
})
export class BmiCalculateComponent {
  metricOptionSelected: boolean = true;
  bmiResult!: string;
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

  onOptionChange(isMetricOption: boolean) {
    this.metricOptionSelected = isMetricOption;
  }

  onInputChange(): void{
    let height: number;
    let weight: number;
    let result: number;
    if(this.inputValues.weightInputKg && this.inputValues.heightInputCm){
      height = +this.inputValues.heightInputCm;
      weight = +this.inputValues.weightInputKg;
      result = weight / height;
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

    let lRange = 18.5 * height;
    let uRange = 24.9 * height;
    this.idealWeightRange = {
      lowerRange: `${ (lRange/14).toFixed(0) }st ${ (lRange%14).toFixed(0) }lbs`,
      upperRange: `${ (uRange/14).toFixed(0) }st ${ (uRange%14).toFixed(0) }lbs`
    }
  }
}
