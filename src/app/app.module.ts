import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicHighLightDirective } from './basic-highlight/basic.highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountService } from './account.service';
import { LoggingService } from './logging.service';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CounterService } from './counter.service';
//custom service providers added in here AccountService
@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    BasicHighLightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AccountService,LoggingService,CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
