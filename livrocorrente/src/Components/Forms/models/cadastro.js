function validarCpf(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve ter 11 dígitos."}
    } else {
      return {valido:true, texto:""}
    }
  }

function validarSenha(senha){
    if(senha.length <5 || senha.length > 15){
      return {valido:false, texto:"Senha deve conter de 5 a 15 dígitos"}
    } else {
      return {valido:true, texto:""}
    }
  }

  function validarNome(nome){
    if(nome.length < 10){
      return {valido:false, texto:"Digite seu nome completo"}
    } else {
      return {valido:true, texto:""}
    }
  }

  export {validarCpf, validarSenha, validarNome};