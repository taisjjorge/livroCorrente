import React, { useState } from "react";

import { Button, TextField, FormControl, FormControlLabel, Switch, Typography } from '@material-ui/core';
import '../Forms.css';

export default function DadosPessoais({aoEnviar, validacoes}) {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [celular, setCelular] = useState("");
    const [ofertas, setOfertas] = useState(true);
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    const [erros, setErros] = useState({cpf:{valido:true, texto:""}, nome:{valido:true, texto:""}})

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
                    aoEnviar({ nome, cpf, nascimento, celular, ofertas, cep, endereco, numero, estado, cidade });
                }     
            }>   
                <FormControl className="form" method="POST">

                        <TextField 
                            value={nome}
                            onChange={(event) => {
                                setNome(event.target.value);
                            }}
                            onBlur={validarCampos}
                            error={!erros.nome.valido}
                            helperText={erros.nome.texto}
                            id="nome"
                            name="nome"
                            label="Nome Completo"
                            type="text"
                            required
                            variant="outlined"
                            margin="normal"
                        />

                        <TextField 
                            value={cpf}
                            onChange={(event) => {
                                setCpf(event.target.value);
            
                            }}
                            onBlur={validarCampos}
                            error={!erros.cpf.valido}
                            helperText={erros.cpf.texto}
                            id="cpf"
                            name="cpf"
                            label="CPF"
                            required
                            variant="outlined"
                            margin="normal"             
                        />

                        <TextField 
                            id="celular"
                            name="celular"
                            label="Celular"
                            required
                            variant="outlined"
                            margin="normal"             
                        />

                        <Typography variant="h7"> 
                            <br/>Nós mantemos parcerias com livrarias físicas e virtuais. <br/>Na compra de um exemplar nas livrarias parceiras,
                            outro livro é doado diretamente para nossas redes de apoio.<br/><br/>
                            Deseja receber ofertas dos nossos parceiros e incentivar a leitura nas comunidades?
                        </Typography>

                        <FormControlLabel label="Sim, quero ajudar"
                            control={<Switch checked={ofertas} onChange={(event) => {
                                setOfertas(event.target.checked) //checked para Switch
                            }} name="ofertas"
                                color="primary" />} />

                        <TextField 
                            id="celular"
                            name="celular"
                            label="Celular"
                            required
                            variant="outlined"
                            margin="normal"             
                        />
                        
                        <Button color="primary" active type="submit">Quase lá...</Button>
                    
                </FormControl>
            </form> 
        </>
    )
}