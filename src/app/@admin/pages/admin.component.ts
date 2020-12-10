import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  sidebarState: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  sideBar(event: boolean){
    this.sidebarState = event
    console.log('sidebar on', event)
  }

}
