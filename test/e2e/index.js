// @flow
import Nightmare from 'nightmare';

const nightmare = new Nightmare({ show: true });

nightmare
  .goto('https://duckduckgo.com')
  .type('#search_form_input_homepage', 'github nightmare')
  .click('#search_button_homepage')
  .wait('#r1-0 a.result__a')
  .evaluate(() => {
    const res = document.querySelector('#r1-0 a.result__a');

    if (res) return res;

    return null;
  })
  .end()
  .then(console.warn)
  .catch(error => {
    console.error('Search failed:', error);
  });
