import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NluDataComponent } from './nlu-data/nlu-data.component';
import { RulesComponent } from './rules/rules.component';
import { DomainComponent } from './domain/domain.component';
import { StoriesListComponent } from './stories-list/stories-list.component';
import { StoriesFormComponent } from './stories-list/stories-form/stories-form.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';




const appRoutes: Routes = [


  {path: '', component:  HomeComponent},
  {path: 'sidebars', component:  SidebarComponent},
  {path: 'nlu', component:  NluDataComponent},
  {path: 'rules', component:  RulesComponent},
  {path: 'domains', component:  DomainComponent},
  {path: 'homes',component: HomeComponent},
  {path: 'stories',component: StoriesListComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NluDataComponent,
    RulesComponent,
    DomainComponent,
    StoriesListComponent,
    StoriesFormComponent
  ],
  imports: [

    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
