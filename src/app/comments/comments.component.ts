import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private backend: BackendService) { }
  allComments;
  ngOnInit(): void {
    this.backend.get("comments").subscribe((result: any[]) => {
      this.allComments = result;
    })
  }

}
