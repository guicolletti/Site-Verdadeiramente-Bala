import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imovel-aluguel',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './imovel-financiamento.component.html',
  styleUrl: './imovel-financiamento.component.css'
})

  export class ImovelFinanciamentoComponent {

  imovel: Imovel | undefined
  valorEntrada = 0
  prazoMeses = 0
  valorParcela = 0

  constructor(
    private imvService: ImovelService,
    private route: ActivatedRoute,
    private rt: Router
  ) {
    const id = this.route.snapshot.params['id']
    this.imovel = this.imvService.buscarImovelPorId(id)
  }

  voltar() {
    const url = `detalhes/${this.imovel?.id}`
    this.rt.navigate([url])
  }

  Calcular() {
    if (this.imovel){
      
      const precoImovel = this.imovel?.valor - this.valorEntrada
      this.valorParcela = precoImovel / this.prazoMeses

    }
  }
}
