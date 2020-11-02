import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule

  ],
  exports: [
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule
  ]
})
export class SharedModule { }
