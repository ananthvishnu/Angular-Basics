import { Component,Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers:[LoggingService]
})
export class AccountComponent {
  @Input() account!: {name: string, status: string};
  @Input() id!: number;

  constructor(private loggingService: LoggingService,
    private accountService: AccountService){}

  onSetTo(status: string) {
    // console.log('A server status changed, new status: ' + status);
    this.accountService.updateStatus(this.id, status)
   // this.loggingService.LogStatusChange(status)
   this.accountService.statusUpdated.emit(status)
  }


}
