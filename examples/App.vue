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
import { Test } from '../lib/index';
export default {
  props: {
    list: Array,
    default: () => {}
  },
  name: "App",
  methods: {
    aaa() {


      
      let a = 3;
      let b = 5;



      if (a === b) {
        console.log(b);
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
