import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontend-component',
  templateUrl: './frontend-component.component.html',
  styleUrls: ['./frontend-component.component.css']
})
export class FrontendComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
