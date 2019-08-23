export class User {
  constructor(public url:string, public login:string, public html_url:string, public company:string, public location:string, 
    public bio:string, public_repos:number, public followers:number, public following:number, public created_at:Date){

  }
}
