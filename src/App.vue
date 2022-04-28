<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <Test></Test>
</template>

<script>
/* eslint-disable */
  import axios from 'axios'
  import * as echarts from 'echarts'
  import Test from "@/components/Test";
  export default {
    name: 'App',
    data(){
      return {
      }
    },
    components: {
      Test
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
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
