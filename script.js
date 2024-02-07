import { Dict_Api_key } from "./apikey.js";
const form = document.querySelector('form');
const resultDiv = document.querySelector('.result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userInput = form.elements[0].value;
  try {
    const wordInfo = await getWordInfo(userInput);
    console.log('Word Info:', wordInfo);
    displayResult(wordInfo);
  } catch (error) {
    console.error('Error:', error);
  }
});

async function getWordInfo(word) {
  const url = `https://urban-dictionary7.p.rapidapi.com/v0/define?term=${word}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': Dict_Api_key,
      'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); 
    return result;
  } catch (error) {
    throw error;
  }
}

function displayResult(wordInfo) {

  resultDiv.innerHTML = '';


  if (wordInfo.list && wordInfo.list.length > 0) {
    const definition = wordInfo.list[0].definition;
    const example = wordInfo.list[0].example;

    const resultHTML = `
      <p><strong>Definition:</strong> ${definition}</p>
      <p><strong>Example:</strong> ${example}</p>
    `;

    resultDiv.innerHTML = resultHTML;
  } else {
    resultDiv.innerHTML = '<p>No results found.</p>';
  }

const logoLink = document.getElementById('home');


const home = document.getElementById('home');

logoLink.addEventListener('click', () => {
  window.location.href = 'index.html';
});


}
