import { Button, Typography, FormControl, InputLabel, NativeSelect, } from '@material-ui/core';
import '../Login.css';


export default function DadosIdentificacao() {
    return(
        <>
            <FormControl className="form" method="POST">
                <p className="logo-login">
                    LivroCorrente
                </p>

            <Typography>Apoiamos todas as bibliotecas comunitárias 
                localizadas no Rio de Janeiro <br/>
                que estejam cadastradas na 
                <a href="https://rnbc.org.br/redes-e-bibliotecas/">Rede Nacional de 
                Biblioteca Comunitárias</a><br/>
            </Typography>

                <Typography>Rede de Bibliotecas Comunitárias, Rio de Janeiro</Typography>


                <InputLabel htmlFor="select">Selecione a Rede correspondente</InputLabel>
                    <NativeSelect id="select">
                        <option value="rede"></option>
                        <option value="rede">Mar de Leitores</option>
                        <option value="rede">Rede Baixada Literária</option>
                        <option value="rede">Tecendo Uma Rede de Leitura</option>
                    </NativeSelect>

                <InputLabel htmlFor="select">Selecione a Biblioteca</InputLabel>
                <NativeSelect id="select">
                    <option value="biblio"></option>
                    <option value="biblio">Biblioteca A</option>
                    <option value="biblio">Biblioteca B</option>
                    <option value="biblio">Biblioteca C</option>
                    <option value="biblio">Biblioteca D</option>
                    <option value="biblio">Biblioteca E</option>
                </NativeSelect>

                <Typography>Endereço Cadastrado - Base RNBC</Typography>
                <InputLabel type="text" placeholder="Cidade" />
                <InputLabel type="text" placeholder="Estado" />
                <InputLabel type="text" placeholder="Logradouro" />
                <InputLabel type="text" placeholder="Telefone" />
                <InputLabel type="text" placeholder="Email institucional" />


                <InputLabel type="text" placeholder="Responsável" />
                <InputLabel type="text" placeholder="Vínculo com a biblioteca" />
                <InputLabel type="text" placeholder="Contato telefônico" />
                
                <Button color="primary" active>Quase lá...</Button>
            </FormControl>
        </>
    )
}