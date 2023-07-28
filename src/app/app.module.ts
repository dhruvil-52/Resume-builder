import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { ToastrModule } from 'ngx-toastr';


import { LayoutsComponent } from './containers/layouts/layouts.component';
import { SidebarComponent } from './containers/layouts/sidebar/sidebar.component';
import { HeaderComponent } from './containers/layouts/header/header.component';
import { BrandingComponent } from './containers/layouts/sidebar/branding.component';
import { AppNavItemComponent } from './containers/layouts/sidebar/nav-item/nav-item.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    ToastrModule.forRoot()
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
  providers: [
  ]
})
export class AppModule { }
