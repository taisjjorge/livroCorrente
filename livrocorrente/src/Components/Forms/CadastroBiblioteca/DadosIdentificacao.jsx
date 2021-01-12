import React, { useState } from "react";

import { Button, Typography, FormControl, Input, NativeSelect, InputLabel } from '@material-ui/core';
import '../Forms.css';


export default function DadosIdentificacao({aoEnviar}) {

        const [rede, setRede] = useState(true);
        const [biblio, setBiblio] = useState(true);

    return(
        <>

        <form
            onSubmit={(event) => {
                event.preventDefault();
                    aoEnviar({ rede, biblio });
                }     
            }>

            <Typography variant="h6">Apoiamos todas as bibliotecas comunitárias que estão localizadas no Rio de Janeiro
                e possuem cadastro ativo na <a href="https://rnbc.org.br/redes-e-bibliotecas/"> Rede Nacional de 
                Biblioteca Comunitárias</a><br/>
            </Typography>

            <FormControl className="form" method="POST">
            
                <InputLabel id="select">
                    Selecione a Rede e a Biblioteca correspondente
                </InputLabel>
                    <NativeSelect id="select"
                        checked={rede}
                        value={rede}
                        onChange={(event) => {
                          setRede(event.target.checked);
                        }}
                    >
                        <option value="rede"></option>
                        <option value="rede">Mar de Leitores</option>
                        <option value="rede">Rede Baixada Literária</option>
                        <option value="rede">Tecendo Uma Rede de Leitura</option>
                    </NativeSelect>
                
                    <NativeSelect id="select"
                        checked={biblio}
                        value={biblio}
                        onChange={(event) => {
                        setBiblio(event.target.checked);
                        }}
                    >
                        <option value="biblio"></option>
                        <option value="biblio">Casa Azul</option>
                        <option value="biblio">Ciranda da Tarituba</option>
                        <option value="biblio">Colibri</option>
                        <option value="biblio">Itaxí Mirim</option>
                        <option value="biblio">Quilombo Campinho da Independência</option>
                    </NativeSelect>
                        <br/><br/>
                   
                <Typography variant="h6">Informações adicionais • Base RNBC</Typography>
                    <Input margin="dense" disabled={true} type="text" placeholder="Cidade cadastrada" />
                    <Input margin="dense" disabled={true} type="text" placeholder="Estado cadastrado" />
                    <Input margin="dense" disabled={true} type="text" placeholder="Logradouro cadastrado" />
                    <Input margin="dense" disabled={true} type="text" placeholder="Telefone cadastrado" />
                    <Input margin="dense" disabled={true} type="text" placeholder="Email institucional cadastrado" />
                
                
                <Button 
                    type="submit" 
                    color="primary" 
                    active>Quase lá...</Button>
            </FormControl>
        </form>
        </>
    )
}


