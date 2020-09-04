import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCadastroComponent } from './create-cadastro.component';

describe('CreateCadastroComponent', () => {
  let component: CreateCadastroComponent;
  let fixture: ComponentFixture<CreateCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
