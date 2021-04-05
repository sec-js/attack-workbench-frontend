import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StixObject } from 'src/app/classes/stix/stix-object';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>, @Inject(MAT_DIALOG_DATA)  public config: AddDialogConfig) {}

  ngOnInit(): void {}

}

export interface AddDialogConfig {
  selectableObjects: StixObject[]; // Stix Object array of selectable objects not in list
  type: string; // type to display stix list
  select: SelectionModel<string>; // selection model to retrieve list of selected object
  buttonLabel?: string; // optional button label, default "add"
  title?: string; // dialog text
}
