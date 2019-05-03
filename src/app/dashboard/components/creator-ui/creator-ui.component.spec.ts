import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorUiComponent } from './creator-ui.component';

describe('CreatorUiComponent', () => {
  let component: CreatorUiComponent;
  let fixture: ComponentFixture<CreatorUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
