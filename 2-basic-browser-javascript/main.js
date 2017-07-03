$(document).ready(function() {
  'user strict'
  let total = 0
  let currentMultiplier = Number($('.currentMultiplier').html())

  $('.leftButton').click(function() {
    currentMultiplier = currentMultiplier * 1.2
    $('.currentMultiplier').html(currentMultiplier)
  })

  $('.button').click(function() {
    total = total + currentMultiplier
    $('.total').html(total)
  })
})
