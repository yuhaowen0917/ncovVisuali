<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <Histogram></Histogram>
  <topdataWrap></topdataWrap>
</template>

<script>
/* eslint-disable */
  import axios from 'axios'
  import * as echarts from 'echarts'
  import Histogram from "@/components/Histogram";
  import topdataWrap from "@/components/topdataWrap";
  export default {
    name: 'App',
    data(){
      return {
      }
    },
    components: {
      Histogram,
      topdataWrap
    },
    methods:{

    },
    // components: {
    // },
    mounted() {
        // console.log("1");


    }

  }
</script>

<style>
</style>
