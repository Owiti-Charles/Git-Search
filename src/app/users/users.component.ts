import {Component, OnInit} from '@angular/core';
import {UserserviceService} from '../userservice.service';
import {User} from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user: User[];
  constructor(public myService: UserserviceService) {
  }

  ngOnInit() {
    this.myService.searchUSer("");
  }

  searchs(searchName) {
    this.user = this.myService.foundUser;
  }
}
