import {Component, OnInit} from '@angular/core';
import {ClubsService} from '../shared/services/clubs.service';
import {Club} from '../shared/models/club';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  public clubs: Club[];

  constructor(private clubService: ClubsService) {
  }

  ngOnInit(): void {
    this.getClubs();
  }


  getClubs(): any {
    this.clubs = this.clubService.getClubs();
    console.log(this.clubs);

  }
}
