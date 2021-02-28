import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Attempt} from '../model/attempt/attempt.model';
import {AttemptService} from '../service/attempte/AttemptService';
import {Study} from '../model/study/Study';
import {StudyService} from '../service/study/study.service';
import {User} from '../model/user/User';
import {UserService} from '../service/user/user.service';

@Component({
  selector: 'app-reply-question',
  templateUrl: './reply-question.component.html',
  styleUrls: ['./reply-question.component.css']
})
export class ReplyQuestionComponent implements OnInit {
  // @ts-ignore
  attempts: Attempt[];
  // @ts-ignore
  role: string;
  // @ts-ignore
  users: User[];
  // @ts-ignore
  currentUsername: string;
  p = 1;

  constructor(private attemptService: AttemptService,
              private userService: UserService,
              private router: Router) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.attemptService.getAll().subscribe(data => {
      this.attempts = data;
      console.log(data);
    });
    // @ts-ignore
    this.role = localStorage.getItem('ROLE');
    if (this.role === 'ROLE_USER') {
      alert('Bạn không có quyền!');
      this.router.navigate(['/home']);
    }
    // @ts-ignore
    this.currentUsername = localStorage.getItem('USERNAME');
  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  remote(id: any) {
    if (confirm('Bạn đã chắc chắn?')) {
      const ID = id;
      this.attemptService.deleteById(ID).toPromise();
      location.reload();
    }
  }
}
