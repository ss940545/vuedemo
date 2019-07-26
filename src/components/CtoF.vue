<template>
   <div id="CtoF">
        <p>華氏轉換攝氏</p>
        華氏<input type="text" v-model='text'>
        攝氏{{reverse}}
       <hr>
       <button @click="$destroy()">Destroy</button>
      
   </div> 
</template>


<script>

export default {

  name: 'CtoF',
  data(){
    return{
      text:'21'
    }
  },
  components:{
   
  },
  computed: {
    reverse(){
      if(this.text ===''){
        return this.text;
      }else{
        return (this.text-32)*5/9;
      } 
    },    
  },
  methods: {
     
  },
  beforeCreate() {
        console.log('===== beforeCreate =====')
        console.log('vue 生命週期 - 實體初始化');
        console.log(`vue 生命週期 - $data(資料) : ${this.text}`);
        console.log(`vue 生命週期 - $el(元素) : ${this.$el}`, this.$el);
        
  },
  created() {
      console.log('===== created =====')
      console.log('vue 生命週期 - 實體建立完成');
      console.log(`vue 生命週期 - $data(資料) : ${this.text}`);
      console.log(`vue 生命週期 - $el(元素) : ${this.$el}`, this.$el);
      
  },
  beforeMount() {
      console.log('===== beforeMount =====')
      console.log('vue 生命週期 - 執行元素掛載之前');
      console.log(`vue 生命週期 - $data(資料) : ${this.text}`);
      console.log(`vue 生命週期 - $el(元素) : ${this.$el}`, this.$el);
      
  },
  mounted() {
      console.log('===== mounted =====')
      console.log('vue 生命週期 - 元素已掛載，$el被建立');
      console.log(`vue 生命週期 - $data(資料) : ${this.text}`);
      console.log(`vue 生命週期 - $el(元素) : ${this.$el}`, this.$el);
      
  },
  beforeUpdate() {
      console.log('===== beforeUpdate =====')
      console.log('vue 生命週期 - 當資料變化時被呼叫，但是還View還不會重新描繪');
      console.log(`vue 生命週期 - $data(資料) : ${this.text}`);
      console.log(`vue 生命週期 - $el(元素) : ${this.$el}`, this.$el);
  },
  updated() {
      console.log('===== updated =====')
      console.log('vue 生命週期 - DOM的更新已經完成，View被顯示在畫面上');
      console.log(`vue 生命週期 - $data(資料) : ${this.text}`);
      console.log(`vue 生命週期 - $el(元素) : ${this.$el}`, this.$el);
  },
  beforeDestroy() {
      console.log('===== beforeDestory =====')
      console.log('vue 生命週期 - 實體還可以使用未被消滅');
      console.log(`vue 生命週期 - $data(資料) : ${this.text}`);
      console.log(`vue 生命週期 - $el(元素) : ${this.$el}`, this.$el);
  },
  destroyed() {
      console.log('===== destory =====')
      console.log('vue 生命週期 - 實體銷毀無法使用。所有綁定監聽事件等皆被移除');
      console.log(`vue 生命週期 - $data(資料) : ${this.text}`);
      console.log(`vue 生命週期 - $el(元素) : ${this.$el}`, this.$el);
  },
}
</script>