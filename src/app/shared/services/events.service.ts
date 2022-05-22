import { Injectable } from '@angular/core';
import {Club} from '../models/club';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events: Array<Event>;


  constructor() { }
}
