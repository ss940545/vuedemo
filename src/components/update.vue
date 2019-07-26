<template>
 <div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  
    <el-form-item label="姓名" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="帳號" prop="id">
      <el-input v-model="ruleForm.id"></el-input>
    </el-form-item>

    <el-form-item label="密碼" prop="psw">
      <el-input v-model="ruleForm.psw"></el-input>
    </el-form-item>

    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="手機" prop="phone">
      <el-input v-model="ruleForm.phone"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>

    <el-form-item>
      <showData :list="listdata" :edit="editPage" :del="deletePage"
          :operate="operatePage"  @childByValue="editOldData"  >
      </showData>
    </el-form-item>
  </el-form>
  
 </div>
</template>


<script>
import showData from '../components/showTable';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    let checkPhone =(rule, value, callback)=>{
      
      let numberRegxp = /^09[0-9]{2}-[0-9]{6}$/; //格式需為09XX-XXXXXX
      if(numberRegxp.test(value)!= true){
          callback (new Error('格式需為09XX-XXXXXX'));
      }else {
        callback();
      }
    }
    let checkName =(rule, value, callback)=>{
      if(!value.replace(/[^\u4E00-\u9FA5]/g,'')){
          callback (new Error('只能是中文'));
      }else {
        callback();
      }
    }
    let checkId=(rule, value, callback)=>{
      if (!value.replace(/[^\a-\z\A-\Z0-9]/g,'')){
        callback (new Error('只能是英文或數字'));
        }else {
        callback();
      }
    }
    let checkPsw=(rule, value, callback)=>{
      if (!value.replace(/[^\a-\z\A-\Z0-9]/g,'')){
        callback (new Error('只能是英文或數字'));
        }else {
        callback();
      }
    }
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.psw) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    }   
    return {
      editPage: true,
      deletePage: false,
      operatePage: true,
      ruleForm: {
        name: '',
        id: '',
        phone:'',
        checkPass: '',
        psw:''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
            { validator: checkName, trigger: 'blur' }
        ],
        id: [
          { required: true, message: '请输入帳號', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
          { validator: checkId, trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手機號碼', trigger: 'blur' },
          { min: 11, max: 11, message: '格式需為09XX-XXXXXX', trigger: 'blur' },
          { validator: checkPhone, trigger: 'blur' }
        ],
        psw: [
          { required: true, message: '请输入密碼', trigger: 'blur' },
          { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' },
          { validator: checkPsw, trigger: 'blur' }
        ],
        checkPass: [
          {required: true, message: '请输入確認密碼', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ],
      }
    };
  },
  components: {
    showData,
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
          this.btnUpdate();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    btnUpdate(){
      this.$store.dispatch("updateData", {
        name: this.ruleForm.name,
        id: this.ruleForm.id,
        psw: this.ruleForm.psw,
        phone: this.ruleForm.phone,
    
      });
    },
    editOldData(val) {
      // childValue就是子组件传过来的值
      console.log('emit', val);
      this.ruleForm.name = val.name;
      this.ruleForm.id = val.id;
      this.ruleForm.psw = val.psw;
      this.ruleForm.phone = val.phone;
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