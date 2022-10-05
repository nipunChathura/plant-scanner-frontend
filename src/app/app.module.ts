import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import { LoginComponent } from './component/core/login/login.component';
import { PageNotFoundComponent } from './component/core/page-not-found/page-not-found.component';
import { SignUpComponent } from './component/core/sign-up/sign-up.component';
import { DashBoardHeaderComponent } from './component/dashboard/inner-items/share/dash-board-header/dash-board-header.component';
import { DashBoardDefaultComponent } from './component/dashboard/content/dash-board-default/dash-board-default.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import { ImageSearchComponent } from './component/dashboard/content/image-search/image-search.component';
import { HistoryComponent } from './component/dashboard/content/history/history.component';
import { HelpComponent } from './component/dashboard/content/help/help.component';
import { AboutUsComponent } from './component/dashboard/content/about-us/about-us.component';
import { TitleBarComponent } from './component/dashboard/inner-items/share/title-bar/title-bar.component';



@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        LoginComponent,
        PageNotFoundComponent,
        SignUpComponent,
        DashBoardHeaderComponent,
        DashBoardDefaultComponent,
        ImageSearchComponent,
        HistoryComponent,
        HelpComponent,
        AboutUsComponent,
        TitleBarComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
