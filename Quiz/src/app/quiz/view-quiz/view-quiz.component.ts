import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../service/quiz/Quiz.service';
import {Router} from '@angular/router';
import {Quiz} from '../../model/quiz/quiz.model';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {
  // @ts-ignore
  role: string;
  // @ts-ignore
  quiz: Quiz[];
  p = 1;
  constructor(private quizService: QuizService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.quizService.getAll().subscribe(value => {
      this.quiz = value;
      console.log(this.quiz);
    });
    // @ts-ignore
    this.role = localStorage.getItem('ROLE');
    if (this.role === 'ROLE_USER') {
      alert('Bạn không có quyền!');
      this.router.navigate(['/home']);
    }
  }
  // tslint:disable-next-line:typedef
  remote(id: any) {
    if (confirm('Bạn đã chắc chắn?')) {
      const ID = id;
      this.quizService.deleteById(ID).toPromise();
      location.reload();
    }

  }
}
