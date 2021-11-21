export const nameValid = (value) => {
  if(value === '') return {
    type: 'error',
    msg: 'Preencha todos os campos!'
  };
  if (value.length < 2) return {
    type: 'error',
    msg: 'O nome precisa ter mais de 2 letras!'
  };
};

export  const phoneValid = (value) => {
  if(value === '') return {
    type: 'error',
    msg: 'Preencha todos os campos!'
  };
  if (value.length < 4) return {
    type: 'error',
    msg: 'Numero de telefone inválido!'
  };
};

export  const emailValid = (value) => {
  if(value === '') return {
    type: 'error',
    msg: 'Preencha todos os campos!'
  };
  if (!(value.includes("@") && value.includes(".com"))) {
    return{
      type: 'error',
      msg: 'Formato de E-mail inválido!'
    };
  }
};