import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[red-hint]'
})
export class ErrorHintDirective implements OnInit{
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement,'color','red')
  }

}
