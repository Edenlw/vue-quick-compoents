<!--
 * @Author: liuwei
 * @Date: 2020-12-30 13:26:35
 * @LastEditors: liuwei
 * @LastEditTime: 2021-01-06 10:46:01
 * @Description: file content
-->
<template>
  <div>
    {{`fjalfsdf${num}-${msg}`}}
  </div>
</template>

<script>
export default {
  name: "Test",
  props: {
    num: {
      type: Number,
      default: 0
    },
    msg: {
      type: String,
      default: "test"
    }
  },
  components: {},
  data() {
    return {

    };
  },
  mounted() {},
  methods: {
    aaa() {
      return () => { 132; };
    }
  }
};
</script>

<style lang='scss' scoped>

</style>
