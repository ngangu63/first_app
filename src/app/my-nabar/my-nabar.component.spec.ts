import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNabarComponent } from './my-nabar.component';

describe('MyNabarComponent', () => {
  let component: MyNabarComponent;
  let fixture: ComponentFixture<MyNabarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNabarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
