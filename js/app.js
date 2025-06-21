function calcularVitorias(vitorias, derrotas){
  let ranking = vitorias - derrotas

  if(ranking < 10){
    console.log(`O Herói tem o saldo de vitórias ${ranking} e está no nível Ferro!`)
  }else if (ranking > 10 && ranking <= 20){
    console.log(`O Herói tem o saldo de vitórias ${ranking} e está no nível Bronze!`)
  }else if(ranking > 20 && ranking <= 50){
    console.log(`O Herói tem o saldo de vitórias ${ranking} e está no nível Prata!`)
  }else if(ranking > 50 && ranking <= 80){
    console.log(`O Herói tem o saldo de vitórias ${ranking} e está no nível Ouro!`)
  }else if(ranking > 80 && ranking <= 90){
    console.log(`O Herói tem o saldo de vitórias ${ranking} e está no nível Diamante!`)
  }else if(ranking > 90 && ranking <= 100){
    console.log(`O Herói tem o saldo de vitórias ${ranking} e está no nível Lendário!`)
  }else {
    console.log(`O Herói tem o saldo de vitórias ${ranking} e está no nível Imortal!`)
  }
}

calcularVitorias(100, 10)