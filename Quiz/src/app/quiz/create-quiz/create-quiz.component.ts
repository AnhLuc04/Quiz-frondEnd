import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../model/quiz/quiz.model';
import {Category} from '../../model/category/category.model';
import {Question} from '../../model/question/Question';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {QuizService} from '../../service/quiz/quiz.service';
import {QuestionService} from '../../service/question/QuestionService';
import {CategoryService} from '../../service/category/CategoryService';
import {QuestionSearch} from '../../model/question-search/QuestionSearch';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  // errorMessage = '';

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  quiz: Quiz = {
    quizname: '',
    description: '',
    category: '',
  };
  assignedCategory = {
    id: 1,
    name: ''
  };
  questionSearch: QuestionSearch = {
    code: '',
    type: '',
    level: '',
    categoryID: null
  };
  categories: Category[] = [];
  searchString: any;
  questions: Question[] = [];
  searchPool: Question[] = [];
  questionPool: Question[] = [];

  constructor(private quizService: QuizService,
              private questionService: QuestionService,
              private categoryService: CategoryService,
              private http: HttpClient,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.questionService.getAll().toPromise().then(value => {
      this.questions = value;
      console.log(value);
      console.log(this.questions);
    });
    this.categoryService.getAll().toPromise().then(value => {
      this.categories = value;
      console.log(value);
      console.log(this.categories);
    });
  }

  cutString(): string[] {
    const str = this.searchString.split(',');
    console.log(str);
    return str;
  }

  // tslint:disable-next-line:typedef
  searchQuestion() {
    this.questionService.searchQuestion(this.questionSearch).toPromise().then(value => {
      this.searchPool = value;
      console.log(value);
      console.log(this.searchPool);
    });
  }

  // tslint:disable-next-line:typedef
  addSearchQuestion(code: string) {
    if (this.checkQuestionAlreadyExisted(code) !== true) {
      this.questionPool.push(this.findQuestion(code));
      // @ts-ignore
      this.searchPool.splice(this.findIndexQuestion(code, this.searchPool), 1);
    } else {
      alert('ma cau hoi ' + code + ' da dc them ');
    }
  }

  // tslint:disable-next-line:typedef
  addQuestion() {
    if (this.cutString() !== []) {
      const str = this.cutString();
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < str.length; i++) {
        if (this.findQuestion(str[i]) != null) {
          if (this.checkQuestionAlreadyExisted(str[i]) !== true) {
            this.questionPool.push(this.findQuestion(str[i]));
          } else {
            alert('ma cau hoi ' + str[i] + ' da dc them ');
          }
        } else {
          alert('Không tìm thấy mã câu hỏi ' + str[i]);
        }
      }
    } else {
      alert('Vui lòng nhập văn bản bạn muốn tìm kiếm');
    }
  }

  findQuestion(code: string): Question {
    for (const question of this.questions) {
      if (question.code === code) {
        return question;
      }
    }
    // @ts-ignore
    return ;
  }

  // tslint:disable-next-line:typedef
  findIndexQuestion(code: string, pool: Question[]) {
    for (let i = 0; i < pool.length; i++) {
      if (pool[i].code === code) {
        return i;
      }
    }
    return null;
  }

  checkQuestionAlreadyExisted(code: string): boolean {
    for (const question of this.questionPool) {
      if (question.code === code) {
        return true;
      }
    }
    return false;
  }

  removeQuestion(code: string): void {
    if (this.findIndexQuestion(code, this.questionPool) !== null) {
      // @ts-ignore
      this.questionPool.splice(this.findIndexQuestion(code, this.questionPool), 1);
    } else {
      alert('cant find question');
    }
  }

  // tslint:disable-next-line:typedef
  create() {
    this.quiz.questions = this.questionPool;
    this.quiz.category = this.assignedCategory;
    console.log(this.quiz);
    this.quizService.save(this.quiz).subscribe(() => {
      alert('successfully');
      this.router.navigate(['/admin/quizzes']);
    });
  }
}
