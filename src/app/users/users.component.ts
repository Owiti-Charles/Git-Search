import {Component, OnInit} from '@angular/core';
import {UserserviceService} from '../userservice.service';
import {User} from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user: User;
  constructor(public myService: UserserviceService) {
  }

  searchs(searchName) {
    this.myService.searchUSer(searchName).then(
      (success)=>{
        this.user = this.myService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    ) 
  }

  ngOnInit() {
    this.searchs('Owiti-Charles');

  }


}
