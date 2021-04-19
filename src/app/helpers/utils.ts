import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

export class Utils {
    
    static saveDataUrl(dataUrl: any, fileExtension: string) {
        var link = document.createElement('a');
        link.download = 'gdg-lockup-img.' + fileExtension;
        link.href = dataUrl;
        link.click();
    }

    static filter (node: any) {
        return (node.tagName !== 'i');
    }

    static saveLockup(domNode: any, fileType: string) {
        switch(fileType) {
            case 'png':
            htmlToImage.toPng(document.getElementById(domNode) as HTMLElement)
            .then((dataUrl) => {
                Utils.saveDataUrl(dataUrl, fileType);
            });
            break;
            case 'svg':
              htmlToImage.toSvg(document.getElementById(domNode) as HTMLElement, { filter: Utils.filter })
              .then((dataUrl) => {
                Utils.saveDataUrl(dataUrl, fileType);
              });
            break;
            case 'jpeg':
              htmlToImage.toJpeg(document.getElementById(domNode) as HTMLElement, { quality: 0.95 })
              .then((dataUrl) => {
                Utils.saveDataUrl(dataUrl, fileType);
              });
            break;
          }
    }
}