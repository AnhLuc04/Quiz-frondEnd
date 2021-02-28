import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {Category} from '../../model/category/category.model';
import {Question} from '../../model/question/Question';
import {QuestionAnswer} from '../../model/question-answer/QuestionAnswer';
import {QuestionService} from '../../service/question/QuestionService';
import {CategoryService} from '../../service/category/CategoryService';


@Component({
  selector: 'app-questions-create',
  templateUrl: './questions-create.component.html',
  styleUrls: ['./questions-create.component.css']
})
export class QuestionsCreateComponent implements OnInit {

  constructor(private http: HttpClient,
              private fb: FormBuilder,
              private productService: QuestionService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  assignedSingleChoiceCategory = {
    id: 1,
    name: ''
  };
  categories: Category[] = [];
  questionAnswerS: any[] = [];
  // @ts-ignore
  questionSingleChoice: Question = {
    // code: Math.floor((Math.random() * 100000) + 1),
    // code: Math.random().toString(36).substring(2, 3) + Math.random().toString(36).substring(2, 3),
    code: '',
    type: 'single-choice',
    level: 'medium',
    content: '',
    explanation: '',
    category: null
  };
  questionAnswer: QuestionAnswer = {
    code: '',
    content: '',
    isCorrect: false,
  };
  // @ts-ignore
  questionSingleChoice: Question = {
    // code: Math.floor((Math.random() * 100000) + 1),
    // code: Math.random().toString(36).substring(2, 3) + Math.random().toString(36).substring(2, 3),
    code: '',
    type: 'single-choice',
    level: 'medium',
    content: '',
    explanation: '',
    category: null
  };
  ngOnInit(): void {
    this.categoryService.getAll().toPromise().then(value => {
      this.categories = value;
      console.log(value);
      console.log(this.categories);
    });
  }

  validateAnswers(answers: QuestionAnswer[]): boolean {
    let count = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].isCorrect === false) {
        console.log('answer i = ' + answers[i].isCorrect);
        count += 1;
      }
    }
    console.log('count value = ' + count);
    return count !== answers.length;
  }
  // tslint:disable-next-line:typedef adjacent-overload-signatures
  createQuestionAnswer() {
    this.questionAnswerS.push(this.questionAnswer);
    console.log(this.questionAnswerS);
  }

  // tslint:disable-next-line:typedef
  createSingleChoice() {
    if (this.validateAnswers(this.questionAnswerS)) {
      this.questionSingleChoice.questionAnswers = this.questionAnswerS;
      this.questionSingleChoice.category = this.assignedSingleChoiceCategory;
      console.log(this.questionSingleChoice);
      this.productService.save(this.questionSingleChoice).subscribe(() => {
        for (let i = 1; this.questionAnswerS.length >= i; i++) {
          this.questionAnswerS.splice(i);
        }
        alert('Thành công');
        this.router.navigate(['/admin/questions']);
      });
    } else {
      alert('Vui lòng nhập ít nhất một câu trả lời đúng');
    }
  }
}
