export function validateEmptyAndLength3 (value) {
  if (!value) {
    return 'Este campo é obrigatorio'
  }

  if (value.length < 3) {
    return 'Este campo precisa de no minimo 3 caracteres'
  }

  return true
}

export function validateEmptyAndEmail (value) {
  if (!value) {
    return 'Este campo é obrigatorio'
  }

  const isValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)

  if (!isValid) {
    return 'Adicione um email válido'
  }

  return true
}
