import axios from 'axios';

export const USER_API = axios.create({
  baseURL: 'https://moneyfulpublicpolicy.co.kr'
});

export const RESULT_API = axios.create({
  baseURL: 'https://sugary-scarce-story.glitch.me'
  // baseURL: 'http://localhost:5000'
});
