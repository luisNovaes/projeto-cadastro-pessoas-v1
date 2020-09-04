import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro';
import { CadastroService } from '../cadastro.service';
import { ListCadastroComponent } from '../list-cadastro/list-cadastro.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-cadastro',
  templateUrl: './details-cadastro.component.html',
  styleUrls: ['./details-cadastro.component.css']
})
export class DetailsCadastroComponent implements OnInit {

  id: string;
  cadastro: Cadastro;

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
  list(){
    this.router.navigate(['cadastros']);
  }

}
