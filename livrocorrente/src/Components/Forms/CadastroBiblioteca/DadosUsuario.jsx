import { Button, TextField, FormControl } from '@material-ui/core';
import '../Login.css';


export default function DadosUsuario() {
    return(
        <>
            <FormControl className="form" method="POST">
                <p className="logo-login">
                    LivroCorrente
                </p>

                    <TextField 
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        required
                        variant="outlined"
                        margin="normal"
                    />

                    <TextField 
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
        </>
    )
}