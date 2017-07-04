$(document).ready(function() {
  'user strict'

  const addition = (num, num2) => num + num2
  const multiply = (num, num2) => num * num2
  const subtraction = (num, num2) => num - num2

  const updateDisplay = func => $('.total').html(func)

  const getCurrentTotal = () => Number($('.total').html())

  const getCurrentMultiplier = () => Number($('.currentMultiplier').html())

  $('.leftButton').click(function() {
    if (Number($('.total').html()) < 10) {
      console.log(getCurrentTotal())
    } else {
      updateDisplay(subtraction(getCurrentTotal(), 10))
      $('.currentMultiplier').html(multiply(getCurrentMultiplier(), 1.2))
    }
  })

  $('.button').click(function() {
    updateDisplay(addition(getCurrentTotal(), getCurrentMultiplier()))
  })
})
