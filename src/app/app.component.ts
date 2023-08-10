import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { UserServices } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserServices]
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
