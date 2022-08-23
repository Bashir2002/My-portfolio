const navToggle = document.querySelector('.menu')
const navigation = document.querySelector('.navlinks')
const close = document.querySelector('.close')

navToggle.addEventListener('click', () => {
  navigation.classList.remove('hidden')
})
close.addEventListener('click', function (e) {
  navigation.classList.add('hidden')
})
document.addEventListener('scroll', () => {
  navigation.classList.add('hidden')
})
navigation.addEventListener('click', (e) => {
  const key = e.target
  if (key.classList.contains('nav-link')) {
    navigation.classList.add('hidden')
  }
})
