const $ = document.querySelector.bind(document)

const calculateResult = (event) => {
  event.preventDefault()

  const loanValue = convertStringToFloat('loan-value')
  const loanInstallments = convertStringToFloat('loan-installments')
  const taxRate = convertStringToFloat('client-type')

  const installmentValue = calculateInstallmentValue(loanValue, taxRate, loanInstallments)

  $('#result').innerText = `Valor da prestação: R$ ${installmentValue.toFixed(2)}`
}

/**
 * Gets the value of a HTML input and converts it to a float number
 * @param {string} id An id from a HTML input without the hash
 * @returns The value of the input converted to a float number
 */
const convertStringToFloat = (id) => {
  let aux = $(`#${id}`).value
  const value = parseFloat(aux)
  return value
}

/**
 * Calculates the installment value of the final loan value
 * @param {number} loanValue The loan's value
 * @param {number} taxRate The tax rate to be applied to the loan
 * @param {number} loanInstallments The amount of installments of the loan
 * @returns The installment value of the final loan value as a float number
 */
const calculateInstallmentValue = (loanValue, taxRate, loanInstallments) => {
  const finalLoanValue = loanValue * (1 + ((taxRate / 100) * loanInstallments))
  const installmentValue = finalLoanValue / loanInstallments
  return installmentValue
}