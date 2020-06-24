import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Output() clickOutsideElement: EventEmitter<MouseEvent>;

  constructor(
    private elementRef: ElementRef
  ) {
    this.clickOutsideElement = new EventEmitter<MouseEvent>();
   }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {

    const targetElement = event.target as HTMLElement;

    if (targetElement && !this.elementRef.nativeElement.contains(targetElement) ) {
      this.clickOutsideElement.emit(event);
    }


  }
}
