import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as htmlToImage from 'html-to-image';
import { Utils } from './../../helpers/utils';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent implements OnInit {

  showOptions: boolean = false;
  generatedName: string = 'Chapter Name';
  size: number = 2;
  color: string = 'rgba(72,132,244)';
  transparentBg: boolean = true;
  showGDGLong: boolean = true;
  showVertical: boolean = false;
  showCentered: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  onSaveLockup(domNode: any, fileType: string) {
    Utils.saveLockup(domNode, fileType);
  }
}
