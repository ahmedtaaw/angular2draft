import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup} from '@angular/forms';

import {Contacts} from './contacts.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contactinfo: FormGroup;

  ngOnInit(){
    this.contactinfo = new FormGroup({
      name: new FormControl(''),
      contactno: new FormControl('')
    });
  }

  onSubmit({value,valid}:{value:Contacts,valid:boolean}){
    console.log(value,valid);
  }
}
