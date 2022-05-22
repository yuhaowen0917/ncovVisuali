<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <Histogram></Histogram>
  <topdataWrap></topdataWrap>
  <addLine></addLine>
  <totalLine></totalLine>
  <pie></pie>
</template>

<script>
/* eslint-disable */
  import Histogram from "@/components/Histogram";
  import topdataWrap from "@/components/topdataWrap";
  import addLine from "@/components/addLine";
  import totalLine from "@/components/totalLine";
  import pie from "@/components/pie";
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
      totalLine,
      pie
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
