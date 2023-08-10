import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighLight') highLightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

  //? @HostListener Decorator
  @HostListener('mouseenter') mouseover(eventData: Event) {
    //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'black')
    //  this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red')
    this.backgroundColor = this.highLightColor

    //? @HostBinding method
    // this.backgroundColor = 'black';
  }
  //? @HostListener Decorator
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
this.backgroundColor = this.defaultColor
    //? @HostBinding method
    // this.backgroundColor = 'transparent';
  }
}
