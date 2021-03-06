import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistsComponent } from './artists/artists.component';
import { SharedModule } from './shared/shared.module';
import { RichterComponent } from './richter/richter.component';
import { SinatraComponent } from './sinatra/sinatra.component';
import { MarleyComponent } from './marley/marley.component';
import { MtukudziComponent } from './mtukudzi/mtukudzi.component';
import { AviiciComponent } from './aviici/aviici.component';
import { AddArtistComponent } from './add-artist/add-artist.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    RichterComponent,
    SinatraComponent,
    MarleyComponent,
    MtukudziComponent,
    AviiciComponent,
    AddArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
