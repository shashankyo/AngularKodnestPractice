import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  form = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(8) ]),
    phone:new FormControl("",[Validators.required,Validators.pattern("[7-9]{1}[0-9]{9}")]),
    email:new FormControl(),

  })
  signup(){
    console.log(this.form.value)
  }
}
