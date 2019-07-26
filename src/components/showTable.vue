<template>
  <div>
    <el-table :data="list" stripe style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180">    
      </el-table-column>
      <el-table-column prop="account" label="帳號" width="180">
      </el-table-column>
      <el-table-column prop="psw" label="密碼" width="180"></el-table-column>
      <el-table-column prop="phone" label="手機" width="180"></el-table-column>

      <el-table-column label="操作" v-if="operate">
      <template slot-scope="scope">
        <el-button v-if="edit" size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑
        </el-button>
        <el-button v-if="del"  size="mini" type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除
        </el-button>
      </template>
      
    </el-table-column>

    </el-table>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array ,
      },
      edit:{
        tyep: Boolean,
      },
      del:{
        type: Boolean,
      },
      operate:{
        type: Boolean,
      }
    },
    data() {
      return {
        newData: null,
        delData: null,
      }
    },
    methods: {
      handleEdit(index, row) {
        this.newData = {
          "id": row.account,
          "psw": row.psw,
          "name": row.name,
          "phone":row.phone,
        }
        this.$emit('childByValue', this.newData);
      },
      handleDelete(index, row) {
        this.delData = {
          "id": row.account,
          "psw": row.psw,
          "name": row.name,
          "phone":row.phone,
        }
        this.$emit('childDelValue', this.delData);
      }
    }
  }
</script>