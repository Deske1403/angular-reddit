import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'side-navigation-content';

  constructor() { }

  ngOnInit() {
  }

}
