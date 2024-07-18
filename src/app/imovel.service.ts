import { Injectable } from '@angular/core';
import { Imovel } from './imovel';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  private imoveisDB: Imovel[] = [
    {
      "id": 1,
      "url_foto": " imagem01.jpg",
      "nome": "Casa de Pobre",
      "cidade": "Casa do Luís (Bueiro)",
      "estado": "Pau Queimado",
      "latitude": "17.3759048",
      "longitude": "78.4439632",
      "favorito": false,
      "tipo": "true",
      "valor": 0,
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Não, negativo"
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "-2"
        },
        {
          "chave": "Banheiros",
          "valor": "É um bueiro então..."
        },
        {
          "chave": "Garagem",
          "valor": "Sim, caso você dirija um rato."
        },
        {
          "chave": "Área",
          "valor": "Todo o planeta Terra"
        },
        {
          "chave": "Valor",
          "valor": "Geralmente é de graça; Usada de brinde para recém-desempregados"
        },
        {
          "chave": "Descrição",
          "valor": "É um bueiro...tem um cheiro horrível, uma aparência horrível, tudo horrível...e tem o Luís"
        }
      ],
      "aluguel": [
        {
          "chave": "Aluguel mensal",
          "valor": "R$00,00"
        },
        {
          "chave": "Aluguel anual",
          "valor": "R$00,00"
        },
        {
          "chave": "Alguel semestral",
          "valor": "R$00,00"
        }
      ],
      "financiamento": []
    },
    {
      "id": 2,
      "url_foto": " aiai.jpg",
      "nome": "Casa de Rico",
      "cidade": "Casa do Thomas (Mansão)",
      "estado": "Pau Grande",
      "latitude": "49.566706913484744",
      "longitude": "5.522414406325261",
      "favorito": false,
      "tipo": "true",
      "valor": 2000000000,
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim. 900TB imbutido em cada quarto."
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "Há 25 quartos."
        },
        {
          "chave": "Banheiros",
          "valor": "Contém 30 banheiros."
        },
        {
          "chave": "Garagem",
          "valor": "Contém 5 garagens."
        },
        {
          "chave": "Área",
          "valor": "1.000m³"
        },
        {
          "chave": "Valor",
          "valor": "R$60.000.000,00 no pix"
        },
        {
          "chave": "Descrição",
          "valor": "Uma casa aconchegante e humilde para deixar seu cachorrinho morar."
        }
      ],
      "aluguel": [],
      "financiamento": []
    },
    {
      "id": 3,
      "url_foto": " 1.jpg",
      "nome": "Sobrado Pequeno",
      "cidade": "Saltinho",
      "estado": "Piracanjuba",
      "latitude": "-27.834473903019052",
      "longitude": " -70.10375314139836",
      "favorito": false,
      "tipo": "true",
      "valor": 150000,
      "adicionais": [
        {
          "chave": '!',
          "valor": "O proprietário ainda não adicionou informações adicionais."
        }
      ],
      "aluguel": [
        {
          "chave": "Aluguel mensal",
          "valor": "R$00,00"
        },
        {
          "chave": "Aluguel anual",
          "valor": "R$00,00"
        },
        {
          "chave": "Alguel semestral",
          "valor": "R$00,00"
        }
      ],
      "financiamento": []
    },
    {
      "id": 4,
      "url_foto": " 2.jpg",
      "nome": "Apartamento Pequeno",
      "cidade": "Piracicaba",
      "estado": "Canadá",
      "latitude": "51.02673225345452",
      "longitude": "10.33710119501935",
      "favorito": false,
      "tipo": "false",
      "valor": 15000,
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim"
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "1"
        },
        {
          "chave": "Banheiros",
          "valor": "1"
        },
        {
          "chave": "Garagem",
          "valor": "1"
        },
        {
          "chave": "Área",
          "valor": "20²"
        },
        {
          "chave": "Valor",
          "valor": "R$75.000,00"
        },
        {
          "chave": "Descrição",
          "valor": "Uma casa pequena, de recomendação, 1 pessoa. Simples, porém aconchegante."
        }
      ],
      "aluguel": [
        {
          "chave": "Aluguel mensal",
          "valor": "R$00,00"
        },
        {
          "chave": "Aluguel anual",
          "valor": "R$00,00"
        },
        {
          "chave": "Alguel semestral",
          "valor": "R$00,00"
        }
      ],
      "financiamento": []
    },
    {
      "id": 5,
      "url_foto": " 3.jpg",
      "nome": "Casarão Florestal",
      "cidade": "Centro",
      "estado": "Suécia",
      "latitude": "65.03503189590633",
      "longitude": "15.901382735813884",
      "favorito": false,
      "tipo": "true",
      "valor": 50000,
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim. 2 roteadores imbutidos em cada andar"
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "6"
        },
        {
          "chave": "Banheiros",
          "valor": "4"
        },
        {
          "chave": "Garagem",
          "valor": "2"
        },
        {
          "chave": "Área",
          "valor": "650m²"
        },
        {
          "chave": "Valor",
          "valor": "R$850.000,00"
        },
        {
          "chave": "Descrição",
          "valor": "Uma casa na floresta muito bonito e aconchegante, boa para agregar muitas pessoas."
        }
      ],
      "aluguel": [
        {
          "chave": "Aluguel mensal",
          "valor": "R$00,00"
        },
        {
          "chave": "Aluguel anual",
          "valor": "R$00,00"
        },
        {
          "chave": "Alguel semestral",
          "valor": "R$00,00"
        }
      ],
      "financiamento": []
    },
    {
      "id": 6,
      "url_foto": " 4.jpg",
      "nome": "Sobrado Pequeno",
      "cidade": "Curitiba",
      "estado": "Nova Guiné",
      "latitude": "-6.022687",
      "longitude": "143.6954346",
      "favorito": false,
      "tipo": "true",
      "valor": 250000,
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim, 1 roteador em cada andar."
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "4"
        },
        {
          "chave": "Banheiros",
          "valor": "2"
        },
        {
          "chave": "Garagem",
          "valor": "1"
        },
        {
          "chave": "Área",
          "valor": "200m²"
        },
        {
          "chave": "Valor",
          "valor": "R$450.000,00"
        },
        {
          "chave": "Descrição",
          "valor": "Um sobrado na vizinhança de JoinVille; Simples, bonita e Acolhedora. (Contém uma pequena casinha de ferramentas)"
        }
      ],
      "aluguel": [
        {
          "chave": "Aluguel mensal",
          "valor": "R$00,00"
        },
        {
          "chave": "Aluguel anual",
          "valor": "R$00,00"
        },
        {
          "chave": "Alguel semestral",
          "valor": "R$00,00"
        }
      ],
      "financiamento": []
    },
    {
      "id": 7,
      "url_foto": " 5.jpg",
      "nome": "Condomínio",
      "cidade": "Pau Queimado",
      "estado": "Patagônia",
      "latitude": "-46.9057239",
      "longitude": "-72.7879271",
      "favorito": false,
      "tipo": "true",
      "valor": 44000,
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim"
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "2"
        },
        {
          "chave": "Banheiros",
          "valor": "1"
        },
        {
          "chave": "Garagem",
          "valor": "Sim"
        },
        {
          "chave": "Área",
          "valor": "50m²"
        },
        {
          "chave": "Valor",
          "valor": "R$35.000,00"
        },
        {
          "chave": "Descrição",
          "valor": "Uma pequena casa em um condomínio de qualidade, o qual têm parquinhos, pequenas praças e uma piscina pública para os *moradores*"
        }
      ],
      "aluguel": [
        {
          "chave": "Aluguel mensal",
          "valor": "R$00,00"
        },
        {
          "chave": "Aluguel anual",
          "valor": "R$00,00"
        },
        {
          "chave": "Alguel semestral",
          "valor": "R$00,00"
        }
      ],
      "financiamento": []
    },
    {
      "id": 8,
      "url_foto": " 6.jpg",
      "nome": "Modern Wouse",
      "cidade": "Rio de Janeiro",
      "estado": "Brasil",
      "latitude": "-22.9249134",
      "longitude": "-43.2107792",
      "favorito": false,
      "tipo": "true",
      "valor": 450000,
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim. Um roteador imbutido na cozinha e em cada quarto."
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "4"
        },
        {
          "chave": "Banheiros",
          "valor": "3"
        },
        {
          "chave": "Garagem",
          "valor": "2"
        },
        {
          "chave": "Área",
          "valor": "210m²"
        },
        {
          "chave": "Valor",
          "valor": "R$550.000,00"
        },
        {
          "chave": "Descrição",
          "valor": "Uma casa com design moderno e muito linda. Ótima para festas e famílias grandes."
        }
      ],
      "aluguel": [
        {
          "chave": "Aluguel mensal",
          "valor": "R$00,00"
        },
        {
          "chave": "Aluguel anual",
          "valor": "R$00,00"
        },
        {
          "chave": "Alguel semestral",
          "valor": "R$00,00"
        }
      ],
      "financiamento": []
    },
    {
      "id": 9,
      "url_foto": " 7.jpg",
      "nome": "Simples Sobrado",
      "cidade": "Cabo Grande",
      "estado": "Rússia",
      "latitude": "45.6034076",
      "longitude": "63.9345101",
      "favorito": false,
      "tipo": "true",
      "valor": 150000,
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim. (Oscila no inverno)"
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "2"
        },
        {
          "chave": "Banheiros",
          "valor": "2"
        },
        {
          "chave": "Garagem",
          "valor": "Não"
        },
        {
          "chave": "Área",
          "valor": "45m²"
        },
        {
          "chave": "Valor",
          "valor": "R$350.000,00"
        },
        {
          "chave": "Descrição",
          "valor": "Um pequeno sobrado acolhedor com design retrô. Uma ótima casa para casais!"
        }
      ],
      "aluguel": [
        {
          "chave": "Aluguel mensal",
          "valor": "R$00,00"
        },
        {
          "chave": "Aluguel anual",
          "valor": "R$00,00"
        },
        {
          "chave": "Alguel semestral",
          "valor": "R$00,00"
        }
      ],
      "financiamento": []
    },
    {
      "id": 10,
      "url_foto": " 8.jpg",
      "nome": "Modern Design...?",
      "cidade": "Americana",
      "estado": "São Paulo",
      "latitude": "-23.473620037924697",
      "longitude": "-46.86232292728119",
      "favorito": false,
      "tipo": "true",
      "valor": 200000,
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim. Um roteador imbutido na cozinha e em cada quarto."
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "4"
        },
        {
          "chave": "Banheiros",
          "valor": "3"
        },
        {
          "chave": "Garagem",
          "valor": "2"
        },
        {
          "chave": "Área",
          "valor": "210m²"
        },
        {
          "chave": "Valor",
          "valor": "R$550.000,00"
        },
        {
          "chave": "Descrição",
          "valor": "Uma casa com design moderno e muito linda. Ótima para festas e famílias bem grandonas."
        }
      ],
      "aluguel": [
        {
          "chave": "Aluguel mensal",
          "valor": "R$00,00"
        },
        {
          "chave": "Aluguel anual",
          "valor": "R$00,00"
        },
        {
          "chave": "Alguel semestral",
          "valor": "R$00,00"
        }
      ],
      "financiamento": []
    },
    {
      "id": 11,
      "url_foto": " 9.jpg",
      "nome": "Grande Apartamento",
      "cidade": "Cabreúva",
      "estado": "São Paulo",
      "latitude": "-23.306521248372732",
      "longitude": "-47.133192377621064",
      "favorito": false,
      "tipo": "false",
      "valor": 35000,
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Sim"
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "3"
        },
        {
          "chave": "Banheiros",
          "valor": "2"
        },
        {
          "chave": "Garagem",
          "valor": "Sim (Do apartamento)"
        },
        {
          "chave": "Área",
          "valor": "25m²"
        },
        {
          "chave": "Valor",
          "valor": "R$25.000,00"
        },
        {
          "chave": "Descrição",
          "valor": "É um bueiro...tem um cheiro horrível, uma aparência horrível, tudo horrível...e tem o Luís"
        }
      ],
      "aluguel": [
        {
          "chave": "Aluguel mensal",
          "valor": "R$00,00"
        },
        {
          "chave": "Aluguel anual",
          "valor": "R$00,00"
        },
        {
          "chave": "Alguel semestral",
          "valor": "R$00,00"
        }
      ],
      "financiamento": []
    },
    {
      "id": 12,
      "url_foto": " casasasa.jpg",
      "nome": "Mansão Elegante",
      "cidade": "Cabo Frio",
      "estado": "São Paulo",
      "latitude": "-68.1303839",
      "longitude": "-67.105728",
      "favorito": false,
      "tipo": "true",
      "valor": 325000,
      "adicionais": [
        {
          "chave": "Wi-Fi",
          "valor": "Não, negativo"
        },
        {
          "chave": "Quartos Disponíveis",
          "valor": "-2"
        },
        {
          "chave": "Banheiros",
          "valor": "É um bueiro então..."
        },
        {
          "chave": "Garagem",
          "valor": "Sim, caso você dirija um rato."
        },
        {
          "chave": "Área",
          "valor": "Todo o planeta Terra"
        },
        {
          "chave": "Valor",
          "valor": "Geralmente é de graça; Usada de brinde para recém-desempregados"
        },
        {
          "chave": "Descrição",
          "valor": "É um bueiro...tem um cheiro horrível, uma aparência horrível, tudo horrível...e tem o Luís"
        }
      ],
      "aluguel": [
        {
          "chave": "Aluguel mensal",
          "valor": "R$00,00"
        },
        {
          "chave": "Aluguel anual",
          "valor": "R$00,00"
        },
        {
          "chave": "Alguel semestral",
          "valor": "R$00,00"
        }
      ],
      "financiamento": []
    }
  ]

  buscarTodosImoveis(): Imovel[] {
    return this.imoveisDB
  }

  buscarImovelPorId(id: number): Imovel | undefined {

    let imovel;

    for (let i = 0; i < this.imoveisDB.length; i++) {
      imovel = this.imoveisDB[i];

      if (imovel.id == id) {
        break
      }
    }
    return imovel;
  }

}