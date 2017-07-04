import { Component, HostBinding, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Article } from '../article/article.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent{
  @HostBinding('attr.class') cssClass = 'add-new-post';
  
  modalConfig = {
    disableClose: false,
    panelClass: 'new-post-dialog',
    hasBackdrop: true,
    backdropClass: '',
    width: '600px',
    height: '',
    position: {
      top: '10%',
      bottom: '',
      left: '',
      right: ''
    },
    data: {
      message: ''
    }
  };

  selectedOption: string;

  constructor(public dialog: MdDialog) { }

  openDialog(){
    let dialogRef = this.dialog.open(NewPostDialog, this.modalConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

}

@Component({
  selector: 'new-post-dialog',
  templateUrl: './new-post-dialog.html',
  styleUrls: ['./new-post-dialog.scss']
})
export class NewPostDialog {

  @HostBinding('attr.class') cssClass = 'new-post';

  addPost(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding post title: ${title.value} and link: ${link.value}`);
    return false;
  }
}