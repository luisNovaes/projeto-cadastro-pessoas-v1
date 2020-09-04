import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCadastroComponent } from './list-cadastro.component';

describe('ListCadastroComponent', () => {
  let component: ListCadastroComponent;
  let fixture: ComponentFixture<ListCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
