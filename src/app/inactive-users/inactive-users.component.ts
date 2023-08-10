import { Component,OnInit } from '@angular/core';
import { UserServices } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
 users!: string[];

constructor(private userService: UserServices){}

ngOnInit(): void {
  this.users = this.userService.inactiveUsers;
}
  onSetToActive(id: number) {
    this.userService.setToActive(id)
  }
}
