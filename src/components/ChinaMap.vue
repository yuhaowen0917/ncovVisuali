<template>
  <div class="map">

  </div>

</template>

<script>
// import axios from "axios";
import * as echarts from "echarts";
// eslint-disable-next-line no-unused-vars
import chinaJson from "../echarts/map/china"
export default {
  name: "ChinaMap",
  data(){
    return{}
  },
  methods:{
    getMap(){
      let myCharts = echarts.init(document.querySelector(".map"));
      echarts.registerMap('chinaMap',chinaJson);
      window.addEventListener("resize", function () {
        myCharts.resize();
      });
      let option = {
        // 配置 geo 的 type:'map'
        geo:{
          type:'map',
          map:'chinaMap',
          // 'chinaMap' 需要和 registerMap 中第一个参数保持一致
          // 设置允许缩放和拖动的效果
          // roam:true,
          // 名称显示
          label:{
            show:true,
          },
          // 初始化缩放比例
          zoom:1.3,
          // 地图中心点更改
          // center:[],
        }
      };
      myCharts.setOption(option);
    }
  },
  mounted() {
    this.getMap()
  }
}
</script>

<style scoped>
.map{
  width: 100%;
  height: 55%;
  background-color: #efa6a6;
}
</style>
