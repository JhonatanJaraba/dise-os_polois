import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilsService } from '../../myUtils/utils.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  isCollapsed = false;
  
  constructor(private utils: UtilsService,) {
   }

  private userServiceSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.userServiceSubscription = this.utils.subjectSidebarBehavior.subscribe( 
      subjectSidebarBehavior =>{
          console.log("viendo33", subjectSidebarBehavior);
          this.isCollapsed = subjectSidebarBehavior;
      }
    )
    this.isCollapsed = false;
    console.log(this.isCollapsed);
  }

}
