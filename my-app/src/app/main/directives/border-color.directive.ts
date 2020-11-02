import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnChanges {

  private borderColor: string;

  @Input() public publicationDate: string;

  constructor(private element: ElementRef, private renderer2: Renderer2) {
    this.setBorder(this.borderColor);
  }

  private setBorder(color: string): void {
    this.renderer2.setStyle(this.element.nativeElement, 'border-bottom', `5px solid ${color}`);
  }

  private getDaysNumber(): number {
    const date: Date = new Date(this.publicationDate);
    return Math.ceil(Math.abs(Date.now() - date.getTime()) / (1000 * 3600 * 24));
  }

  public ngOnChanges(): void {
    const days: number = this.getDaysNumber();
    const colorForNewItem: string = '#bdee68';
    const colorForOldItem: string = '#0079AD';

    if (days < 14) {
      this.borderColor = colorForNewItem;
    } else {
      this.borderColor = colorForOldItem;
    }

    this.setBorder(this.borderColor);
  }

}
