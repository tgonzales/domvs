export const listarFuncionarios = () => ({
  type: 'LISTAR_FUNCIONARIOS',
});

export const novoFuncionario = payload => ({
  type: 'NOVO_FUNCIONARIO',
  payload
});

export const removeFuncionario = payload => ({
  type: 'REMOVE_FUNCIONARIO',
  payload
});