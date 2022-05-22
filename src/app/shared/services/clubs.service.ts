import {Injectable} from '@angular/core';
import {Club} from '../models/club';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {
  private clubs: Array<Club>;

  constructor() {
  }

  getClubs(): any {
    this.clubs = [{
      id: 1,
      nom: 'Epi ARSII',
      description: '***************************************************************************************************************',
      responsable: {id: 1, nom: 'Abdelaali', prenom: 'Basma'},
      membres: [{id: 2, nom: 'Test', prenom: 'test'}],
      image: '/assets/images/arsiiepi.jpg',

    },
      {
        id: 2,
        nom: 'Epi Enactus',
        description: '***************************************************************************************************************',
        responsable: {id: 1, nom: 'Test', prenom: 'test'},
        membres: [{id: 2, nom: 'Test', prenom: 'test'}],
        image: '/assets/images/enactus-epi-sousse.jpg',
      },
      {
        id: 3,
        nom: 'Epi Gaming freaks',
        description: '***************************************************************************************************************',
        responsable: {id: 1, nom: 'Test', prenom: 'test'},
        membres: [{id: 2, nom: 'Test', prenom: 'test'}],
        image: '/assets/images/gaming-freaks.png',
      },
      {
        id: 4,
        nom: 'Epi IEEE',
        description: '***************************************************************************************************************',
        responsable: {id: 1, nom: 'Test', prenom: 'test'},
        membres: [{id: 2, nom: 'Test', prenom: 'test'}],
        image: '/assets/images/ieee-epi.jpg',
      },
      {
        id: 5,
        nom: 'Epi Copro',
        description: '***************************************************************************************************************',
        responsable: {id: 1, nom: 'Test', prenom: 'test'},
        membres: [{id: 2, nom: 'Test', prenom: 'test'}],
        image: '/assets/images/copro.png',
      },
    ];
    return this.clubs;
  }
}

