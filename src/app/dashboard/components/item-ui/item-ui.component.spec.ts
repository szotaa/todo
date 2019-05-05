import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemUiComponent} from './item-ui.component';

describe('ItemUiComponent', () => {
  let component: ItemUiComponent;
  let fixture: ComponentFixture<ItemUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
