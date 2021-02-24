import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {IPost} from '../post';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../post.service';

// @ts-ignore
@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {
  post: IPost = [];
  postForm: FormGroup | undefined;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      body: ['', [Validators.required, Validators.minLength(10)]]
    });
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.postService.getPostById(id).subscribe(
      next => {
        this.post = next;
        // @ts-ignore
        this.postForm.patchValue(this.post);
      },
      error => {
        console.log(error);
        this.post = IPost[] = [];
      }
    );
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    // @ts-ignore
    if (this.postForm.valid) {
      const {value: value} = this.postForm;
      // @ts-ignore
      // @ts-ignore
      const data = {
        ...this.post,
        ...value
      };
      // @ts-ignore
      this.postService.updatePost(data).subscribe(
        next => {
          this.router.navigate(['/blog']);
        },
        error => console.log(error)
      );
    }
  }
}
