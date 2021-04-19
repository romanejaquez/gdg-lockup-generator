import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as imgResources from "../../../assets/resources/imgs/resources-mapping.json";

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.component.html',
  styleUrls: ['./other-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OtherPageComponent implements OnInit {

  constructor() { }

  imgResourcesList = imgResources.hiResImgs;

  ngOnInit(): void {
  }

}
