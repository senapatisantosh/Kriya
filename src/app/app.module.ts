import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule } from '@angular/common/http';
import { routing } from './app.routing';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { HtcHomeComponent } from './htc-home/htc-home.component';
import { HtcComponentComponent } from './htc-component/htc-component.component';
import { HtcDocComponent } from './htc-doc/htc-doc.component';
import { HtcStatisticsComponent } from './htc-statistics/htc-statistics.component';
import { HtcTeamComponent } from './htc-team/htc-team.component';
import { CalendarHeatmap } from 'angular2-calendar-heatmap';
import { Ng2OdometerModule } from 'ng2-odometer';
import { ChartsModule } from 'ng2-charts';
import { NgxGaugeModule } from 'ngx-gauge';
import { HtcBlogComponent } from './htc-blog/htc-blog.component';
import { SimpleSidenavModule } from 'simple-sidenav';
import { ComponentOverviewComponent } from './htc-doc/Docrepository/component-overview/component-overview.component';
import { FrontendComponentComponent } from './htc-doc/Docrepository/frontend-component/frontend-component.component';
import { BackendComponentComponent } from './htc-doc/Docrepository/backend-component/backend-component.component';
import { SecurityComponent } from './htc-doc/Docrepository/security/security.component';
import { ServicesComponent } from './htc-doc/Docrepository/services/services.component';
import { UsabilityComponent } from './htc-doc/Docrepository/usability/usability.component';
import { GlobalComponent } from './htc-doc/Docrepository/frontend-component/global/global.component';
import { NavigationComponent } from './htc-doc/Docrepository/frontend-component/navigation/navigation.component';
import { ExtraComponent } from './htc-doc/Docrepository/frontend-component/extra/extra.component';
import { FormComponent } from './htc-doc/Docrepository/frontend-component/form/form.component';




let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("904775593897-u3rh0cg1slm6kpm2qupvoag68brp0at0.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("286105265425905")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HtcHomeComponent,
    HtcComponentComponent,
    HtcDocComponent,
    HtcStatisticsComponent,
    HtcTeamComponent,
    CalendarHeatmap,
    HtcBlogComponent,
    ComponentOverviewComponent,
    FrontendComponentComponent,
    BackendComponentComponent,
    SecurityComponent,
    ServicesComponent,
    UsabilityComponent,
    GlobalComponent,
    NavigationComponent,
    ExtraComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    routing,
    BrowserAnimationsModule,
    SocialLoginModule,
    ChartsModule,
    NgxGaugeModule,
    SimpleSidenavModule,
    ToastrModule.forRoot(),
    Ng2OdometerModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: AuthServiceConfig, useFactory: provideConfig },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
