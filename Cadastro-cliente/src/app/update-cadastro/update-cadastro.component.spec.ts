import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCadastroComponent } from './update-cadastro.component';

describe('UpdateCadastroComponent', () => {
  let component: UpdateCadastroComponent;
  let fixture: ComponentFixture<UpdateCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
