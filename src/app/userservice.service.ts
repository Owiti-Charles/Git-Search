import {Injectable} from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  foundUser: User[] = [];

  constructor(private http: HttpClient) {
  }

  searchUSer(searchName: string) {
    // tslint:disable-next-line:class-name
    interface data {
      login: string;
    }

    const promise = new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.http.get<data>('https://api.github.com/users/MungaiKeren?access_token=3cbbddb991c02e7d5a2f0fd4224f9267a5153e5f').toPromise().then(
        (result) => {
         
          // this.foundUser.push(result);
          console.log(result);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    return promise;
  }
}

