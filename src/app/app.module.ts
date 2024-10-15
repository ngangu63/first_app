import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { MembresComponent } from './membres/membres.component';
import { NavBulmaComponent } from './nav-bulma/nav-bulma.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { FinanceComponent } from './finance/finance.component';
import { OthersMembersComponent} from './others-members/others-members.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { PlanStrategiqueComponent } from './plan-strategique/plan-strategique.component';
import { OrdreInterieurComponent } from './ordre-interieur/ordre-interieur.component';
import { MessagesComponent } from './messages/messages.component';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';









const appRoute: Routes =[

  {path: '', component: HomeComponent},
  //{path: '', redirectTo: 'Accueil', pathMatch: 'full'},
  {path: 'Accueil', component: HomeComponent},
  {path: 'Documetation', component: DocumentationComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent} ,
  {path: 'Finance', component: FinanceComponent} ,
  {path: 'Leadership', component: LeadershipComponent} ,
  {path: 'Projects', component: ProjectsComponent} , 
  {path: 'PlanStrategique', component: PlanStrategiqueComponent},
  {path: 'OrdreInterieur', component: OrdreInterieurComponent},
  {path: 'Messages', component:MessagesComponent}


]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    HeaderComponent,
    MyfooterComponent,
    MembresComponent,
    ContactComponent,
    FinanceComponent,
    OthersMembersComponent,
    NavBulmaComponent,
    HomeComponent,
    DocumentationComponent,
    AboutComponent,
    ProjectsComponent,
    LeadershipComponent,
    PlanStrategiqueComponent,
    OrdreInterieurComponent,
    MessagesComponent,
    RouterModule.forRoot(appRoute)
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
