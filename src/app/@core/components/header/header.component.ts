import { Component, EventEmitter, OnInit, Output } from '@angular/core';




@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() sideBar = new EventEmitter<boolean>();
  sideBarValue: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.sideBarValue = !this.sideBarValue
    this.sideBar.emit(this.sideBarValue)

  }

}
