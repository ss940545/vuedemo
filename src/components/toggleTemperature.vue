<template>
  <div>
      <input type="checkbox" v-model="isCelsius">
      <label >切換：{{ toggleTemperature }}</label>

       <!-- v-if 條件不成立的區域，不會存在瀏覽器上 --> 
       <br>
       <div v-if="!isCelsius">
          華氏：<input type="text"  v-model="textFtoC" >
          攝氏：{{ celsius }}
       </div>
       <div v-if="isCelsius">
          攝氏：<input type="text" v-model="textCtoF" >
          華氏：{{fahrenheit}}
       </div>
      
      <h2>v-show</h2>
        <!-- v-show ，會存在瀏覽器上 --> 
       <div v-show="!isCelsius">
          華氏：<input type="text"  v-model="textFtoC" >
          攝氏：{{ celsius }}
       </div>
       <div v-show="isCelsius">
          攝氏：<input type="text" v-model="textCtoF" >
          華氏：{{fahrenheit}}
       </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCelsius: false,
      textFtoC:'',
      change:true,
      textCtoF:''
    }
  },
  computed: {
    celsius(){
      if(this.textFtoC ===''){
        return this.textFtoC;
      }else{
        return (this.textFtoC)*5/9+32;
      }
    },
    toggleTemperature () {
      return this.isCelsius ? "攝氏 轉換 華氏" : "華氏 轉換 攝氏";
      
    },
    fahrenheit(){
      if(this.textCtoF ===''){
        return this.textCtoF;
      }else{
        return (this.textCtoF-32)*5/9;
      }
    }

  },

}
</script>