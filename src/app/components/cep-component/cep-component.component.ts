import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/cep.service';
import { Cep } from 'src/app/cep';

@Component({
  selector: 'app-cep-component',
  templateUrl: './cep-component.component.html',
  styleUrls: ['./cep-component.component.css']
})
export class CepComponentComponent implements OnInit {
  
  localidade: Cep | undefined  
  cepLocal: string = ''
  
  constructor(private cepService: CepService) { }
  
  ngOnInit(): void {}

  buscar(cep: any){
    this.cepService.buscar(cep).subscribe((localEncontrado) => {
      this.localidade = localEncontrado
    })
  }
}
