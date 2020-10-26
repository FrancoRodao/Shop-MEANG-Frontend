import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  sideBarToggle: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  sideBar(event){
    this.sideBarToggle = event
  }

}
