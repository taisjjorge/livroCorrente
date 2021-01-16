import { Button, TextField, FormControl } from '@material-ui/core';
import '../Forms.css';

export default function DadosPessoais() {
    return(
        <>
                
            <FormControl className="form" method="POST">
                <p className="logo-login">
                    LivroCorrente
                </p>

                    <TextField 
                        id="nome"
                        name="nome"
                        label="Nome Completo"
                        type="text"
                        required
                        variant="outlined"
                        margin="normal"
                    />

                    <TextField 
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
                        label="CPF"
                        required
                        variant="outlined"
                        margin="normal"             
                    />
                    
                    <Button color="primary" active type="submit">Quase lá...</Button>
                
            </FormControl>
        </>
    )
}