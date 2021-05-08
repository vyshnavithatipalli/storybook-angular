import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNestItemComponent } from './table-nest-item.component';

describe('TableNestItemComponent', () => {
  let component: TableNestItemComponent;
  let fixture: ComponentFixture<TableNestItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableNestItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
