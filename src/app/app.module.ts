import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProjectFilterPipe } from './project-filter.pipe';
import { ProjectsComponent } from './projects/projects.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { HomeComponent } from './home/home.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectFilterPipe,
    ProjectsComponent,
    CategoriesComponent,
    TagsComponent,
    ProjectDetailComponent,
    HomeComponent,
    HamburgerMenuComponent,
    ContactComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
