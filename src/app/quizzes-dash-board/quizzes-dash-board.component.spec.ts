import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesDashBoardComponent } from './quizzes-dash-board.component';

describe('QuizzesDashBoardComponent', () => {
  let component: QuizzesDashBoardComponent;
  let fixture: ComponentFixture<QuizzesDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzesDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzesDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
