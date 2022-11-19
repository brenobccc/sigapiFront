import AuthContext from "../contextos/AuthContext";
import axios from "axios";
import { useContext } from "react";

export default function Login(user, pass,tipoUser){
    const urlBase = "http://localhost:8000";
    const {auth,setAuth} = useContext(AuthContext);
    /*Validações*/
    if (user.trim().length === 0) {
      alert("Informe uma matrícula!");
      return false;
    } 
    if (pass.trim().length === 0) {
      alert("Informe uma senha!");
      return false;
    } 
      
    axios.post(urlBase+"/api/token/", {  
        username:`${user}`,
        password:`${pass}`
    })
    .then((response)=> {
      let token = response.data.access;
      /*aproveita que já  tem um token e seta o token de acesso sendo o de aluno
      mas o recomendado seria uso do token do user admin. cenas dos próximos capitulos*/ 
      localStorage.setItem('acessos',tipoUser === 'P' ? '{"alunoAcesso": false, "professorAcesso": true}': '{"alunoAcesso": true, "professorAcesso": false}');
      setAuth(JSON.parse(localStorage.getItem('acessos')));
      return {"token": token}
    })
    .catch((err)=> {
      console.error("Erro na autenticação!")
      return false;
    });

    return;
}