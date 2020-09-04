import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Cadastro } from '../cadastro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cadastro',
  templateUrl: './create-cadastro.component.html',
  styleUrls: ['./create-cadastro.component.css']
})
export class CreateCadastroComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  cadastro: Cadastro = new Cadastro();
  submitted = false;

  constructor(private cadastroService: CadastroService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newCadastro(): void {
    this.submitted = false;
    this.cadastro = new Cadastro();
  }

  save() {
    this.cadastroService
    .createCadastro(this.cadastro).subscribe(data => {
      console.log(data)
      this.cadastro = new Cadastro();
      this.gotoList();
      this.isSuccessful = true;
      this.isSignUpFailed = false;
    }, 
    err => {
      this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );      
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/cadastros']);
  }


}
