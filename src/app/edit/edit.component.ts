import { Component, OnInit,Inject } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { DataService } from '../data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updateList: FormGroup;
  lists=[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder, private dbService: DataService,public dialog: MatDialogRef<any>) { }

  ngOnInit() {
    this.updateList =this.fb.group({
      ride: new FormControl(this.data.ride),
      park: new FormControl(this.data.park),
      land: new FormControl(this.data.land)

    })

  }
      onUpdateList(): void {
        this.lists.unshift(this.updateList.value)
        this.dbService.updateList(this.updateList.value, this.data.id).subscribe(List => this.lists[0] = List)
        this.closeDialog();
      }
      closeDialog() {
        this.dialog.close();
      }


}
