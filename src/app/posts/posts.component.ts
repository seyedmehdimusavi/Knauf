import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private backend: BackendService,
    //private modalService: NgbModal
    //private modalService: NgbModal
  ) { }
  loading = false;
  allposts;
  userId;
  users: any[];
  userComments;


  ngOnInit(): void {
    this.loading = true;
    this.backend.get("users").subscribe((users: any[]) => {
      this.users = users;
      this.backend.get("posts").subscribe((result: any[]) => {
        result.map((post: any) => {
          post.show=false;
          post.user = this.users.find((user: any) => {
            if (user.id == post.userId) return user;
          })
        });
        this.allposts = result;
        this.loading = false;
      })
    })

  }


  showcomments(event){
    this.userComments=event;
    //console.log("event");
    //console.log(event);
  }


  modal = false;
  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any, userId) {
    this.modal = true;
    this.userId = userId;

  }



}
