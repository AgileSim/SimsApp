/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BktxAccountStatementComponent } from './bktx-account-statement.component';

describe('BktxAccountStatementComponent', () => {
  let component: BktxAccountStatementComponent;
  let fixture: ComponentFixture<BktxAccountStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BktxAccountStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BktxAccountStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
