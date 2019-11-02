import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { DynamicScriptLoaderService } from '../services/dynamic-script-loader.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(
    private eventsService: EventsService,
    private dynamicScriptLoader: DynamicScriptLoaderService
  ) { }

  ngOnInit() {
    console.log('initing');
    this.loadScripts();
  }

  loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('ticketMaster').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }
}
