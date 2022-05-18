<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <Histogram></Histogram>
  <topdataWrap></topdataWrap>
  <addLine></addLine>
  <totalLine></totalLine>
</template>

<script>
/* eslint-disable */
  import Histogram from "@/components/Histogram";
  import topdataWrap from "@/components/topdataWrap";
  import addLine from "@/components/addLine";
  import totalLine from "@/components/totalLine";
  export default {
    name: 'App',
    data(){
      return {
      }
    },
    components: {
      Histogram,
      topdataWrap,
      addLine,
      totalLine
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
