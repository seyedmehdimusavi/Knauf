import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: 'comments', pathMatch: 'full' },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
