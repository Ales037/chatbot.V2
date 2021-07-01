import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NluDataComponent } from './nlu-data.component';

describe('NluDataComponent', () => {
  let component: NluDataComponent;
  let fixture: ComponentFixture<NluDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NluDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NluDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
