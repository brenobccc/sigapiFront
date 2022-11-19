import React from 'react';
import axios from 'axios';
import './Cadastro.css';

export default function CadastroAluno(){
    let urlBase = 'http://localhost:8000';
  
    return (
        <div id="background-cadastro">
            <div id="cadastro-panel">
                <div id="box-cadastro">
                    <input id="aluno-nome" placeholder="NOME"></input>
                    <input id="aluno-email" placeholder="EMAIL"></input>
                    <input type="password" id="aluno-pass" placeholder="SENHA"></input>
                    <input id="aluno-matricula" placeholder="MATRÍCULA"></input>
                    <input id="aluno-cpf" placeholder="CPF"></input>
                    <input id="aluno-rg" placeholder="RG"></input>
                    <input id="aluno-data-nascimento" placeholder="DATA DE NASCIMENTO"></input>
                    <input id="aluno-sexo" placeholder="SEXO"></input>
                    <input id="aluno-telefone" placeholder="TELEFONE"></input>
                    <input id="aluno-estado-civil" placeholder="ESTADO CIVIL"></input>
                    <input id="aluno-nome-mae" placeholder="NOME  DA MAE"></input>
                    <input id="aluno-nome-pai" placeholder="NOME DO PAI"></input>

                </div>
                <div id="box2-cadastro">
                        <button onClick={()=>{
                             axios.post(urlBase+"/sigapi/api/users/",
                             {
                             username: document.getElementById('aluno-nome').value,
                             password: document.getElementById('aluno-pass').value,
                             email:  document.getElementById('aluno-email').value
                             },
                             {
                               headers:{
                                 Authorization: `Bearer ${token}`
                               }
                             })
                             .then((response)=> {
                                let username = response.data.url
                                /*Criar conta usuario*/
                                        axios.post(urlBase+"/sigapi/api/aluno/",
                                    {
                                        user: username,
                                        matricula: document.getElementById('aluno-matricula').value,
                                        cpf: document.getElementById('aluno-cpf').value,
                                        born: document.getElementById('aluno-data-nascimento').value,
                                        endereco: document.getElementById('aluno-endereco').value,
                                        nome_pai: document.getElementById('aluno-nome-pai').value,
                                        nome_mae: document.getElementById('aluno-nome-mae').value,
                                        sexo: document.getElementById('aluno-sexo').value,
                                        telefone: document.getElementById('aluno-telefone').value,
                                        estado_civil: document.getElementById('aluno-estado-civil').value,
                                        rg: document.getElementById('aluno-rg').value
                                    },
                                    {
                                    headers:{
                                        Authorization: `Bearer ${response.data.token}`
                                    }
                                    })
                                    .then((response)=> console.log(response.data))
                                    .catch((err)=> {
                                        console.error("Erro!")
                                    });
                             })
                             .catch((err)=> {
                               console.error("Erro!")
                             });

                            
                            
                            alert("clicado");

                        }}> Cadastrar </button>
                    </div>
            </div>

        </div>
    )
}