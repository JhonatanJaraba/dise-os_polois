import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../myUtils/utils.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isCollapsed = false;
  
  constructor(private utils: UtilsService,) { }

  ngOnInit(): void {
  }

  sidebar(ok: any){
    this.utils.señalesBehavior(ok);
    console.log("viendo", ok);
  }
}
