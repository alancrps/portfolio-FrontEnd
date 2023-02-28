import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationAndExperienceComponent } from './components/education-and-experience/education-and-experience.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavComponent,
    BannerComponent,
    AboutmeComponent,
    SkillsComponent,
    EducationAndExperienceComponent,
    ProyectsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
