import Vue from 'vue';
import VueRouter from 'vue-router';
//官方元件

import Home from '@/components/HelloWorld'
import Page from '@/components/CtoF'
import toggle from '@/components/toggleTemperature'
import update from '@/components/update'
import account from '@/components/account'
import insert from '@/components/insert'
import deleteold from '@/components/delete'
import select from '@/components/select'

// //自訂元件

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      name:'首頁', //元件呈現的名稱
      path:'/index', //對應的虛擬路徑
      component:Home, //對應的元件
    },
    {
      name:'分頁', //元件呈現的名稱
      path:'/CtoF', //對應的虛擬路徑
      component:Page, //對應的元件
    },
    {
      name:'分頁2', //元件呈現的名稱
      path:'/toggle', //對應的虛擬路徑
      component:toggle, //對應的元件
    },
    {
      name:'會員', //元件呈現的名稱
      path:'/account', //對應的虛擬路徑
      component:account, //對應的元件
      meta:{ requireAuth:true},
      children:[
        {
          name:'修改', //元件呈現的名稱
          path:'/update', //對應的虛擬路徑
          component:update, //對應的元件
        },
        {
          name:'新增', //元件呈現的名稱
          path:'/insert', //對應的虛擬路徑
          component:insert, //對應的元件
        },
        {
          name:'刪除', //元件呈現的名稱
          path:'/delete', //對應的虛擬路徑
          component:deleteold, //對應的元件
        },
        {
          name:'查詢', //元件呈現的名稱
          path:'/select', //對應的虛擬路徑
          component:select, //對應的元件
        },
      ]
    },
  ]
});