import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdreInterieurComponent } from './ordre-interieur.component';

describe('OrdreInterieurComponent', () => {
  let component: OrdreInterieurComponent;
  let fixture: ComponentFixture<OrdreInterieurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdreInterieurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdreInterieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
