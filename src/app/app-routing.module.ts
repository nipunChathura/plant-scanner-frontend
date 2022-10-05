import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {LoginComponent} from "./component/core/login/login.component";
import {PageNotFoundComponent} from "./component/core/page-not-found/page-not-found.component";
import {SignUpComponent} from "./component/core/sign-up/sign-up.component";
import {ImageSearchComponent} from "./component/dashboard/content/image-search/image-search.component";
import {HistoryComponent} from "./component/dashboard/content/history/history.component";
import {HelpComponent} from "./component/dashboard/content/help/help.component";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'dashboard', component: DashboardComponent, children:[
      {path:'', redirectTo: '/dashboard/home', pathMatch:'full'},
      {path:'home', component: ImageSearchComponent},
      {path:'history', component: HistoryComponent},
      {path:'help', component: HelpComponent}
    ]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
