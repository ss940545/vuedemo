import * as types from './mutations_type.js'


// state
export const state = {
  listdata: [],
}

// mutations
export const mutations = {
  // action 發出 commit 會對應到 mutation 使用的是 Object key 方式
  [types.SELECTDATA] (state, payload) {
    // 在 mutation 改變 state（只有 mutation 可以改變！）
    state.listdata = payload;
  },

  [types.ADDDATA] (state, payload) {
    if(payload==='此帳號已經有人使用，請重新輸入'){
      alert('此帳號已經有人使用，請重新輸入');
     
    }else{
      alert('新增成功');
      state.listdata = payload;
    }
  },

  [types.UPDATADATA] (state, payload) { 
    if(payload==='帳號無法更改'){
      alert('帳號無法更改，請重新輸入');
    }else{
      alert('更改成功');
      state.listdata = payload;
    }
  },

  [types.DELETEADATA] (state, payload) {    
    if(payload==='填寫錯誤'){
      alert('資料無法更改，請重新輸入');
     
    }else{
      alert('更改成功');
      
      state.listdata = payload;
    }
  },

  [types.SELECTONEDATA] (state, payload) {    
    if(payload==='無此帳號，請重新輸入'){
      alert('無此帳號，請重新輸入');
     
    }else{
      alert('查詢成功');
      state.listdata = payload;
    }
  },
  
}