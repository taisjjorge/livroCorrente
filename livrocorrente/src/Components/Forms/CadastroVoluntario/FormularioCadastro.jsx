import React, { useState, useEffect } from 'react';
import DadosUsuario from './DadosUsuario';
import DadosPessoais from './DadosPessoais';
import PontosColeta from './PontosColeta';
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
    <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
    <PontosColeta aoEnviar={coletarDados} validacoes={validacoes}/>,
    <Typography variant="h5"> Agradecemos o seu cadastro!</Typography> 
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
                        Dados Pessoais 
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Pontos de coleta
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
