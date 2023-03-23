import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './modules/home/home.module';
import { EditHeroModule } from './modules/edit-hero/edit-hero.module';
import { AddHeroModule } from './modules/add-hero/add-hero.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    EditHeroModule,
    AddHeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
