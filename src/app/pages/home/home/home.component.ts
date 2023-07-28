import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  initForm() {
    this.firstFormGroup = this.fb.group({
      firstName: '',
      lastName: '',
      designation: '',
      aboutYourSelf: '',

      email: '',
      phone: '',
      city: '',
      state: '',
      country: '',

      facebook: '',
      instagram: '',
      twitter: '',
      quora: '',
      
      skype: '',
      linkedIn: '',
      gitHub: '',
      stackOverflow: '',
      webSite: '',
    })

    this.secondFormGroup = this.fb.group({
     
    })
  }


  ngOnInit(): void {
    this.initForm();
  }
}