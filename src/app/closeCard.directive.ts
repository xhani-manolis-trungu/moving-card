import {
  Directive,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[closingCard]"
})
export class ClosingCard {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

 private isOpen: boolean = false;

  @HostListener("mouseout", ["$event", "$event.target"])
  onMouseOut(event: MouseEvent, targetElement: HTMLElement): void {
    const clickedInside = this.el.nativeElement.contains(targetElement);
    if (clickedInside) !this.isOpen ? this.removeClass() : null
  }

  appendClass() {
    this.renderer.addClass(this.el.nativeElement, "translate-hover");
     this.renderer.addClass(this.el.nativeElement, "translate-border");
    this.isOpen = true;
  }

  removeClass() {
    this.renderer.removeClass(this.el.nativeElement, "translate-hover");
    this.renderer.removeClass(this.el.nativeElement, "translate-border");
  }
}
