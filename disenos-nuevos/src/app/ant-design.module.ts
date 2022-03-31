import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzNotificationModule } from 'ng-zorro-antd/notification';


import {
  MenuFoldOutline,
  MenuUnfoldOutline
} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [MenuFoldOutline, MenuUnfoldOutline];
const MODULES:any[] = [
  NzIconModule.forChild(icons),
  NzButtonModule,
  NzGridModule,
  NzLayoutModule,
  NzCarouselModule,
  NzBreadCrumbModule,
  NzMenuModule,
  NzCardModule,
  NzAvatarModule,
  NzFormModule,
  NzInputModule,
  NzNotificationModule,
  NzSelectModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports:[
    ...MODULES
  ]
})
export class AntDesignModule { }
