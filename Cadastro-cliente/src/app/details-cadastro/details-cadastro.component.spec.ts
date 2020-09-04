import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCadastroComponent } from './details-cadastro.component';

describe('DetailsCadastroComponent', () => {
  let component: DetailsCadastroComponent;
  let fixture: ComponentFixture<DetailsCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
