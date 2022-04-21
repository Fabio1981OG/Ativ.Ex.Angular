import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Cep } from './cep';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class CepService {
  baseUrl: string="http://viacep.com.br/ws"
  constructor(private http: HttpClient) { }


  buscar(cep: string): Observable<Cep>{
    return this.http.get<Cep>(`${this.baseUrl}/${cep}/json/`)
  }
}