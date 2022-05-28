<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <div class="overall container-fluid">
    <div class="row">
      <div class="col-lg-4 col-sm-12">
        <addLine></addLine>
        <totalLine></totalLine>
      </div>
      <div class="col-lg-4 col-sm-12">
        <topdataWrap></topdataWrap>
        <div class="map"></div>
      </div>
      <div class="col-lg-4 col-sm-12">
        <Histogram></Histogram>
        <pie></pie>
      </div>
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
  /*display: flex;*/
  width: 100%;
  /*overflow: hidden;*/
   /*height: 1000px;*/
}
.map{
  width: 100%;
  height: 300px;
  background-color: #ec6060;
}
</style>
