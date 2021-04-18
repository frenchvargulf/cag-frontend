import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsPanelItemWrapperComponent } from './controls-panel-item-wrapper.component';

describe('ControlsPanelItemWrapperComponent', () => {
  let component: ControlsPanelItemWrapperComponent;
  let fixture: ComponentFixture<ControlsPanelItemWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlsPanelItemWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsPanelItemWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
