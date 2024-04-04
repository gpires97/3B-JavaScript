function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
  }
  nomeIdade("jose",18);
  
  console.log(nomeIdade(40, "Gabriel"))
  console.log(nomeIdade("Gabriel",40))

  
  function soma(numero1, numero2) {
    return numero1 + numero2;
  }
                        //Colocando um valor definido não gera o erro dos parametros.
  function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
  }
  console.log(soma(2)) //Se não colocar os dois parametros não realiza o calculo
  console.log(multiplica(7,2))   
  console.log(multiplica())                         
                              //9
  console.log(multiplica(soma(4, 5)))

  