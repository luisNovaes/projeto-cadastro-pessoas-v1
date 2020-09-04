import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private baseUrl = 'http://localhost:8080/api/cadastro/';

  constructor(private http: HttpClient) { }

  getCadastro(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}`);
  }

  createCadastro(cadastro: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl + "cadastrar"}`, cadastro);
  }

  updateCadastro(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}${id}`, value);
  }

  deleteCadastro(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}`, { responseType: 'text' });
  }

  getCadastroList(): Observable<any> {
    return this.http.get(`${this.baseUrl + "contatos"}`);
  }


  
}
