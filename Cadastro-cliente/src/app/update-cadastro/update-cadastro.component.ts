import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-update-cadastro',
  templateUrl: './update-cadastro.component.html',
  styleUrls: ['./update-cadastro.component.css']
})
export class UpdateCadastroComponent implements OnInit {

  id: string;
  cadastro: Cadastro;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private route: ActivatedRoute,private router: Router,
    private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.cadastro = new Cadastro();

    this.id = this.route.snapshot.params['id'];
    
    this.cadastroService.getCadastro(this.id)
      .subscribe(data => {
        console.log(data)
        this.cadastro = data;
      }, error => console.log(error));
  }

  updateCadastro() {
    this.cadastroService.updateCadastro(this.id, this.cadastro)
      .subscribe(data => {
        console.log(data);
        this.cadastro = new Cadastro();
        this.gotoList();
        this.isSuccessful = true;
      this.isSignUpFailed = false;
      }, err => {
        this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
  }

  onSubmit() {
    this.updateCadastro();    
  }
  gotoList() {
    this.router.navigate(['/cadastros']);
  }

}
