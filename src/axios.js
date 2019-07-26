import axios from 'axios';

/* 送出GET */
export const selectAll = request =>{
  console.log('a');
  axios.get('/route/selectall_get', request);
}
 
