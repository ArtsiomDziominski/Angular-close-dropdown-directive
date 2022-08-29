import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appCloseDropdown]'
})
export class CloseDropdownDirective {
  @Output() clickOutSide: EventEmitter<void> = new EventEmitter<void>();

  constructor(private element: ElementRef) {}

  @HostListener("document:click", ['$event']) clickOut($event: PointerEvent) {
    const clickElement = ($event.target as any).parentElement;
    const elementButton = this.element.nativeElement

    if (elementButton !== clickElement) {
      this.clickOutSide.emit();
    }
  }
}
