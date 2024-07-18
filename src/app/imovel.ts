interface propriedades {
    chave: String;
    valor: number|String;
}

interface DetalhesAluguel {
    chave: String;
    valor: String;
}

interface Financiamento {
    chave: String;
    valor: String;
}

export interface Imovel {
    id: number;
    url_foto: string;
    nome: string;
    cidade: string;
    estado: string;
    favorito: boolean;
    tipo: string;
    valor: number;
    adicionais: propriedades[];
    latitude: string ;
    longitude: string;
    aluguel: DetalhesAluguel[];
    financiamento: Financiamento[];

}