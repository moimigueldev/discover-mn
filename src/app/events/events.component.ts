import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from '../services/dynamic-script-loader.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.loadScripts();
  }

  loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('ticketMaster').then(data => {
      // Script Loaded Successfully
      this.spinner.hide();
    }).catch(error => this.spinner.hide());
  }
}
