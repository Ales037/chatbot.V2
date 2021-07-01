import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StoriesDetail } from 'src/app/shared/stories-detail.model';

import { ToastrService } from 'ngx-toastr';
import { StoriesDetailService } from 'src/app/shared/stories-detail.service';


@Component({
  selector: 'app-stories-form',
  templateUrl: './stories-form.component.html',
  styleUrls: ['./stories-form.component.css']
})

export class StoriesFormComponent implements OnInit {

  constructor(public service:StoriesDetailService, private toastr:ToastrService) { }


  ngOnInit(): void {

  }

  onSubmit(form: NgForm){

  if (this.service.formData.stories_Id == 0)
  this.insertRecord(form);
  else
  this.updateRecord(form);


  }

  insertRecord(form: NgForm){

    this.service.postStoriesDetail().subscribe(
     res => {
      console.log(res);
      this.resetForm(form);
      this.service.refreshList();
      this.toastr.success('Submitted successfully')
     },
     err => { console.log(err);}
     );
  }

  updateRecord(form: NgForm){
    this.service.putStoriesDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully')
      },
      err => { console.log(err);}
    );
  }

resetForm(form: NgForm){
  form.form.reset();
  this.service.formData = new StoriesDetail();
}



}
