import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LimitationsComponent } from './limitations/limitations.component';
import { ResultMeaningComponent } from './result-meaning/result-meaning.component';
import { BmiCalculateComponent } from './bmi-calculate/bmi-calculate.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LimitationsComponent,
    ResultMeaningComponent,
    BmiCalculateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
