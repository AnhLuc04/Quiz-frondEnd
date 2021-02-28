import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelyAnswerQuestionComponent } from './rely-answer-question.component';

describe('RelyAnswerQuestionComponent', () => {
  let component: RelyAnswerQuestionComponent;
  let fixture: ComponentFixture<RelyAnswerQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelyAnswerQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelyAnswerQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
