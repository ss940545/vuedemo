import axios from 'axios';
import * as types from './mutations_type';

export const selectData = ({ commit }) => {
  axios.get('/route/selectall_get')
  .then((res)=>{
    console.log(res.status);
    console.log(res.data);
    commit(types.SELECTDATA, res.data);
  })
  .catch(err => console.log('err', err));
}

export const createData = ({ commit }, req) => {
  axios.post('/route/process_get', req )
  .then((res)=>{
    console.log(res.status);
    commit(types.ADDDATA, res.data);
  })
  .catch(err => console.log('err', err));
}

export const updateData = ({ commit }, req) => {
  axios.post('/route/updata_get', req )
  .then((res)=>{
    console.log(res.status);
    commit(types.UPDATADATA, res.data);
  })
  .catch(err => console.log('err', err));
}

export const deleteData = ({ commit }, req) => {
  axios.post('/route/delete_get', req )
  .then((res)=>{
    console.log(res.status);
    commit(types.DELETEADATA, res.data);
  })
  .catch(err => console.log('err', err));
}

export const selectOneData = ({ commit }, req) => {
  axios.post('/route/select_get', req )
  .then((res)=>{
    console.log(res.status); 
    commit(types.SELECTONEDATA, res.data);
  })
  .catch(err => console.log('err', err));
}