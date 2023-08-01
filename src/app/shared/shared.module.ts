import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';

import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { MaterialModule } from './material.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TagInputModule } from 'ngx-chips';
import { GenerateResumeService } from './services/generate-resume.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TablerIconsModule.pick(TablerIcons),
    MaterialModule,
    NgApexchartsModule
  ],
  exports: [
    TablerIconsModule,
    MaterialModule,
    NgApexchartsModule,
    TagInputModule
  ],
  providers: [
    TitleCasePipe,
    GenerateResumeService,
    UpperCasePipe
  ]
})
export class SharedModule { }
