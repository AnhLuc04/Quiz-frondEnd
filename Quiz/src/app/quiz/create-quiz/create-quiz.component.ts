import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../model/quiz/quiz.model';
import {Category} from '../../model/category/category.model';
import {Question} from '../../model/question/Question';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {QuizService} from '../../service/quiz/Quiz.service';
import {QuestionService} from '../../service/question/QuestionService';
import {CategoryService} from '../../service/category/CategoryService';
import {QuestionSearch} from '../../model/question-search/QuestionSearch';


@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  constructor(private quizService: QuizService,
              private questionService: QuestionService,
              private categoryService: CategoryService,
              private http: HttpClient,
              private fb: FormBuilder,
              private router: Router) {
  }

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
  info: any;
  categories: Category[] = [];
  searchPool: Question[] = [];
  questionPool: Question[] = [];
  questions: Question[] = [];
  ngOnInit(): void {
    this.categoryService.getAll().toPromise().then(value => {
      this.categories = value;
      console.log(value);
      console.log(this.categories);
    });
  }
  // tslint:disable-next-line:typedef
  searchQuestion(){
    this.questionService.searchQuestion(this.questionSearch).toPromise().then(value => {
      this.searchPool = value;
      console.log(value);
      console.log(this.searchPool);
    });
  }
  checkQuestionAlreadyExisted(code: string): boolean {
    for (const question of this.questionPool) {
      if (question.code === code){
        return true;
      }
    }
    return false;
  }
  // tslint:disable-next-line:typedef
  findIndexQuestion(code: string, pool: Question[]){
    for (let i = 0; i < pool.length; i++) {
      if ( pool[i].code === code){
        return i;
      }
    }
    return  null;
  }
  findQuestion(code: string): Question{
    for (const question of this.questions) {
      if (question.code === code){
        return question;
      }
    }
    // @ts-ignore
    return null;
  }
  // tslint:disable-next-line:typedef
  addSearchQuestion(code: string) {
    if (this.checkQuestionAlreadyExisted(code) !== true ){
      this.questionPool.push(this.findQuestion(code));
      // @ts-ignore
      this.searchPool.splice(this.findIndexQuestion(code, this.searchPool), 1);
    }
    else {
      alert('ma cau hoi ' + code + ' da dc them ');
    }
  }
  // tslint:disable-next-line:typedef
  create() {
    this.quiz.questions = this.questionPool;
    this.quiz.category = this.assignedCategory;
    this.quizService.save(this.quiz).toPromise();
    this.router.navigate(['/']);
  }
}
