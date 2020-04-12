import { Component, OnInit } from '@angular/core';
import { TALKS_ONLINE } from './talks_online.data';
import { AGENDA_ONLINE } from './agenda_online.data';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss']
})
export class OnlineComponent implements OnInit {

  agenda = AGENDA_ONLINE;
  talks = TALKS_ONLINE;
  onlinespeakers = [];
  onlineagenda = [];

  constructor() {
   }

  ngOnInit() {
    this.loadPeopleFromTalks(this.talks);
    this.loadAgenda(this.agenda);
  }

  loadPeopleFromTalks(source: any) {
    source.forEach(content => {
      content.speakers.forEach(speaker => {
          this.onlinespeakers.push(speaker);
      });
    });
  }

  loadAgenda(source: any) {
    source.forEach(content => {
          this.onlineagenda.push(content);
    });
  }

}
