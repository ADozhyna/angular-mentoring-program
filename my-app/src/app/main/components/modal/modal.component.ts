import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private coursesService: CoursesService) { }

  public ngOnInit(): void {
  }

  public remove(): void {
    this.coursesService.removeItem(this.data);
    this.dialogRef.close();
  }

  public cancelRemove(): void {
    this.dialogRef.close();
  }

}
