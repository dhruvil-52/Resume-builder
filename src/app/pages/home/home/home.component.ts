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
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

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
      webSite: ''
    })

    this.secondFormGroup = this.fb.group({
      position: '',
      company: '',
      city: '',

      joinedDate: '',
      leftDate: '',
      companyDescription: '',
      rolesAndResponsibility: '',
      achievements: ''
    })

    this.thirdFormGroup = this.fb.group({
      education: '',
      institution: '',
      city: '',

      joinedDate: '',
      leftDate: '',
      course: ''
    })

    this.forthFormGroup = this.fb.group({
      projectName: '',
      startDate: '',
      endDate: '',
      projectDetails: ''
    })

    this.fifthFormGroup = this.fb.group({
      skills: '',
      softSkills: '',
      interest: '',
      language: '',

      certificateNames: '',
      certificateStartDate: '',
      certificateEndDate: '',
      certificateDetails: ''
    })
  }


  ngOnInit(): void {
    this.initForm();
  }
}