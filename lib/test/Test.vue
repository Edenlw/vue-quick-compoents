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
  data () {
    return {

    }
  },
  mounted(){},
  methods: {

  },
}
</script>

<style lang='scss' scoped>

</style>
