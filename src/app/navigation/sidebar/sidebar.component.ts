import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() closeSideNav = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleClose(){
    this.closeSideNav.emit();
  }

}
