import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNavigationComponent } from './angular-navigation.component';

describe('AngularNavigationComponent', () => {
  let component: AngularNavigationComponent;
  let fixture: ComponentFixture<AngularNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
