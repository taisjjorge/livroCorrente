
import { Button, TextField, FormControl, Typography} from '@material-ui/core';



export default function Login() {
    return(
        <>
            <FormControl className="form" method="POST">
            <Typography  variant="h5" component="h1" align="center">Login</Typography><br/>
            <p className="helper">Já possui cadastro? <br/>
                Insira os dados para continuar</p>

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

                    <Button color="primary" active type="submit">Entrar</Button>
                
            </FormControl>
        </>
    )
}

