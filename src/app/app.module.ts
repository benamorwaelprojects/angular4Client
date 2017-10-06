import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BlueCloredDirective } from "./blue-clored.directive";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChildComponent } from "./child/child.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { UserComponent } from "./user/user.component";
import { UserService } from "./user.service";
import { AuthguardGuard } from "./authguard.guard";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  {
    path: "", //like localhost/home
    component: HomeComponent
  },
  {
    path: "users",
    pathMatch: "prefix",
    children: [
      {
        path: ":name",
        component: UserComponent
      },
      {
        path: ":name/:id",
        component: UserComponent
      }
    ]
  },
  {
    path: "dashboard", //like localhost/dashboard
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  },

  {
    path: "header", //like localhost/header
    component: HeaderComponent
  },
  {
    path: "child", //like localhost/child
    component: ChildComponent
  },
  {
    path: "loginform", //like localhost/loginform
    component: LoginFormComponent
  },
  {
    path: "**", //like localhost/notfound
    component: NotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlueCloredDirective,
    DashboardComponent,
    ChildComponent,
    FooterComponent,
    LoginFormComponent,
    NotfoundComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [RouterModule.forRoot(appRoutes), BrowserModule, FormsModule],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
