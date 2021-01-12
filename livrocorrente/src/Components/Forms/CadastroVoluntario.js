import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { TextField } from '@material-ui/core';


export function CadastroVoluntario() {
    return(
            <Form method="POST">
                <span>Pontos de coleta</span>
                <span>Finalização</span>

                <Label>Email</Label>
                <Input type="text"/>

                <Label>Senha</Label>
                <Input type="password"/>

                <p>Insira seus dados pessoais</p>
                <Input type="text" placeholder="Nome Completo"/>
                <Input type="text" placeholder="Digite o CPF"/>
                <Input type="text" placeholder="Digite o celular"/>

                <p>Agora vamos cadastrar os principais pontos de coleta próximos à sua região</p>
                <br/>
                <Label>Apoie Rede Mar de Leitores</Label>
                <select name="coleta">
                    <option></option>
                    <option>Avenida São João, n 77 - Rio de Janeiro</option>
                    <option>Avenida São Judas, n 88 - Rio de Janeiro</option>
                    <option>Avenida São Sebastião, n 99 - Rio de Janeiro</option>
                </select>
                <Label>Apoie Rede Baixada Literária</Label>
                <select name="coleta">
                    <option></option>
                    <option>Avenida São João, n 77 - Rio de Janeiro</option>
                    <option>Avenida São Judas, n 88 - Rio de Janeiro</option>
                    <option>Avenida São Sebastião, n 99 - Rio de Janeiro</option>
                </select>
                <Label>Apoie Tecendo Uma Rede de Leitura</Label>
                <select name="coleta">
                    <option></option>
                    <option>Avenida São João, n 77 - Rio de Janeiro</option>
                    <option>Avenida São Judas, n 88 - Rio de Janeiro</option>
                    <option>Avenida São Sebastião, n 99 - Rio de Janeiro</option>
                </select>

                <Label>Para finalizar, indique o melhor horário para contato:</Label>
                <Input type="text"/>
                <Button color="primary" size="lg" active>Finalizar</Button>
            </Form>
    )
}

