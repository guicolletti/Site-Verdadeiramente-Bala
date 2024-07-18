import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imoveisDB: Imovel[] = []

    constructor(private imovelService: ImovelService) {
    this.imoveisDB = this.imovelService.buscarTodosImoveis()
  }

  removerAcentos(str: String) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  favoritar(imovel: Imovel) {

    const posicaolista = imovel.id - 1

    if (imovel.favorito == false) {
      imovel.favorito = true
      const audio = new Audio('levelup_sVAqjan.mp3')
      audio.play()
    } else {
      imovel.favorito = false
      const audio = new Audio('bad-to-the-bone-meme.mp3')
      audio.play()
    }
  }

  mostrarFavoritos() {

    this.mostrarTodos(true)

    const listaFiltrada: Imovel[] = []
    for (let i = 0; i < this.imoveisDB.length; i++) {
      const imovel = this.imoveisDB[i]

      if (imovel.favorito == true) {

        const audio = new Audio('lego-breaking.mp3')
        audio.play()

        listaFiltrada.push(imovel)

      }
    }
    this.imoveisDB = listaFiltrada
  }

  listarImoveisComFiltro(texto: String) {

    if (texto == "") {

      this.mostrarTodos(true)
      
      const audio = new Audio('among-us-role-reveal-sound.mp3')
      audio.play()
      this.imoveisDB = this.imovelService.buscarTodosImoveis()

    } else {

      this.mostrarTodos(true)
      const imoveisFiltrados: Imovel[] = []

      for (let i = 0; i < this.imoveisDB.length; i++) {
        const imovel = this.imoveisDB[i]

        const textoM = this.removerAcentos(texto.toUpperCase())
        const cidadeImovelM = this.removerAcentos(imovel.cidade.toUpperCase())
        const estadoImovelM = this.removerAcentos(imovel.estado.toUpperCase())

        if (cidadeImovelM.search(textoM) == 0 ||
          estadoImovelM.search(textoM) == 0) {
          
          const audio = new Audio('metal-pipe-clang.mp3')
          audio.play()

          imoveisFiltrados.push(imovel)
        }
      }
      this.imoveisDB = imoveisFiltrados
    }
  }

  mostrarMapa(imovel: Imovel) {
    window.open(`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${imovel.latitude},${imovel.longitude}`);
    const audio = new Audio('zoom.mp3')
    audio.play()
  }

  mostrarportipo(tipo: String) {
    this.mostrarTodos()

    const listaFiltrada: Imovel[] = []

      for (let i = 0; i < this.imoveisDB.length; i++) {
        const imovel = this.imoveisDB[i]

        if (imovel.tipo == tipo) {
          listaFiltrada.push(imovel)
          const audio = new Audio('vine-boom.mp3')
          audio.play()
        }
      }
      this.imoveisDB = listaFiltrada
  }

  mostrarTodos(desmarcarRadio = false) {
    this.imoveisDB = this.imovelService.buscarTodosImoveis()

    if (desmarcarRadio == true) {
      const inputCasa: any = document.getElementById('radioCasa')
      const inputApto: any = document.getElementById('radioApto')

      if (inputCasa || undefined && inputApto || undefined) {
        inputApto.checked = false
        inputCasa.checked = false
      }
    }

    this.audiotome()

    this.imoveisDB = this.imovelService.buscarTodosImoveis()
  }

  audiotome() {
    const audio = new Audio('tome-faro.mp3')
    audio.play()
  }
}