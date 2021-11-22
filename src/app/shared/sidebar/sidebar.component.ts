import { Component, OnInit } from '@angular/core';
import { SiderbarService } from '../../services/siderbar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {


  menuItem: any[]= [];


  constructor(private sidebarService: SiderbarService) {
    this.menuItem= sidebarService.menu;
    console.log(this.menuItem);
  }


  ngOnInit(): void {
  }

}
