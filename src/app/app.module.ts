import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowImagesComponent } from './show-images/show-images.component';
import { ShowLocalImagesComponent } from './show-local-images/show-local-images.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'images', component: ShowImagesComponent},
  { path: 'dowloads', component: ShowLocalImagesComponent },
  { path: '**', component:  PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowImagesComponent,
    ShowLocalImagesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule ,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
