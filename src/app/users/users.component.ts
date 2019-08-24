import {Component, OnInit} from '@angular/core';
import {UserserviceService} from '../userservice.service';
import {User} from '../user';
import { Repos } from '../repos';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user: User;
repo: Repos;
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
    );
    this.myService.getReopos(searchName).then(
      (results)=>{
        this.repo =this.myService.allRepos
        console.log(this.repo);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.searchs('Owiti-Charles');
    // this.myService.getReopos("Owiti-Charles");
  }


}
