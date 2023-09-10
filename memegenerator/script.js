const generateBtn = document.querySelector('.generateBtn');
const memeImage = document.querySelector('img');
const memeTitle = document.querySelector('.loading');
const memeAuthor = document.querySelector('.author');
const API_LINK = 'https://meme-api.com/gimme';

const updateDetails = (url, title, author) => {
    memeImage.setAttribute('src', url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Author: ${author}`;
}

const generateMeme = () => {
    fetch(API_LINK)
    .then(response => response.json())
    .then(data => {
        updateDetails(data.url, data.title, data.author);
    });
    console.log('fetch api')
}

generateBtn.addEventListener('click', generateMeme);
memeImage.addEventListener('click', () => {
    window.open(memeImage.getAttribute("src"));
    memeImage.setAttribute('src', '')
})

