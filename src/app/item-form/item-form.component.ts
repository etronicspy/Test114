import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  response?:string;
  constructor(private http:HttpClient){}
  
  onCreatePost(post:{name:string,content:string}){
    this.http
    .post('https://api-project-astrone-default-rtdb.europe-west1.firebasedatabase.app/post.json', post)
    .subscribe(
      postData => {
        this.response=JSON.stringify(postData);
      }
    );
  }

  ngOnInit(): void {
  }

}
