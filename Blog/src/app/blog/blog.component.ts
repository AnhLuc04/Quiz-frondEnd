import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../post.service';

class IPost {
  id: any;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  postList: IPost[] = [];
  postForm: FormGroup;

  // @ts-ignore
  constructor(
    private postService: PostService,
    private fb: FormBuilder
  ) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      body: ['', [Validators.required, Validators.minLength(10)]],
    });
    this.postService
      .getPosts()
      .subscribe(next => (this.postList = next), error => (this.postList = []));
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    // @ts-ignore
    if (this.postForm.valid) {
      // @ts-ignore
      const {value} = this.postForm;
      this.postService.createPost(value)
        .subscribe(next => {
          this.postList.unshift(next);
          // @ts-ignore
          this.postForm.reset({
            title: '',
            body: ''
          });
        }, (error: any) => console.log(error));
    }
  }

  // tslint:disable-next-line:typedef
  deletePost(i: string | number) {
    // @ts-ignore
    const post = this.postList[i];
    this.postService.deletePost(post.id).subscribe(() => {
      this.postList = this.postList.filter(t => t.id !== post.id);
    });
  }

}
