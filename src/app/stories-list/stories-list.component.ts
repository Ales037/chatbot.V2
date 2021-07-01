import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { StoriesDetailService } from '../shared/stories-detail.service';
import { StoriesDetail } from '../shared/stories-detail.model';


@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styles: [
  ]
})
export class StoriesListComponent implements OnInit {

  constructor(public service: StoriesDetailService,private toastr:ToastrService) { }


  ngOnInit(): void {

    this.service.refreshList();
  }

  onDelete(id:number){

    if (confirm('Are you sure to delete this record ?')){

      this.service.deleteStoriesDetail(id)
      .subscribe(
      res => {
        this.service.refreshList();
        this.toastr.error("Deleted successfully");
      },
      err => {console.log(err);}
      )
    }

  }

  populateForm(selectedRecord:StoriesDetail){

    this.service.formData = Object.assign({},selectedRecord);
  }


}
