import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[moveIn()],
  host: {'[@moveIn]':''}
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
