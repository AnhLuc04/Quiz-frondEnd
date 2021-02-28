import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyAnswerQuestionComponent } from './reply-answer-question.component';

describe('ReplyAnswerQuestionComponent', () => {
  let component: ReplyAnswerQuestionComponent;
  let fixture: ComponentFixture<ReplyAnswerQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplyAnswerQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyAnswerQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
