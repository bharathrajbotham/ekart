import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export  class FormsComponent implements OnInit{

  trailform= new FormGroup({
    'username':new FormControl(null,Validators.required),
    'password':new FormControl(null),
    'email':new FormControl(null,[Validators.required, Validators.email]),
    'phone':new FormControl(null),
    'gender':new FormControl('male'),
    'country':new FormControl(null),
    'city':new FormControl(null),
    'street':new FormControl(null),
    'pincode':new FormControl(null),
  })
  countrylist=[
    {"countryname":"INDIA"},    
    {"countryname":"USA"},
        {"countryname":"UK"}

  ];
  constructor(private fb:FormBuilder){}

  ngOnInit() {
    
  }
  onsubmit(){
   console.log(this.trailform);
   this.trailform.reset
  }

}
