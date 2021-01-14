<!--
 * @Author: liuwei
 * @Date: 2020-12-30 13:15:40
 * @LastEditors: liuwei
 * @LastEditTime: 2021-01-06 10:46:10
 * @Description: file content
-->
<template>
  <div id="app">
    <test />
    <div v-for="item in list" :key="item"></div>
    <img src="" alt="" />
  </div>
</template>
<script>
import { Test } from "../lib/index";
import axios from "axios";
export default {
  data() {
    return {
      list: [
        {name: 123, id: 1}
      ]
    };
  },
  name: "App",
  mounted() {
    axios.get("/mock/news").then(res => { // url即在mock.js中定义的
      console.log(res.data); // 打印一下响应数据
    });
    axios.post("/test/cityInfo", {
      name: name
    }).then(res => {
      console.log(88, res);
      if (res.data) {
        this.img = res.data.img;
      }
    });
  },
  methods: {
    aaa() {
      let a = "3";

      let b = "3";

      if (a === b) {
        console.log(123);
      }
      console.log(a, b, 123);
    }
  },
  components: {
    Test
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
