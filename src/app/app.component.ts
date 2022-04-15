import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  data="x";
  UpdateData(item:string){
    this.data = 'item';
    console.warn(item)
    this.data=item;
  }
}
