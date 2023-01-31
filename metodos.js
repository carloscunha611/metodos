let carro = {
  marca: 'Bugatti',
  nome: 'Veyron',
  cilindradas: '7993 cm³',
  potencia: '1001 CV',
  zeroCemKmH: '2.5s',
  velMaxima: '407 km/h',
  mostrarCarro() {
    console.log(`
    O carro ${this.nome} da ${this.marca} possuí as seguintes especificações:
    Cilindrada: ${this.cilindradas};
    Potência: ${this.potencia};
    0 - 100 Km/h: ${this.zeroCemKmH};
    Velocidade Máxima: ${this.velMaxima}
    `)
  }
}

carro.mostrarCarro()
