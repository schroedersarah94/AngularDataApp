import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsDataComponent } from './star-wars-data.component';

describe('StarWarsDataComponent', () => {
  let component: StarWarsDataComponent;
  let fixture: ComponentFixture<StarWarsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarWarsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
