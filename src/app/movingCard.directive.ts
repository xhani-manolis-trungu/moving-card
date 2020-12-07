import {
  Directive,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[movingCard]"
})
export class MovingCard {
  private isOpen : boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener("mouseover", ["$event", "$event.target"])
  onMouseOver(event: MouseEvent, targetElement: HTMLElement): void {
    const clickedInside = this.el.nativeElement.contains(targetElement);
    console.log(this.isOpen);
    if (clickedInside) this.isOpen ? this.removeClass() : this.appendClass()
  }

  appendClass() {
    this.renderer.addClass(this.el.nativeElement, "translate-hover");
     this.renderer.addClass(this.el.nativeElement, "translate-border");
    this.isOpen = true;
  }

  removeClass() {
    this.renderer.removeClass(this.el.nativeElement, "translate-hover");
    this.renderer.removeClass(this.el.nativeElement, "translate-border");
    this.isOpen = false;
  }
}
