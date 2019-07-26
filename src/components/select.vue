<template>
 <div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  
    <el-form-item label="單一帳號" prop="id">
      <el-input v-model="ruleForm.id"></el-input>
    </el-form-item>
      

    <el-form-item>
     <el-button type="primary" @click="submitForm('ruleForm')">立即查詢</el-button>
     <el-button type="primary" @click="submitAllForm('ruleForm')">查詢全部</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>

    <el-form-item>
        <showData :list="listdata" :operate="operatePage"></showData>
    </el-form-item>
  </el-form>
  
 </div>
</template>


<script>
import showData from '../components/showTable';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    let checkId=(rule, value, callback)=>{
      if (!value.replace(/[^\a-\z\A-\Z0-9]/g,'')){
        callback (new Error('只能是英文或數字'));
        }else {
        callback();
      }
    }   
    return {
      operatePage:false,
      ruleForm: {
        id: '',
      },
      rules: {
        id: [
          { required: true, message: '请输入帳號', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
          { validator: checkId, trigger: 'blur' }
        ],
        
      }
    };
  },
  components: {
    showData
  },
  computed: {
    ...mapGetters({
      listdata: 'getData',
    }),
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          this.btnSelect();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    btnSelect(){
      this.$store.dispatch("selectOneData", {
        id: this.ruleForm.id,
      });
    },
    submitAllForm(){ 
      this.ruleForm.id='';
      this.$store.dispatch('selectData');
    }
  },
  mounted() {
    console.log('===== mounted =====')
    this.$store.dispatch('selectData');
  },
};
</script>

<style>

</style>