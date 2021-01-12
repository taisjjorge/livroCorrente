import FormularioCadastro  from '../../Components/Forms/CadastroBiblioteca/FormularioCadastro'
// import { Login } from '../../Components/Forms/Login'


export default function ValidaBiblioteca() {

    function aoEnviarForm(dados){
        console.log(dados);
    }   //printa no console os dados do FormCad
  
    return(
        <>
            <FormularioCadastro aoEnviar={aoEnviarForm} />
            {/* <Login /> */}
        </>
    )
}


  
  