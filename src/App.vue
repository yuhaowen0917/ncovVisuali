<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <div class="overall container-fluid">
    <div class="row">
      <div class="col-lg-4 col-sm-12">
        <addLine></addLine>
        <totalLine></totalLine>
      </div>
      <div class="col-lg-4 col-sm-12">
        <topWrap></topWrap>
        <china></china>
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
  import topWrap from "@/components/topdataWrap";
  import addLine from "@/components/addLine";
  import totalLine from "@/components/totalLine";
  import pie from "@/components/pie";
  import china from "@/components/ChinaMap";
export default {
    name: 'App',
    data(){
      return {
      }
    },
    components: {
      Histogram,
      topWrap,
      addLine,
      totalLine,
      pie,
      china
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
  /*width: 100%;*/
  height: 100%;
}
.row>div{
  padding: 0;
}
</style>
