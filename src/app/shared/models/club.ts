import {User} from './user';

export interface Club {

  id: number;
  nom: string;
  description: string;
  responsable: User;
  membres: User[];
  image: string;


}
