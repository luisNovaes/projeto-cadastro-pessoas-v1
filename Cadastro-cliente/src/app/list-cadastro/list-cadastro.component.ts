import { DetailsCadastroComponent } from '../details-cadastro/details-cadastro.component';
import { Observable } from "rxjs";
import { CadastroService } from "../cadastro.service";
import { Cadastro } from "../cadastro";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cadastro',
  templateUrl: './list-cadastro.component.html',
  styleUrls: ['./list-cadastro.component.css']
})
export class ListCadastroComponent implements OnInit {
cadastros: Observable<Cadastro[]>;

  constructor(private cadastroService: CadastroService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.cadastros = this.cadastroService.getCadastroList();
  }

  deleteCadastro(id: string) {
    this.cadastroService.deleteCadastro(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  cadastroDetails(id: string){
    this.router.navigate(['details', id]);
  }
  updateCadastro(id: string){
    this.router.navigate(['update', id]);
  }

}
