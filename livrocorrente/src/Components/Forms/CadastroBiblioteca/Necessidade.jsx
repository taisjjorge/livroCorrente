import React, { useState } from "react";
import { Button, Typography, FormControl, TextField } from '@material-ui/core';
import '../Forms.css';


export default function Necessidade({aoEnviar}) {

    const [solicitacao, setSolicitacao] = useState("");

    return(

        <form
            onSubmit={(event) => {
                event.preventDefault();
                    aoEnviar({ solicitacao });
                }     
            }>

            <FormControl className="form" method="POST">
                <Typography varint="h5">
                    É possível pré-cadastrar sua demanda por livros em nossas bases.<br/>
                    Deseja nos enviar alguma solicitação?
                </Typography>
                <br/>
                <TextField
                    value={solicitacao}
                    onChange={(event) => {
                      setSolicitacao(event.target.value);
                    }}
                        id="solicitacao"
                        name="solicitacao"
                        label="Insira aqui os títulos mais procurados na sua biblioteca"
                        type="text" 
                        multiline
                        rowsMax={5}
                        variant="outlined"
                        margin="normal"
                    />
                <Button type="submit" color="primary" active>Finalizar</Button>
            </FormControl>
        </form>
)}

