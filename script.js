const adviceLabel = document.querySelector('.advice__label')
const adviceHeading = document.querySelector('.advice__heading > span');

const getAdvice = async function () {
  try {
    const res = await fetch('https://api.adviceslip.com/advice')
    const { slip: { id, advice } } = await res.json()
    adviceLabel.textContent = `"${advice}"`;
    adviceHeading.textContent = `#${id}`
  } catch (error) {
    adviceLabel.textContent = `404 ERROR. No Internet Connection (${error.message}).\nTry Again`
  }

}

window.addEventListener('load', getAdvice)
document.querySelector('.advice__btn').addEventListener('click', getAdvice)