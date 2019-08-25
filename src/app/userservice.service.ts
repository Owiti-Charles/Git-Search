import {Injectable} from '@angular/core';
import {User} from './user';
import { Repos } from './repos'
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  foundUser: User;
  allRepos: Repos;
  up_key = '2248a8bd35eb376f0b586b764c50c76b67be3a1b';

  constructor(private http: HttpClient) {
    this.foundUser = new User("","","","",0,0,0,"");
    this.allRepos = new Repos("","","",new Date,0,0,"");
  }

  searchUSer(searchName: string) {
   
    interface Responce {
      url:string,
      login: string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string
    }

    return new Promise((resolve, reject) => {
      this.http.get<Responce>('https://api.github.com/users/'+searchName+'?access_token='+this.up_key).toPromise().then(
        (result) => {
          this.foundUser = result;
          console.log(this.foundUser);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
  getReopos(searchName){
    interface Repos{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      watchers_count:number;
      language:string;
      created_at:Date;
    }
    return new Promise((resolve,reject)=>{
      this.http.get<Repos>('https://api.github.com/users/'+searchName+"/repos?order=created&sort=asc?access_token="+this.up_key).toPromise().then(
        (results) => {
          this.allRepos = results;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
}

