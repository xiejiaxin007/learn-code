
## 虚拟Table 表格
数据量大，需要虚拟DOM渲染的表格，单元格每行高度可以不固定但是要一样；

### 虚拟Dom滑动

数据量大时，可以使用虚拟Dom，示例中有表单验证的写法

:::demo 只要在`el-table`元素中定义了`scrollDom`属性为true，`showNum`属性为5，scrollIndex有sync，如果不滚动验证不要设置，否则滚动无效，会一直定位在第0行。含有表单的表格删除时，最好添加v-if=tableForm.tableData[curIndex + scope.$index]

```html
<template>
  <el-button type="primary" size="small" @click="validateForm">校验表单</el-button>
  <el-form :model="tableForm" ref="tableForm" class="table-form" size="small">
    <el-virtual-table
      :data="tableForm.tableData"
      border
      :scrollDom="true"
      :showNum="showNum"
      :scrollIndex.sync="scrollIndex"
      @getCurIndex="getCurIndex"
      v-loading="loading"
      element-loading-background="#fff"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="80">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="100">
      </el-table-column>
      <el-table-column
        label="姓名"
        width="100">
        <template slot-scope="scope" v-if="tableForm.tableData[curIndex + scope.$index]">
          <el-form-item :prop="'tableData.' + (curIndex + scope.$index)  + '.name'"
          style="margin-bottom: 0;"
          :rules="{
            required: true, message: '姓名不能为空', trigger: 'blur'
          }">
            <el-input v-model="tableForm.tableData[curIndex + scope.$index].name" size="small" />
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column
        label="年龄"
        width="100">
        <template slot-scope="scope" v-if="tableForm.tableData[curIndex + scope.$index]">
          <el-form-item :prop="'tableData.' + (curIndex + scope.$index)  + '.age'"
          style="margin-bottom: 0;"
          :rules="{
            required: true, message: '年龄不能为空', trigger: 'blur'
          }">
            <el-input v-model="tableForm.tableData[curIndex + scope.$index].age" size="small" />
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column
        label="性别"
        width="100">
        <template slot-scope="scope" v-if="tableForm.tableData[curIndex + scope.$index]">
          <el-form-item :prop="'tableData.' + (curIndex + scope.$index)  + '.sex'"
          style="margin-bottom: 0;"
          :rules="{
            required: true, message: '性别不能为空', trigger: 'change'
          }">
            <el-select v-model="tableForm.tableData[curIndex + scope.$index].sex" placeholder="请选择性别">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="text" size="small" @click="del(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-virtual-table>
  </el-form>
</template>

<script>
  let obj = {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  };
  let arr = [];
  for (let i = 0; i < 522; i++) {
    arr.push({
      ...obj,
      id: i,
      sex: '男',
      age:'1'
    })
  }
  arr[2].age = '';
  arr[7].age = '';
  arr[16].age = '';
  arr[26].age = '';
  arr[56].age = '';
  arr[234].age = '';
  arr[420].age = '';
  export default {
    data() {
      return {
        curIndex: 0,
        tableForm: {
          tableData: []
        },
        // 展示5条
        showNum: 5,
        // 当前滚动位置，和curIndex类似
        scrollIndex: 0,
        loading: false
      }
    },
    mounted() {
      // 异步赋值多选
      setTimeout(()=>{
        this.tableForm.tableData = arr;
      },1000)
    },
    methods: {
      edit(id) {
        this.$message.warning('正在编辑第' + id + '条；');
      },
      // 获取滚动数据，第一条的实际index
      getCurIndex(index) {
        this.curIndex = index;
        this.$nextTick(()=>{
          this.$refs['tableForm'].clearValidate();
        })
      },
      validateForm() {
        this.loading = true;
        // 每次从第一条开始校验（无法确定前面是否改好）
        this.scrollIndex = 0;
        this.$nextTick(()=>{
          this.validateAll();
        })
      },
      validateAll() {
        // console.log('校验第', this.scrollIndex);
        setTimeout(() => {
          this.$refs['tableForm'].validate((valid) => {
            if (valid) {
              let listLen = this.tableForm.tableData.length;
              if (this.scrollIndex + this.showNum <= listLen) {
                // 如果校验不是最后一页，就定位继续校验
                this.scrollIndex = this.scrollIndex + this.showNum;
                this.$nextTick(()=>{
                  this.validateAll();
                })
              } else {
                // 最后一页，校验通过
                this.loading = false;
                this.validateSuccess();
              }
            } else {
              console.warn('表单校验失败');
              this.loading = false;
              return false;
            }
          });
          // 组件类使用节流时间是50，这里至少大于50
        }, 51);
      },
      // 表单校验通过
      validateSuccess() {
        console.log('表单校验通过');
      },
      del(index) {
        console.log(index, this.curIndex);
        console.log(this.tableForm.tableData);
        index += this.curIndex;
        // 向上滑动一位
        this.scrollIndex = this.curIndex - 1;
        this.tableForm.tableData.splice(index, 1);
        this.$nextTick(()=>{
          this.$refs.tableForm.resetFields();
        })
      }
    }
  }
</script>
```

