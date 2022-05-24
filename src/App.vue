<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <div class="overall">
    <div>
      <addLine></addLine>
      <totalLine></totalLine>
    </div>
    <div>
      <topdataWrap></topdataWrap>
      <div class="map"></div>
    </div>
    <div>
      <Histogram></Histogram>
      <pie></pie>
    </div>
  </div>
  
  
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
.overall{
  display: flex;
  /* width: 1400px; */
  /* height: 800px; */
}
/* .overall>div{
  width: 33.33%;
} */
</style>
