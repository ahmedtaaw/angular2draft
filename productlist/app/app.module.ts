import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    ProductListComponent],
  bootstrap: [ AppComponent ] // defines the root component of our application which its selector is the one that included in index.html
})
export class AppModule { }
