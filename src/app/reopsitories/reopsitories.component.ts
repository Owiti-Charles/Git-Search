import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reopsitories',
  templateUrl: './reopsitories.component.html',
  styleUrls: ['./reopsitories.component.css']
})
export class ReopsitoriesComponent implements OnInit {

  constructor() { }

  repoSearch(searchName){
    console.log(searchName);
  }

  ngOnInit() {
  }
 
}
