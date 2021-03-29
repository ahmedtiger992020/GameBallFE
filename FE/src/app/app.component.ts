import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { ToastrService } from 'ngx-toastr';
import { AppConfigService } from './shared/service/AppConfigService';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [
    `.angular-logo {
        margin: 0 4px 3px 0;
        height: 35px;
        vertical-align: middle;
    }
    .fill-remaining-space {
      flex: 1 1 auto;
    }
    `
  ]
})
export class AppComponent {
  private connection: signalR.HubConnection;

  constructor(private http: HttpClient, private appConfig: AppConfigService,private toastr:ToastrService) {

    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(appConfig.getConfig().hubUrl)

      .build();
    console.log(this.connection);
    this.connection.on('send', data => {
      //   console.log(data);
      this.toastr.success(data, '', {
        timeOut: 3000,
      });
      // debugger;
    });

    this.connection.start()
      .then(() => {
        console.log('MessageHub Connected');
      });
  }
}