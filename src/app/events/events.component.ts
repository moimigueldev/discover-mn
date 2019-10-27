import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.eventsService.getEvents().subscribe(res => {
      console.log('server res', JSON.parse(res));
      
    })
  }

}
