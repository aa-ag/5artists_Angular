import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { ShellComponent } from './shared/shell/shell.component';
import { RichterComponent } from './richter/richter.component';
import { MtukudziComponent } from './mtukudzi/mtukudzi.component';
import { AviiciComponent } from './aviici/aviici.component';
import { MarleyComponent } from './marley/marley.component';
import { SinatraComponent } from './sinatra/sinatra.component';


const routes: Routes = [
  {
    path: 'artists', component: ArtistsComponent
  },
  {
    path: 'shared', component: ShellComponent
  },
  {
    path: 'richter', component: RichterComponent
  },
  {
    path: 'mtukudzi', component: MtukudziComponent
  },
  {
    path: 'aviici', component: AviiciComponent
  },
  {
    path: 'marley', component: MarleyComponent
  },
  {
    path: 'sinatra', component: SinatraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
