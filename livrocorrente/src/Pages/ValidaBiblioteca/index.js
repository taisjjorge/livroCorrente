import { Container, Typography } from '@material-ui/core';
import FormularioCadastro  from '../../Components/Forms/CadastroBiblioteca/FormularioCadastro'
import  Login  from '../../Components/Forms/Login'

import {validarCpf, validarNome, validarSenha} from '../../Components/Forms/models/cadastro'

export default function ValidaBiblioteca() {
  
    return(
        <Container 
            component="aticle"
            maxWidth="sm" >
           
            <Typography  variant="h5" component="h1" align="center">Cadastre-se</Typography>
            <FormularioCadastro 
                aoEnviar={aoEnviarForm} 
                validacoes={{cpf:validarCpf, senha:validarSenha, nome:validarNome}}
            />
            <Login />
        </Container>
    )
}

export function aoEnviarForm(dados){
    console.log(dados);
}   //printa no console os dados do FormCad
  
