import React, { useState, useEffect } from 'react';
import DadosUsuario from './DadosUsuario';
import DadosIdentificacao from './DadosIdentificacao';
import Necessidade from './Necessidade';
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';

function FormularioCadastro({aoEnviar, validacoes}) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setdados] = useState({});
    
    //o useEffect recebe uma função que ele vai executar em cada um 
    //dos ciclos de vida do component react (componentDidMount, componentDidUpdate e componentWillUnmount) 
    useEffect(() => {
        if(etapaAtual === formularios.length-1){
            aoEnviar(dadosColetados);
        }
    })
    
    const formularios = [
    <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes} />, 
    <DadosIdentificacao aoEnviar={coletarDados} validacoes={validacoes} />,
    <Necessidade aoEnviar={coletarDados} validacoes={validacoes}/>,
    <Typography variant="h6"> Agradecemos o seu cadastro!<br/><br/>
        <p className="logo-login">LivroCorrente</p><br/>
    </Typography> 

    // <Typography variant="h8"> Entraremos em contato para dar as boas vindas e esclarecer eventuais dúvidas.</Typography>
];

    function coletarDados(dados){
        setdados({...dadosColetados, ...dados});
        proximo();
    }
    function proximo() {
        setEtapaAtual(etapaAtual+1);

    }

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step>
                    <StepLabel>
                        Dados de usuário
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Dados de Identificação 
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Conte sua necessidade
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Finalização
                    </StepLabel>
                </Step>
            </Stepper>
            { formularios[etapaAtual] }
            {/* { formularioAtual(etapaAtual) } */}
            
        </>
    );
}

export default FormularioCadastro;
