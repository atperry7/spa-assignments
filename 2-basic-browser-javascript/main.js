$(document).ready(function() {
  'user strict'
  const addition = (num, num2) => num + num2
  const multiply = (num, num2) => num * num2
  const subtraction = (num, num2) => num - num2

  const updateDisplay = func => $('.total').html(func)
  const getCurrentTotal = () => Number($('.total').html())
  const getCurrentMultiplier = () => Number($('.currentMultiplier').html())
  const setMultiplierState = () => {
    if (getCurrentTotal() < 10) {
      $('.leftButton').css('cursor', 'not-allowed')
    } else {
      $('.leftButton').css('cursor', 'pointer')
    }
  }

  setMultiplierState()

  $('.leftButton').click(function() {
    if (Number($('.total').html()) >= 10) {
      updateDisplay(subtraction(getCurrentTotal(), 10))
      $('.currentMultiplier').html(multiply(getCurrentMultiplier(), 1.2))
    }

    setMultiplierState()
  })

  $('.button').click(function() {
    updateDisplay(addition(getCurrentTotal(), getCurrentMultiplier()))
    setMultiplierState()
  })
})
