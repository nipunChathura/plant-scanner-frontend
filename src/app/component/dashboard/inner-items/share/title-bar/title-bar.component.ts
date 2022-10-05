import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  constructor(private r: Router) {
  }

  ngOnInit(): void {
  }

  getLoginPage() {
    this.r.navigateByUrl('');
  }
}
