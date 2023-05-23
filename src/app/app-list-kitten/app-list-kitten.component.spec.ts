import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListKittenComponent } from './app-list-kitten.component';

describe('AppListKittenComponent', () => {
  let component: AppListKittenComponent;
  let fixture: ComponentFixture<AppListKittenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppListKittenComponent],
    });
    fixture = TestBed.createComponent(AppListKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
