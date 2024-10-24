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
import { OthersMembersComponent } from './others-members/others-members.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ProjectsComponent } from './projects/projects.component';
import { PlanStrategiqueComponent } from './plan-strategique/plan-strategique.component';
import { OrdreInterieurComponent } from './ordre-interieur/ordre-interieur.component';
import { MessagesComponent } from './messages/messages.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfFileComponent } from './pdf-file/pdf-file.component';
import { ExcelReaderComponent } from './excel-reader/excel-reader.component';

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
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PictureSliderComponent } from './picture-slider/picture-slider.component';
import { CommonModule } from '@angular/common';
import { MyNabarComponent } from './my-nabar/my-nabar.component';
import { YoutubeEmbedComponent } from './youtube-embed/youtube-embed.component';










const appRoute: Routes = [

  { path: '', component: HomeComponent },
  //{path: '', redirectTo: 'Accueil', pathMatch: 'full'},
  { path: 'Accueil', component: HomeComponent },
  { path: 'Documetation', component: DocumentationComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Finance', component: ExcelReaderComponent },
  { path: 'PhotoDesmembres', component: PictureSliderComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'PlanStrategique', component: PdfFileComponent },
  { path: 'OrdreInterieur', component: OrdreInterieurComponent },
  { path: 'Messages', component: MessagesComponent },
/*   { path: 'video1/:CDNXNaJ1eQw', component: YoutubeEmbedComponent }, 
  { path: 'video2/:VpvDSz8skb8', component: YoutubeEmbedComponent },  */
/*   { path: 'video1', component: YoutubeEmbedComponent }, 
  { path: 'video2', component: YoutubeEmbedComponent },  */
  { path: 'divers/:videoId', component: YoutubeEmbedComponent },   // Route for Divers
  { path: 'musique/:videoId', component: YoutubeEmbedComponent },   // Route for Divers
  { path: 'jeune/:videoId', component: YoutubeEmbedComponent },   // Route for Divers
  { path: 'yisu/:videoId', component: YoutubeEmbedComponent },
///jeune //yisu

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
    ProjectsComponent,
    PlanStrategiqueComponent,
    OrdreInterieurComponent,
    MessagesComponent,
    PdfViewerModule,
    PictureSliderComponent,
    ExcelReaderComponent,
    MyNabarComponent,
    YoutubeEmbedComponent,
    CommonModule,
    RouterModule,
    RouterModule.forRoot(appRoute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
