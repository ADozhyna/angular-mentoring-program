import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnChanges {

  private borderColor: string;

  @Input() publicationDate: string;

  constructor(private element: ElementRef, private renderer2: Renderer2) { 
    this.setBorder(this.borderColor);
  }

  private setBorder(color: string) {
    this.renderer2.setStyle(this.element.nativeElement, 'border-bottom', `5px solid ${color}`);
  }

  public ngOnChanges() {
    this.borderColor = 'black';

    const date: Date = new Date(this.publicationDate);

    const days: number = Math.ceil(Math.abs(Date.now() - date.getTime()) / (1000 * 3600 * 24));

    if(days < 14) {
      this.borderColor = '#bdee68';
    } else {
      this.borderColor = '#0079AD';
    }

    this.setBorder(this.borderColor)

    console.log(date)
  }

}
