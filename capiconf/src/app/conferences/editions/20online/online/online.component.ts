import { Component, OnInit } from '@angular/core';
import { AGENDA_ONLINE } from './agenda_online.data';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss']
})
export class OnlineComponent implements OnInit {

  agenda = AGENDA_ONLINE;
  onlinespeakers = [];
  onlineagenda = [];

  constructor() {
  }

  ngOnInit() {
    this.loadPeopleFromTalks(this.agenda);
    this.loadAgenda(this.agenda);
    //this.shuffle(this.onlinespeakers);
  }

  loadPeopleFromTalks(source: any) {
    source.forEach(content => {

      content.talks.forEach(talk => {
        talk.speakers.forEach(speaker => {
          this.onlinespeakers.push(speaker);
        });
      });
    });
  }

  loadAgenda(source: any) {
    source.forEach(content => {
      this.onlineagenda.push(content);
    });
  }

  shuffle(array:any) {
    array.sort(() => Math.random() - 0.5);
  }

}
