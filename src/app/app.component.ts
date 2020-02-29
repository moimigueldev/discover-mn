import { Component } from '@angular/core';
import { AdminService } from './services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private admin: AdminService
  ) {

  }

  ngOnInit() {
    // this.admin.visitor().subscribe(res => {
    //   console.log('res', res)
    // });
  }

}
