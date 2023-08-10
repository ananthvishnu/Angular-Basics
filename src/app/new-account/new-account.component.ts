import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService] //in here services added we tell angular how to created
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {
    this.accountService.statusUpdated.subscribe((status: string) =>
      alert('New Status:' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    //this.loggingService.LogStatusChange(accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
    // const service = new LoggingService();
    // service.LogStatusChange(accountStatus)
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
