import React, { useState } from "react";
import { ContainerForm, ContainerSignup, Input } from "./styled";
import { useForm } from "../../hooks/useForm";

// EXERCÍCIO DE FIXAÇÃO:
// 1) Criar estado unificado form e passar o estado inicial como se fosse um objeto { email:"", password:"", senha: "", confirmaSenha: ""}
// 2) Como não tem mais os estados específicos de nomeUsuario, email, senha e confirmaSenha, tem que mudar os value dos inputs {form.nomeUsuario} {form.email}, {form.senha} e {form.confirmaSenha}
// 3) Adicionar a propriedade name em cada input (mesmo nome do value)
// 4) Colocar type e pattern nos inputs quando necessário
// 5) Adicionar required nos inputs para torná-los obrigatórios 
// 6) Na função enviarCadastro:
// - Adicionar o e.preventDefault() para que o formulário não seja resetado
// - Chamar o estado form no console.log
// - Adicionar a função clearInputs() para limpar o formulário


export default function Signup() {
  // const [nomeUsuario, setNomeUsuario] = useState("")
  // const [email, setEmail] = useState("")
  // const [senha, setSenha] = useState("")
  // const [confirmaSenha, setConfirmaSenha] = useState("")

  const { form, onChangeInputs, clearInputs } = useForm({
    nomeUsuario: "",
    email: "",
    senha: "",
    confirmaSenha: "",
  });

  // const onChangeNome = (e) => {
  //     setNomeUsuario(e.target.value)
  // }
  // const onChangeEmail = (e) => {
  //     setEmail(e.target.value)
  // }
  // const onChangeSenha = (e) => {
  //     setSenha(e.target.value)
  // }
  // const onChangeConfirmaSenha = (e) => {
  //     setConfirmaSenha(e.target.value)
  // }

  const enviarCadastro = (e) => {
    //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
    if (form.senha === form.confirmaSenha) {
      e.preventDefault();
      console.log(form);
      clearInputs();
    }
  };

  return (
    <ContainerSignup>
      <ContainerForm onSubmit={enviarCadastro}>
        <label htmlFor="nome">Nome de usuario:</label>
        <Input
          id="nome"
          name="nomeUsuario"
          value={form.nomeUsuario}
          onChange={onChangeInputs}
          placeholder="username"
          required
          type="text"
          pattern={"^.{3,}"}
        />
        <label htmlFor="email">Email:</label>
        <Input
          id="email"
          name="email"
          value={form.email}
          onChange={onChangeInputs}
          placeholder="nome@email.com"
          required
          type="email"
        />
        <label htmlFor="senha">Senha:</label>
        <Input
          id="senha"
          name="senha"
          value={form.senha}
          onChange={onChangeInputs}
          placeholder="Crie sua senha"
          required
          type="password"
        //   pattern={".*[A-Z]"}
        //   title="A senha deve conter ao menos uma letra maiúscula"
        />
        <label htmlFor="confirma-senha">Confirmação de senha:</label>
        <Input
          id="confirma-senha"
          name="confirmaSenha"
          value={form.confirmaSenha}
          onChange={onChangeInputs}
          placeholder="Confirme a senha"
          required
          type="password"
        />
        <button>Cadastrar</button>
      </ContainerForm>
    </ContainerSignup>
  );
}
