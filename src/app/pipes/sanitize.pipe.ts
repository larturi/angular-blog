import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor(
    private domSanitizer: DomSanitizer
  ) {

  }

  transform(html: string): unknown {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }

}
