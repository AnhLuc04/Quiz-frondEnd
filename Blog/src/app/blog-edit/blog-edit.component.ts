import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../post.service';
import {IPost} from '../post';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {

  post: IPost | undefined;
  postForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      body: ['', [Validators.required, Validators.minLength(10)]]
    });
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(
      (next: any) => {
        this.post = next;
        // @ts-ignore
        this.postForm.patchValue(this.post);
      },
      (error: any) => {
        console.log(error);
        this.post = {
          body: 'string',
          id: 1,
          title: '1',
          userId: 1
        };
      }
    );
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    // @ts-ignore
    if (this.postForm.valid) {
      // @ts-ignore
      const {value} = this.postForm;
      // @ts-ignore
      // @ts-ignore
      const data = {
        ...this.post,
        ...value
      };
      this.postService.updatePost(data).subscribe(
        next => {
          this.router.navigate(['/blog']);
        },
        (error: any) => console.log(error)
      );
    }
  }
}
