<template>
  <div class="zhu"></div>
</template>

<script>
/* eslint-disable */
  import * as echarts from "echarts";
  import axios from "axios";
  export default {
    name: "Histogram",
    data(){
      return{
        // 城市名称
        cityName:[],
        // 城市患者
        cityConfirm:[],
        // 城市+累计确诊
        provList:[]
      }
    },
    created(){
      this.dataList();
            
    },
    methods:{
      dataList(){
        axios.get("https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf")
            .then(response=>{
              // console.log(response.data.data);
              let diseaseh5Shelf = response.data.data.diseaseh5Shelf;
              // console.log(diseaseh5Shelf.areaTree[0].children);
              let china = diseaseh5Shelf.areaTree[0].children;
              for (let i=0;i<china.length;i++){
                this.provList.push({
                  cityName:china[i].name,
                  // 累计确诊
                  cityConfirm:china[i].total.confirm
                })
                
              }
              this.provList.sort(
                function (a, b) {
                  return b.cityConfirm - a.cityConfirm;
                  }
              );
              this.provList.length=10;
              for(let i=0;i<this.provList.length;i++){
                this.cityName.push(this.provList[i].cityName);
                this.cityConfirm.push(this.provList[i].cityConfirm)
              }
              // console.log(this.provList)
              // 画柱状图
              this.drawLine()
            })
            .catch(error=>{
              console.log(error)
            })
      },
      drawLine(){
        let myCharts = echarts.init(document.querySelector(".zhu"));
        let xDataArr=this.cityName;
        let yDataArr=this.cityConfirm;
        // console.log(cityConfirm)
        // console.log(yDataArr)
        var option = {
          color:["#3cabf5"],
          xAxis:{
            type:'category',
            data:xDataArr,
            // type: 'value',
            // 紧挨边缘
            // boundaryGap:false,
          },
          yAxis:{
            type: 'value',
            // type:'category',
            // data:xDataArr,
            // 缩放，脱离0值比例
            scale:true,
            // data: ['10k', '20k', '30k', '40k', '50k', '60k', '70k'],
            axisLabel: {
              show: true,
              // color: 'green',
              // fontSize: 12,
              formatter: function (value) {
                if (value >= 1000) {
                  value = value / 10000 + 'w';
                }
                return value;
              }
            },
          },
          tooltip:{
            // 触发类型 trigger
            trigger: 'axis',
          },
          series:[
            {
              name:'累计确诊',
              // 柱状图:bar
              type:"bar",
              // label:{
							// show:true,
							// // 数值显示在顶部 top
							// position:'top',
						  // },
						  // barWidth:'30%',
              data:yDataArr,
            }
          ],
        }
        // 将配置项设置给echarts对象
        myCharts.setOption(option);
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .zhu{
    width: 700px;
    height: 400px;
    border: 1px solid #3cabf5;
  }
</style>