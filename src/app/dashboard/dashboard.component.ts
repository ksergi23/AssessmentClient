import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {CreateComponent} from '../create/create.component'
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dbService: DataService, public dialog: MatDialog,public update: MatDialog) { }
  lists= [];
  postInfo='';

  ngOnInit() {
    this.getList()
  }

  openDialog() {
    const createDialog = this.dialog.open(CreateComponent)

    createDialog.afterClosed().subscribe(result => {
      this.getList()
    })
  }

  getList(): void {
    this.dbService.getList().subscribe(List => {
      this.lists = List;
      this.lists.reverse()
      console.log(List)

    })
  }
  deleteList(id): void {
    this.dbService.deleteList(id).subscribe(List => {
      // this.stories =Story
      this.getList();
    })
  }

  updateDialog(id) {
    // console.log(id)
    this.postInfo = id
    const update = this.update.open(EditComponent, {
      data: this.postInfo

    })

    update.afterClosed().subscribe(result => {
      this.getList()
  
    })
  }


}
