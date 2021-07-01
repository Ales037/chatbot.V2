import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { StoriesDetail } from './stories-detail.model';

@Injectable({
  providedIn: 'root'
})
export class StoriesDetailService {


  constructor(private http: HttpClient) {}


    readonly baseURL ='http://localhost:6292/api/StoriesDetails'
    formData: StoriesDetail = new StoriesDetail();
    list : StoriesDetail[];


    postStoriesDetail(){

     return this.http.post(this.baseURL,this.formData);

    }

    putStoriesDetail(){

      return this.http.put(`${this.baseURL}/${this.formData.stories_Id}`,this.formData);

     }


    deleteStoriesDetail(id: number){
      return this.http.delete(`${this.baseURL}/${id}`)

    }

    refreshList(){
      this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as StoriesDetail[]);
    }

  }
