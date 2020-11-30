import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent implements OnInit {

  public duration: string;

  @Output() public updateDuration: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public emitDuration(): void {
    this.updateDuration.emit(this.duration);
  }

  public ngOnInit(): void {
  }

}
