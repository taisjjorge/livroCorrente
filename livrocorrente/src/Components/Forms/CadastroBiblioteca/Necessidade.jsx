import { Button, Typography, FormControl, TextareaAutosize } from '@material-ui/core';
import '../Login.css';


export default function Necessidade() {
    return(
        
            <FormControl className="form" method="POST">
                <p className="logo-login">
                    LivroCorrente
                </p>

                <Typography varint="h5">
                    É possível pré-cadastrar sua demanda por livros em nossas bases.<br/>
                    Deseja nos enviar alguma solicitação?
                </Typography>

                <TextareaAutosize
                    rowsMax={4}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue=""
                />

                <Button color="primary" active>Finalizar</Button>
            </FormControl>
)}

