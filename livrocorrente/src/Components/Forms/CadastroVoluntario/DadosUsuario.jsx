import { Button, TextField, FormControl, Typography } from '@material-ui/core';
import '../Login.css';


export default function DadosUsuario() {
    return(
        <>
            <FormControl className="form" method="POST" align="center">
                <Typography variant="h5">
                    Cadastre-se
                </Typography>

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