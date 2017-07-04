$(document).ready(function () {
  'user strict'

  const pentalityForMultipler = 10
  const pentalityForAuto = 100
  const multiplier = 1.2
  const intervalIds = []

  Storages.alwaysUseJsonInStorage(true)
  let myStorage = Storages.localStorage

  const addition = (num, num2) => num + num2
  const multiply = (num, num2) => num * num2
  const subtraction = (num, num2) => num - num2

  const updateDisplay = func => $('.total').html(func)
  const updateAutoClickTotal = func => $('.autoClickTotal').html(func)
  const updateCurrentMultiplier = number => $('.currentMultiplier').html(number)
  const getCurrentTotal = () => Number($('.total').html())
  const getCurrentMultiplier = () => Number($('.currentMultiplier').html())
  const getAutoClickTotal = () => Number($('.autoClickTotal').html())
  const checkDisplayTotalGreaterThanEqual = number => Number($('.total').html()) >= number
  const setMultiplierState = () => {
    if (getCurrentTotal() < pentalityForMultipler) {
      $('.leftButton').css({
        cursor: 'not-allowed',
        'background-color': 'grey'
      })
    } else {
      $('.leftButton').css({ cursor: 'pointer', 'background-color': 'white' })
    }
  }
  const setAutoClickerState = () => {
    if (getCurrentTotal() < pentalityForAuto) {
      $('.rightButton').css({
        cursor: 'not-allowed',
        'background-color': 'grey'
      })
    } else {
      $('.rightButton').css({ cursor: 'pointer', 'background-color': 'white' })
    }
  }

  const clearAllIntervals = array => {
    for (id of array) {
      clearInterval(id)
      updateAutoClickTotal(subtraction(getAutoClickTotal(), 1))
    }
  }


  init = () => {
    if (!myStorage.isSet('currentTotal') || !myStorage.isEmpty('currentTotal')) {
      updateDisplay(myStorage.get('currentTotal'))
    }

    if (myStorage.isSet('currentMultiplier') && !myStorage.isEmpty('currentMultiplier')) {
      updateCurrentMultiplier(myStorage.get('currentMultiplier'))
    }

    if (!myStorage.isSet('currentAutoClicks') || !myStorage.isEmpty('currentAutoClicks')) {
      updateAutoClickTotal(myStorage.get('currentAutoClicks'))
      for (var i = 0; i < myStorage.get('currentAutoClicks'); i++) {
        let id = setInterval(() => {
          updateDisplay(addition(getCurrentTotal(), getCurrentMultiplier()))
          setMultiplierState()
          setAutoClickerState()
        }, 1000)

        intervalIds.push(id)
      }
    }

    setInterval(() => {
      myStorage.set(
        {currentTotal: getCurrentTotal(), currentMultiplier: getCurrentMultiplier(), currentAutoClicks: getAutoClickTotal()})
      console.log(`Auto Save Called`)
    }, 10000)
  }

  init()
  setAutoClickerState()
  setMultiplierState()

  $('.leftButton').click(function() {
    if (checkDisplayTotalGreaterThanEqual(pentalityForMultipler)) {
      updateDisplay(subtraction(getCurrentTotal(), pentalityForMultipler))
      $('.currentMultiplier').html(multiply(getCurrentMultiplier(), multiplier))
    }

    setMultiplierState()
    setAutoClickerState()
  })

  $('.button').click(function() {
    updateDisplay(addition(getCurrentTotal(), getCurrentMultiplier()))
    setMultiplierState()
    setAutoClickerState()
  })

  $('.rightButton').click(function() {
    if (checkDisplayTotalGreaterThanEqual(pentalityForAuto)) {
      let id = setInterval(() => {
        updateDisplay(addition(getCurrentTotal(), getCurrentMultiplier()))
        setMultiplierState()
        setAutoClickerState()
      }, 1000)

      updateDisplay(subtraction(getCurrentTotal, pentalityForAuto))
      intervalIds.push(id)
      updateAutoClickTotal(addition(getAutoClickTotal(), 1))
      setAutoClickerState()
    }
  })

  $('.resetButton').click(function() {
    
  })
})