:::

### 虚拟Dom滑动--多选

配置和使用和el-table一样

:::demo 
```html
<template>
  <el-button type="primary" size="small" @click="add">新增</el-button>
  <el-button type="primary" size="small" @click="change(3)">3条数据</el-button>
  <el-button type="primary" size="small" @click="change(50)">50条数据</el-button>
  <el-button type="primary" size="small" @click="change(0)">0条数据</el-button>
  <el-form :model="tableForm" ref="tableForm" class="table-form" size="small">
    <el-virtual-table
      :data="tableForm.tableData"
      border
      :scrollDom="true"
      :showNum="showNum"
      v-loading="loading"
      @getCurIndex="getCurIndex"
      :scrollIndex.sync="scrollIndex"
      element-loading-background="#fff"
      @selection-change="handleSelectionChange"
      style="width: 100%">
      <el-table-column type="selection"
        width="40">
      </el-table-column>
      <el-table-column
        prop="id"
        label="ID"
        width="80">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="100">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="130">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row.id)">编辑{{scope.row.id}}</el-button>
          <el-button type="text" size="small" @click="del(scope.$index)">删除{{scope.row.id}}</el-button>
        </template>
      </el-table-column>
    </el-virtual-table>
  </el-form>
</template>

<script>
  let obj = {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  };
  export default {
    data() {
      return {
        tableForm: {
          tableData: []
        },
        // 展示5条
        showNum: 5,
        loading: false,
        curIndex: 0,
        // 当前滚动位置，和curIndex类似
        scrollIndex: 0,
        count: 12,
      }
    },
    mounted() {
      let arr = [];
      for (let i = 0; i < this.count; i++) {
        arr.push({
          ...obj,
          id: i,
          sex: '男',
          age:'1'
        })
      }
      // 异步赋值多选
      setTimeout(()=>{
        this.tableForm.tableData = arr;
      },1000)
    },
    methods: {
      // 获取滚动数据，第一条的实际index
      getCurIndex(index) {
        this.curIndex = index;
      },
      edit(id) {
        this.$message.warning('正在编辑第' + id + '条；');
      },
      add() {
        this.tableForm.tableData.push({
          ...obj,
          id: this.count,
          sex: '男',
          age:'1'
        })
        this.count++;
      },
      del(index) {
        index += this.curIndex;
        // 向上滑动一位
        this.scrollIndex = this.curIndex - 1;
        this.tableForm.tableData.splice(index, 1);
      },
      handleSelectionChange(val) {
        console.log(val);
      },
      change(num) {
        let arr = [];
        if (num > 0) {
          for (let i = 0; i < num; i++) {
            arr.push({
              ...obj,
              id: i,
              sex: '男',
              age:'1'
            })
          }
        }
        this.tableForm.tableData = arr;
        this.showNum = num > 5 ? 5 : num;
        this.scrollIndex = 0;
        this.count = num;
      }
    }
  }
</script>
```

:::


### 虚拟Dom滑动--测试弹窗

配置和el-table一样

:::demo 
```html
<template>
  <el-button type="primary" size="small" @click="showDialog">点击展开</el-button>
   <el-dialog :visible="dialogVisible"
      @close="dialogVisible = false"
      width="900px"
      :close-on-click-modal="false"
      center>
    <el-virtual-table
      :data="tableForm.tableData"
      border
      :scrollDom="true"
      :showNum="showNum"
      @getCurIndex="getCurIndex"
      :scrollIndex.sync="scrollIndex"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="80">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="100">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-virtual-table>
  </el-dialog>
</template>

<script>
  let obj = {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄'
  };
  export default {
    data() {
      return {
        tableForm: {
          tableData: []
        },
        // 展示5条
        showNum: 5,
        loading: false,
        curIndex: 0,
        // 当前滚动位置，和curIndex类似
        scrollIndex: 0,
        dialogVisible: false
      }
    },
    mounted() {
      // 异步赋值多选
    },
    methods: {
      // 获取滚动数据，第一条的实际index
      getCurIndex(index) {
        this.curIndex = index;
      },
      edit(id) {
        this.$message.warning('正在编辑第' + id + '条；');
      },
      showDialog() {
        this.dialogVisible = true;
        this.scrollIndex = 0;
          this.tableForm.tableData = [];
          for (let i = 0; i < 12; i++) {
            this.tableForm.tableData.push({
              ...obj,
              id: i,
              sex: '男',
              age:'1'
            })
          }
      }
    }
  }
</script>
```
