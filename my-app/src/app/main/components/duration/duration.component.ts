import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent implements OnInit {

  public duration: string;

  @Output() public getDuration: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public emitDuration(): void {
    this.getDuration.emit(this.duration);
  }

  public ngOnInit(): void {
  }

}
