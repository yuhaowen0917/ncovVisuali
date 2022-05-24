<template>
  <div class="round"></div>
</template>

<script>
  import * as echarts from "echarts";
  import axios from "axios";
  export default {
    name: "pie",
    data(){
      return{
        // 累计确诊人数 = 累计治愈人数+累计死亡人数+现有确诊人数
        // 现有确诊
        nowConfirm:'',
        // 累计确诊
        confirm:'',
        // 累计治愈
        heal:'',
        // 累计死亡
        dead:'',
        // 数据列表
        dataList:[],
      }
    },
    methods:{
      getData(){
        axios.get("https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf")
            .then(response=>{
              // console.log(response.data.data);
              let diseaseh5Shelf = response.data.data.diseaseh5Shelf;
              // 累计数据
              // console.log(diseaseh5Shelf)
              // 现有确诊
              this.nowConfirm = diseaseh5Shelf.chinaTotal.nowConfirm;
              console.log(this.nowConfirm)
              // 累计确诊
              this.confirm = diseaseh5Shelf.chinaTotal.confirm;
              // 累计治愈
              this.heal = diseaseh5Shelf.chinaTotal.heal;
              // 累计死亡
              this.dead = diseaseh5Shelf.chinaTotal.dead;
              // 数据列表
              this.dataList.push(
                  {name:"现有确诊",value:this.nowConfirm},
                  {name:"累计治愈",value:this.heal},
                  {name:"累计死亡",value:this.dead},
              )
              this.drawRound()
            })
            .catch(error=>{
              console.log(error)
            })
      },
      drawRound(){
        let myCharts = echarts.init(document.querySelector(".round"));
        let pieData = this.dataList;
        let option = {
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          tooltip: {
            trigger: 'item'
          },
          series:[
            {
              type:'pie',
              data:pieData,
            }
          ]
        };
        // 将配置项设置给echarts对象
        myCharts.setOption(option);
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>
  .round{
    width: 550px;
    /* width: 100%; */
    height: 400px;
    /* height: 50%; */
    /* border: 1px solid #be3be1; */
  }
</style>