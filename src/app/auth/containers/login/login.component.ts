import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

  catch(event: any) {
    console.log('catches');
    console.log(event);
  }
}
