const str = "'But isn't it stupid? They're gonna to screw it all up!' - asked Tom. 'Don't you think you sound stupid youself? It's a thing to think about.' - answered Mary."

const replaceQuotes = () => {
  const newStr = document.getElementById('quotes-text').value;
  document.querySelector('[data-id="task1-result"]').innerHTML = newStr.replace(/'(?![a-z]{1,2}\b)/g, '"');
}

const validateInput = () => {
  let currentInput = document.getElementById("input-name");
  let errorMessage = '';
  if ((currentInput.value.match(/\d/g)) || (currentInput.value === '')) {
    currentInput.classList.add('outline-red');
    errorMessage += '<p>Поле Имя не может содержать цифры или быть пустым</p>'
  }
  currentInput = document.getElementById("input-phone");
  if (!currentInput.value.match(/\+7\(\d{3}\)\d{3}-\d{4}$/g)) {
    currentInput.classList.add('outline-red');
    errorMessage += '<p>Поле Телефон должно иметь вид +7(000)000-0000 и не быть пустым</p>'
  }
  currentInput = document.getElementById("input-email");
  if (!currentInput.value.match(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/g)) {
    currentInput.classList.add('outline-red');
    errorMessage += '<p>Поле Email должно иметь вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru и не быть пустым</p>'
  }
  currentInput = document.getElementsByName('comments')[0];
  if (currentInput.value === '') {
    currentInput.classList.add('outline-red');
    errorMessage += '<p>Поле Текст не может быть пустым</p>'
  }
  document.querySelector('.error-msg').innerHTML = errorMessage;
}

function removeOutline() {
  this.classList.remove('outline-red');
}

const init = () => {
  document.getElementById('quotes-text').value = str;
  document.querySelector('.replace-button').addEventListener('click', replaceQuotes);
  document.querySelector('.userdata-form__send-button').addEventListener('click', validateInput);
  const inputsArr = document.querySelectorAll('.userdata-form__short');
  inputsArr.forEach(item => { item.addEventListener('click', removeOutline) });
}

window.onload = init;