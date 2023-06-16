import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  @Input() postId;
  @Output() userComments = new EventEmitter<any[]>();
  constructor(private backend: BackendService) { }
  comments: any[];
  ngOnInit(): void {
    console.log(this.postId);
    this.backend.get("comments").subscribe((comments: any[]) => {
      this.comments = comments.filter((comment: any) => {
        if (comment.postId == this.postId) return comment;
      });
      this.userComments.emit(this.comments);
    });
  }
}
