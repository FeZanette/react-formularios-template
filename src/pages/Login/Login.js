import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { irParaCadastro } from "../../Routes/coordinator";
import { ContainerForm, ContainerLogin, Input } from "./styled";
import { useForm } from "../../hooks/useForm";

// PRÁTICA 1
// 1) Criar estado unificado form e passar o estado inicial como se fosse um objeto { email:"", password:""}
// 2) Como não tem mais os estados específicos de email e password, tem que mudar os value dos inputs {form.email} e {form.password}
// 3) Para tornar um input obrigatório, adicionar required
// 4) Chamar o estado form no console.log da função enviaLogin

// PRÁTICA 2
// 1) Apagar as funções onChangeEmail e onChangeSenha
// 2) Nos inputs, colocar a propriedade name cujo valor é o mesmo nome do objeto do estado inicial do form (email e password). O name será chamado na nova função unificada onChangeInputs
// 3) Criar uma única função chamada onChangeInputs:
// - Desestruturar o event.target pegando o name e o value
// - Setar a função fazendo uma cópia do form com spread operator e vai alterar o name que vem do input e receber o value (o que o usuário digitar)
// 4) Chamar a função no onChange dos inputs

// PRÁTICA 3
// 1) Criar o arquivo useForm.js dentro da pasta hooks
// 2) Recortar o estado form e a função onChangeInputs e colar no arquivo useForm. (ver as modificações e acréscimos feitos na descrição dentro do arquivo)
// 3) Importar o hook useForm e passar um estado inicial como argumento { email: "", password: "" }
// EXTRA: chamar função de clearInputs no hook e chamar a função no enviaLogin


export default function Login() {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // const [form, setForm] = useState({ email: "", password: "" });

  const { form, onChangeInputs, clearInputs } = useForm({email:"", password:""})
  const navigate = useNavigate();

  // const onChangeEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const onChangeSenha = (e) => {
  //   setPassword(e.target.value);
  // };

  // const onChangeInputs = (event) => {
  //   const {name, value} = event.target
  //   setForm({...form, [name]: value})
  // }

  const enviaLogin = (e) => {
    e.preventDefault();
    console.log(form);
    clearInputs()
  };

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={enviaLogin}>
        <label htmlFor="email">Email:</label>
        <Input
          id="email"
          name="email"
          value={form.email}
          onChange={onChangeInputs}
          placeholder="nome@email.com"
          required
        />
        <label htmlFor="senha">Senha:</label>
        <Input
          id="senha"
          name="password"
          value={form.password}
          onChange={onChangeInputs}
          placeholder="Digite sua senha"
          required
          type="password"
        />
        <button>Fazer Login</button>
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>
        Ainda não tenho uma conta
      </button>
    </ContainerLogin>
  );
}
