import { Component, OnInit } from '@angular/core';
import { TALKS_ONLINE } from './talks_online.data';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss']
})
export class OnlineComponent implements OnInit {

  talks = TALKS_ONLINE;
  onlinespeakers = [];

  constructor() {
   }

  ngOnInit() {
    this.loadPeople(this.talks);
  }

  loadPeople(source: any) {
    source.forEach(content => {
      content.speakers.forEach(speaker => {
          this.onlinespeakers.push(speaker);
      });
    });
  }

}
