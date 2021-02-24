import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../post.service';
import {IPost} from '../post';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  post: null;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(
      (next: any) => (this.post = next),
      (error: any) => {
        console.log(error);
        this.post = null;
      }
    );
  }

}
