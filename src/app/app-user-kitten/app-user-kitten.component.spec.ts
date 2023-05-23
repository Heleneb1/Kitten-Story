import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserKittenComponent } from './app-user-kitten.component';

describe('AppUserKittenComponent', () => {
  let component: AppUserKittenComponent;
  let fixture: ComponentFixture<AppUserKittenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppUserKittenComponent]
    });
    fixture = TestBed.createComponent(AppUserKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
