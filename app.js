// API [Advice Slip API] (https://api.adviceslip.com)

const adviceBtn = document.querySelector('.advice-btn');
const adviceBody = document.querySelector('.advice-body');
const adviceId = document.querySelector('.advice-id');

adviceBtn.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(d => {
            adviceBody.innerText = `"${d['slip']['advice']}"`;
            adviceId.innerText = `Advice #${d['slip']['id']}`;
        });
});

