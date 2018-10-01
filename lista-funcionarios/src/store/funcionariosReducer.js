function createData(id, nome, idade, cargo, nascimento) {
  return { id, nome, idade, cargo, nascimento };
}

const rows = [
  createData(10, 'Aiden Jacobs', 30, 'Developer', '26-01-1988'),
  createData(11, 'Marjorie Roberts', 31, 'Administrativo', '26-01-1987'),
  createData(12, 'Ethan Fleming', 40, 'Gerente de Marketing', '26-01-1969'),
  createData(13, 'Shane Dean', 41, 'Vice Presidente', '26-01-1971'),
  createData(14, 'Lester Silva', 50, 'Presidente', '26-01-1970'),
];

const initialState = {
  funcionarios: rows
};

export const funcionariosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LISTAR_FUNCIONARIOS':
      return { ...state };
    case 'NOVO_FUNCIONARIO':
      const insereFuncionario = [ ...state.funcionarios, action.payload ]
      return { ...state, funcionarios: insereFuncionario };
    case 'REMOVE_FUNCIONARIO':
      let removeFuncionario = [ ...state.funcionarios ]
      const index = removeFuncionario.indexOf(action.payload)
      removeFuncionario.splice(index, 1);
      return { ...state, funcionarios: removeFuncionario };
    default:
      return state;
  }
};