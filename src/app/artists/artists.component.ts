import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  constructor() { }

  favoriteArtists: string[] = ["Max Richter 🇩🇪", "Frank Sinatra 🇺🇸", "Bob Marley 🇯🇲", "Oliver Mtukudzi 🇿🇼", "Aviici 🇸🇪"]

  ngOnInit(): void {
  }

}
