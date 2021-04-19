import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent implements OnInit {

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

  filter (node: any) {
    return (node.tagName !== 'i');
  }

  onSaveLockup(domNode: any, fileType: string) {
    switch(fileType) {
      case 'png':
        htmlToImage.toPng(document.getElementById(domNode) as HTMLElement)
        .then((dataUrl) => {
          this.saveDataUrl(dataUrl, fileType);
        });
      break;
      case 'svg':
        htmlToImage.toSvg(document.getElementById(domNode) as HTMLElement, { filter: this.filter })
        .then((dataUrl) => {
          this.saveDataUrl(dataUrl, fileType);
        });
      break;
      case 'jpeg':
        htmlToImage.toJpeg(document.getElementById(domNode) as HTMLElement, { quality: 0.95 })
        .then((dataUrl) => {
          this.saveDataUrl(dataUrl, fileType);
        });
      break;
    }
  }

  saveDataUrl(dataUrl: any, fileExtension: string) {
    var link = document.createElement('a');
    link.download = 'gdg-lockup-img.' + fileExtension;
    link.href = dataUrl;
    link.click();
  }
}
