import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitrosComponent } from './arbitros';

describe('Arbitros', () => {
  let component: ArbitrosComponent;
  let fixture: ComponentFixture<ArbitrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbitrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbitrosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
