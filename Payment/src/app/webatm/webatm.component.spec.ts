import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebatmComponent } from './webatm.component';

describe('WebatmComponent', () => {
  let component: WebatmComponent;
  let fixture: ComponentFixture<WebatmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebatmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebatmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
