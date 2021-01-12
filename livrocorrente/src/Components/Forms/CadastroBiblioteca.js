import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { TextField } from '@material-ui/core';

export function CadastroBiblioteca() {

    return(
        <>
            <Form method="POST">
                <span>Dados de Login</span>
                <span>Identificação</span>
                <span>Pontos de coleta</span>
                <span>Finalização</span>

                <Label>Email</Label>
                <Input type="text"/>

                <Label>Senha</Label>
                <Input type="password"/>

                <p>Apoiamos todas as bibliotecas comunitárias localizadas no Rio de Janeiro <br/>
                    que estejam cadastradas na <a href="https://rnbc.org.br/redes-e-bibliotecas/">Rede Nacional de Biblioteca Comunitárias</a><br/>
                </p>
                <Label>Rede de Bibliotecas Comunitárias, Rio de Janeiro</Label>

                <Label>Selecione a Rede correspondente</Label>
                <select id="select" name="Rede de Bibliotecas Comunitárias">
                    <option></option>
                    <option>Mar de Leitores</option>
                    <option>Rede Baixada Literária</option>
                    <option>Tecendo Uma Rede de Leitura</option>
                </select>

                <select id="select" name="Selecione a Biblioteca">
                    <option></option>
                    <option>Biblioteca A</option>
                    <option>Biblioteca B</option>
                    <option>Biblioteca C</option>
                    <option>Biblioteca D</option>
                    <option>Biblioteca E</option>
                    <option>Biblioteca F</option>
                </select>

                <Label>Dados de Contato</Label>
                <Input type="text" placeholder="Cidade" />
                <Input type="text" placeholder="Estado" />
                <Input type="text" placeholder="Logradouro" />
                <Input type="text" placeholder="Telefone" />
                <Input type="text" placeholder="Email institucional" />


                <Input type="text" placeholder="Responsável" />
                <Input type="text" placeholder="Vínculo com a biblioteca" />
                <Input type="text" placeholder="Contato telefônico" />
                
                <Button color="primary" size="lg" active>Finalizar</Button>
            </Form>
        </>
    )
}