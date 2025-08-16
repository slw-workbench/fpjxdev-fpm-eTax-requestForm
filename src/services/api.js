import axios from 'axios';
import { API_ENDPOINT } from '../constants.js';

export function submitETaxRequest(payload) {
  return axios.post(API_ENDPOINT, payload);
}
