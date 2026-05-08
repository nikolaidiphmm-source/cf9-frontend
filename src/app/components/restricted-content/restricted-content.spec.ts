import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestictedContent } from './restricted-content';

describe('RestictedContent', () => {
  let component: RestictedContent;
  let fixture: ComponentFixture<RestictedContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestictedContent],
    }).compileComponents();

    fixture = TestBed.createComponent(RestictedContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
