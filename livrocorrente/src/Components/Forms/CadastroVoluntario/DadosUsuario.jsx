import React, { useState } from "react";

import { Button, TextField, FormControl, Typography } from '@material-ui/core';
import '../Forms.css';


export default function DadosUsuario({ aoEnviar, validacoes }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erros, setErros] = useState({senha:{valido:true, texto:""}})

    function validarCampos(event){
        const {name, value} = event.target;
        const novoEstado = {...erros}
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    //function para não permitir que o usuário avance no cadastro sem preencher os campos corretamente
    function possoEnviar(){
        //iterar sobre o estado de erros
        for(let campo in erros) {
            if(!erros[campo].valido) {
             return false
         }
     }
        return true;
  }

    return(
        <>
            <form 
                onSubmit={(event) => {
                    event.preventDefault();
                    if(possoEnviar()){
                        aoEnviar({ email, senha });
                    }
                  }}>

                <FormControl className="form" method="POST">

                        <TextField 
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            required
                            variant="outlined"
                            margin="normal"
                        />

                        <TextField 
                            value={senha}
                            onChange={(event) => {
                              setSenha(event.target.value);
                            }}
                            id="senha"
                            name="senha"
                            label="Senha"
                            type="password"
                            required
                            variant="outlined"
                            margin="normal"             
                        />

                        <Button color="primary" active type="submit">Próximo</Button>
                    
                </FormControl>
            </form>
        </>
    )
}