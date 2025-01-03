import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresComponent } from './membres.component';

describe('MembresComponent', () => {
  let component: MembresComponent;
  let fixture: ComponentFixture<MembresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
