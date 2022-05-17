<template>
  <div class="qwe"></div>
</template>

<script>
/* eslint-disable */
  import * as echarts from "echarts";
  import axios from "axios";
  export default {
    name: "Test",
    data(){
      return{
        // 全国累计确诊人数
        num:'',
        // 城市名称
        cityName:[],
        // 城市患者
        cityConfirm:[],
        count:[],
        provList:[]
      }
    },
    created(){
            
    },
    methods:{
      dataList(){
        
        axios.get("https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf")
            .then(response=>{
              // console.log(response.data.data);
              // 各个等级城市详情
              // console.log(response.data.data.statisGradeCityDetail);
              let diseaseh5Shelf = response.data.data.diseaseh5Shelf;
              // console.log(diseaseh5Shelf.chinaTotal.confirm)
              this.num = diseaseh5Shelf.chinaTotal.confirm;
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
              console.log(this.provList)
              // 画柱状图
              this.drawLine()

              // let statisGradeCityDetail = response.data.data.statisGradeCityDetail;
              // // console.log(statisGradeCityDetail);
              // for (let i=0;i<statisGradeCityDetail.length;i++){
              //   // count.push({
              //   //   city:statisGradeCityDetail[i].city,
              //   //   province:statisGradeCityDetail[i].province,
              //   //   //  confirm 累计确证 confirmAdd 新增确诊 heal 治愈 dead 死亡 nowConfirm 目前确认
              //   // })
              //   this.count.push(statisGradeCityDetail[i].city)
              // }
              // console.log(this.count)
              
            })
            .catch(error=>{
              console.log(error)
            })
      },
      drawLine(){
        let myCharts = echarts.init(document.querySelector(".qwe"));
        let xDataArr=this.cityName;
        let yDataArr=this.cityConfirm;
        // console.log(cityConfirm)
        // console.log(yDataArr)
        var option = {
          xAxis:{
            type:'category',
            data:xDataArr,
            // type: 'value',
            // 紧挨边缘
            boundaryGap:false,
          },
          yAxis:{
            type: 'value',
            // type:'category',
            // data:xDataArr,
            // 缩放，脱离0值比例
            scale:true,
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
              label:{
							show:true,
							// 数值显示在顶部 top
							position:'top',
						  },
						  barWidth:'30%',
              data:yDataArr,
            }
          ],
        }
        // 将配置项设置给echarts对象
        myCharts.setOption(option);
      }
    },
    mounted() {
      this.dataList();
    }
  }
</script>

<style scoped>
  .qwe{
    width: 800px;
    height: 500px;
    border: 1px solid #f53c66;
  }
</style>