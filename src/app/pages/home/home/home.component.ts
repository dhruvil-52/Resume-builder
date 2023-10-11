import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { GenerateResumeService } from 'src/app/shared/services/generate-resume.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formDetails: FormGroup;

  constructor(private fb: FormBuilder,
    private resumeBuilderService: GenerateResumeService) { }

  initForm() {
    this.formDetails = this.fb.group({
      personalDetails: this.fb.group({
        firstName: '',
        lastName: '',
        designation: '',
        aboutYourSelf: '',

        email: '',
        phone: '',
        location: '',

        facebook: '',
        instagram: '',
        twitter: '',
        quora: '',

        skype: '',
        linkedIn: '',
        gitHub: '',
        stackOverflow: '',
        webSite: ''
      }),

      experienceDetails: this.fb.array([
        this.fb.group({
          position: '',
          company: '',
          city: '',

          joinedDate: '',
          leftDate: '',
          companyDescription: '',
          rolesAndResponsibility: '',
          projects: ''
        })
      ]),

      educationDetails: this.fb.array([
        this.fb.group({
          education: '',
          institution: '',
          // city: '',

          joinedDate: '',
          leftDate: '',
          course: '',

          resultType: '',
          resultValue: ''
        })
      ]),

      projectDetails: this.fb.array([
        this.fb.group({
          projectName: '',
          startDate: '',
          endDate: '',
          projectDetails: '',
          projectCodeLink: ''
        })
      ]),

      otherDetails: this.fb.group({
        skills: '',
        softSkills: '',
        interest: '',
        language: ''
      }),

      certificates: this.fb.array([
        this.fb.group({
          certificateNames: '',
          certificateStartDate: '',
          certificateEndDate: '',
          certificateDetails: ''
        })
      ])
    })
  }

  get CertificateDetails() {
    return this.formDetails.get('certificates') as FormArray;
  }
  addCertificate() {
    let control = <FormArray>this.formDetails.controls['certificates'];
    control.push(
      this.fb.group({
        certificateNames: '',
        certificateStartDate: '',
        certificateEndDate: '',
        certificateDetails: ''
      })
    )
  }
  removeCertificate(index: number) {
    let control = <FormArray>this.formDetails.controls['certificates'];
    control.removeAt(index)
    if (control.length == 0) {
      control.push(
        this.fb.group({
          certificateNames: '',
          certificateStartDate: '',
          certificateEndDate: '',
          certificateDetails: ''
        })
      )
    }
  }

  get ExperienceDetails() {
    return this.formDetails.get('experienceDetails') as FormArray;
  }
  addExperience() {
    let control = <FormArray>this.formDetails.controls['experienceDetails'];
    control.push(
      this.fb.group({
        position: '',
        company: '',
        city: '',

        joinedDate: '',
        leftDate: '',
        companyDescription: '',
        rolesAndResponsibility: '',
        projects: ''
      })
    )
  }
  removeExperience(index: number) {
    let control = <FormArray>this.formDetails.controls['experienceDetails'];
    control.removeAt(index)
    if (control.length == 0) {
      control.push(
        this.fb.group({
          position: '',
          company: '',
          city: '',

          joinedDate: '',
          leftDate: '',
          companyDescription: '',
          rolesAndResponsibility: '',
          projects: ''
        })
      )
    }
  }

  get EducationDetails() {
    return this.formDetails.get('educationDetails') as FormArray;
  }
  addEducation() {
    let control = <FormArray>this.formDetails.controls['educationDetails'];
    control.push(
      this.fb.group({
        education: '',
        institution: '',
        city: '',

        joinedDate: '',
        leftDate: '',
        course: '',

        resultType: '',
        resultValue: ''
      })
    )
  }
  removeEducation(index: number) {
    let control = <FormArray>this.formDetails.controls['educationDetails'];
    control.removeAt(index)
    if (control.length == 0) {
      control.push(
        this.fb.group({
          education: '',
          institution: '',
          city: '',

          joinedDate: '',
          leftDate: '',
          course: '',

          resultType: '',
          resultValue: ''
        })
      )
    }
  }


  get ProjectDetails() {
    return this.formDetails.get('projectDetails') as FormArray;
  }
  addProject() {
    let control = <FormArray>this.formDetails.controls['projectDetails'];
    control.push(
      this.fb.group({
        projectName: '',
        startDate: '',
        endDate: '',
        projectDetails: '',
        projectCodeLink: ''
      })
    )
  }
  removeProject(index: number) {
    let control = <FormArray>this.formDetails.controls['projectDetails'];
    control.removeAt(index)
    if (control.length == 0) {
      control.push(
        this.fb.group({
          projectName: '',
          startDate: '',
          endDate: '',
          projectDetails: '',
          projectCodeLink: ''
        })
      )
    }
  }

  viewResult() {
    // console.log("form", JSON.stringify(this.formDetails.value))
    this.resumeBuilderService.generateResume(this.formDetails.value)
  }

  ngOnInit(): void {
    this.initForm();
  }
}