import axios from 'axios';

export const USER_API = axios.create({
  baseURL: 'https://moneyfulpublicpolicy.co.kr'
});

export const RESULT_API = axios.create({
  baseURL: 'http://localhost:5000'
});
