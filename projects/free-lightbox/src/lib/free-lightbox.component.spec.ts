import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeLightboxComponent } from './free-lightbox.component';

describe('FreeLightboxComponent', () => {
  let component: FreeLightboxComponent;
  let fixture: ComponentFixture<FreeLightboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeLightboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
