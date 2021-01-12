import { Button, FormControl, Typography, InputLabel, NativeSelect } from '@material-ui/core';
import '../Forms.css';


export default function PontosColeta() {
    return(
        <>
            <FormControl className="form" method="POST">
                <p className="logo-login">
                    LivroCorrente
                </p>

                    <Typography variant="h5">
                    Agora vamos cadastrar os principais pontos de coleta próximos à sua região
                    </Typography>


                    <InputLabel htmlFor="select">Apoie Rede Mar de Leitores</InputLabel>
                    <NativeSelect id="select">
                        <option value="coleta"></option>
                        <option value="coleta">Avenida São João, n 77 - Rio de Janeiro</option>
                        <option value="coleta">Avenida São Judas, n 88 - Rio de Janeiro</option>
                        <option value="coleta">Avenida São Sebastião, n 99 - Rio de Janeiro</option>
                    </NativeSelect>

                    <InputLabel htmlFor="select">Apoie Rede Baixada Literária</InputLabel>
                    <NativeSelect id="select">
                        <option value="coleta"></option>
                        <option value="coleta">Avenida São João, n 77 - Rio de Janeiro</option>
                        <option value="coleta">Avenida São Judas, n 88 - Rio de Janeiro</option>
                        <option value="coleta">Avenida São Sebastião, n 99 - Rio de Janeiro</option>
                    </NativeSelect>

                    <InputLabel htmlFor="select">Apoie Tecendo Uma Rede de Leitura</InputLabel>
                    <NativeSelect id="select">
                        <option value="coleta"></option>
                        <option value="coleta">Avenida São João, n 77 - Rio de Janeiro</option>
                        <option value="coleta">Avenida São Judas, n 88 - Rio de Janeiro</option>
                        <option value="coleta">Avenida São Sebastião, n 99 - Rio de Janeiro</option>
                    </NativeSelect>
                   
                    <Button color="primary" active type="submit">Finalizar</Button>
                
            </FormControl>
        </>
    )
}