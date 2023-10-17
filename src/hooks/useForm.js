import { useState } from "react";

// 1) Criar a função useForm com um estado inicial (initialState)
// 2) Alterar o estado inicial de { email: "", password: "" } para (initialState)
// 3) Retornar o estado form e a função onChangeInputs
// EXTRA: Criar função de limpar inputs e acrescentar no return

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChangeInputs = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const clearInputs = () => {
    setForm(initialState);
  };

  return { form, onChangeInputs, clearInputs };
};
