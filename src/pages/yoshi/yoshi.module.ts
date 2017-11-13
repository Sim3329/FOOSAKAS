import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoshiPage } from './yoshi';

@NgModule({
  declarations: [
    YoshiPage,
  ],
  imports: [
    IonicPageModule.forChild(YoshiPage),
  ],
})
export class YoshiPageModule {}
