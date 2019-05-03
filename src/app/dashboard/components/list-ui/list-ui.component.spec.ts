import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUiComponent } from './list-ui.component';

describe('ListUiComponent', () => {
  let component: ListUiComponent;
  let fixture: ComponentFixture<ListUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
