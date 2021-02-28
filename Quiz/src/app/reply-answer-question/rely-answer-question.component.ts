import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AttemptService } from '../service/attempte/AttemptService';
import {Attempt} from '../model/attempt/attempt.model';

@Component({
  selector: 'app-rely-answer-question',
  templateUrl: './rely-answer-question.component.html',
  styleUrls: ['./rely-answer-question.component.css']
})
export class RelyAnswerQuestionComponent implements OnInit {
  // @ts-ignore
  idAttempt: number;
  // @ts-ignore
  idStudy: number;
  attempt: Attempt = {
    name: '',
    status: '',
    averageScore: 0,
    assumptions: []
  };

  constructor(
    private attemptService: AttemptService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe(params => {
      this.idAttempt = params.idAttempt;
      this.idStudy = params.idStudy;
    });
    this.attempt =  await this.attemptService.findById(this.idAttempt).toPromise();
    console.log(this.attempt);
  }

  // tslint:disable-next-line:typedef
  onUpdate() {
    // @ts-ignore
    for (const assumption of this.attempt.assumptions) {
      if (assumption.question.type === 'single-choice' || assumption.question.type === 'true-false') {
        if (assumption.guessNumber != null) {
          // @ts-ignore
          assumption.userAnswers[assumption.guessNumber].correctAnswer = true;
        }
      }
      if (assumption.question.type === 'input') {
        // @ts-ignore
        if (assumption.userAnswers[0].content === assumption.question.questionAnswers[0].content) {
          // @ts-ignore
          assumption.userAnswers[0].correctAnswer = true;
        }
      }
    }
    this.attemptService.update(this.attempt, this.idAttempt).toPromise().then(value => {
      console.log('Update', value);
      alert('Chuc mung ban da hoan thanh bai thi');
      this.router.navigate(['/home/quizzes/' + this.idStudy + '/attempts']);
    });

  }
}
