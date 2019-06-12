import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { DataService } from '../data.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createList: FormGroup;
  list =[];


  constructor(private fb: FormBuilder, private dbService: DataService,public dialog: MatDialogRef<any> ) { }

  ngOnInit() {
    this.createList =this.fb.group({
      ride: new FormControl(),
      park: new FormControl(),
      land: new FormControl()
    })
  }

    onCreateList(): void{
      this.list.unshift(this.createList.value)
      this.dbService.makeList(this.createList.value).subscribe(List => this.list[0] =List)
      this.closeDialog();
    }
    closeDialog() {
      this.dialog.close();
    }


}
