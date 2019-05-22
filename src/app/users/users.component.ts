import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
  }

  getUsersPage(): void {
    this.userService.getUsersPage().subscribe(page => this.users = page.data);
  }

  ngOnInit() {
    this.getUsersPage();
  }

}
