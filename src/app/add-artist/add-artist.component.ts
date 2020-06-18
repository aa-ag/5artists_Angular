import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.scss']
})
export class AddArtistComponent implements OnInit {

  addArtistForm = new FormGroup ({
    artistName: new FormControl('', Validators.required),
    nationality: new FormControl('', Validators.required)
  })

  constructor() { }

  getArtistData() {
    console.log(this.addArtistForm.value)
    this.addArtistForm.reset()
  }

  ngOnInit(): void {
  }

}
