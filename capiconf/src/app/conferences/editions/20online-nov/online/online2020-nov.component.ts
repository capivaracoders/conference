import { Component, OnInit } from '@angular/core';
import {AGENDA_ONLINE, EventSchedule, Presentation, Speaker} from './agenda_online2020-nov.data';

@Component({
  selector: 'app-online-2020-nov',
  templateUrl: './online2020-nov.component.html',
  styleUrls: ['./online2020-nov.component.scss']
})
export class Online2020NovComponent implements OnInit {

  readonly showSoonMessages: boolean = true;
  readonly showDonateSection: boolean = false;
  readonly signUpFormURL: string = 'https://forms.gle/UDAEmXbyedWng3Ny8';
  readonly c4pFormURL: string = 'https://docs.google.com/forms/d/e/1FAIpQLScO1sbJfRdIfY9Vh1_nKzvabdYt9yv_Eu8R0jFI_aPS-R9jzw/viewform';
  readonly lastUpdated: string = '28 de setembro de 2020';

  speakers: Speaker[] = [];
  schedule: EventSchedule[] = [];

  constructor() {
  }

  ngOnInit() {
    this.loadPeopleFromTalks();
    this.loadSchedule();
  }

  loadPeopleFromTalks() {
    if (this.showSoonMessages) { return; }
    this.speakers = [...AGENDA_ONLINE]
      .map(day => day.talks)
      .flat()
      .map(presentation => presentation.speakers)
      .flat();
  }

  loadSchedule() {
    if (this.showSoonMessages) {
      this.schedule = [...AGENDA_ONLINE].map(dia => ({ ...dia, talks: [] }));
    } else {
      this.schedule = [...AGENDA_ONLINE];
    }
  }

}
