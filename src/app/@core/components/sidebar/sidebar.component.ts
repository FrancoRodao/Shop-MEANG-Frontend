import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  sidebarState: boolean = false
  @Output() sideBar = new EventEmitter<boolean>();

  constructor() { }
  

  ngOnInit(): void {
    
  }

  hover(){
    this.sidebarState = !this.sidebarState
    console.log(this.sidebarState)
    this.sideBar.emit(this.sidebarState)
  }

}
