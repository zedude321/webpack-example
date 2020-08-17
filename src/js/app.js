randomButton.addEventListener('click', changeLanguage);

function changeLanguage() {
  const randomIndex = Math.floor(Math.random() * (languages.length))
  hello.innerHTML = languages[randomIndex]
}