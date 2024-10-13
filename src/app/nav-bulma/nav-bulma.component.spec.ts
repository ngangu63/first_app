import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBulmaComponent } from './nav-bulma.component';

describe('NavBulmaComponent', () => {
  let component: NavBulmaComponent;
  let fixture: ComponentFixture<NavBulmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBulmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBulmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
