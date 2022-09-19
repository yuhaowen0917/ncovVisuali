<template>
    <!-- 数据新增变化折线图-->
    <div class="addData"></div>
</template>

<script>
    import * as echarts from "echarts";
    import axios from 'axios';
    export default{
        name:"addLine",
        data(){
            return{
                dayAddList:[]
            }
        },
        methods:{
            getData(){
                axios.get("https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=chinaDayList,chinaDayAddList,cityStatis,nowConfirmStatis,provinceCompare")
                .then(res=>{
                    // console.log(res.data.data);
                    let chinaDayAddList = res.data.data.chinaDayAddList;
                    // console.log(chinaDayAddList)
                    for (let i=0;i<chinaDayAddList.length;i++){
                        this.dayAddList.push({
                            date:chinaDayAddList[i].date,
                            deadAdd:chinaDayAddList[i].dead,
                            healAdd:chinaDayAddList[i].heal,
                            // 确诊总人数增加
                            confirmAdd:chinaDayAddList[i].confirm,
                            // 境外输入增加
                            importedCaseAdd:chinaDayAddList[i].importedCase,
                        })
                    }
                    // 取近30天的数据
                    this.dayAddList.splice(0,30);
                    // console.log(this.dayAddList);
                    this.leftAdd()

                })
                .catch(error=>{
                    console.log(error)
                })
            },
            leftAdd(){
              let myCharts = echarts.init(document.querySelector(".addData"));
              window.addEventListener("resize", function () {
                myCharts.resize();
              });
                let xDataArr=[];
                var yDataArr1=[];
                var yDataArr2=[];
                var yDataArr3=[];
                var yDataArr4=[];

                for(let i = 0;i<this.dayAddList.length;i++){
                    xDataArr.push(this.dayAddList[i].date);
                    yDataArr1.push(this.dayAddList[i].confirmAdd);
                    yDataArr2.push(this.dayAddList[i].importedCaseAdd);
                    yDataArr3.push(this.dayAddList[i].deadAdd);
                    yDataArr4.push(this.dayAddList[i].healAdd);

                }
			          var option = {
                    legend:{
                        data:['新增确诊','境外输入','死亡增加','治愈增加']
                    },
                    xAxis:{
                        type:'category',
                        data:xDataArr,
                        // 紧挨边缘
					              boundaryGap:false,
                    },
                    yAxis:{
                        type: 'value',
                        axisLabel: {
                            show: true,
                            formatter: function (value) {
                                if (value) {
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
                            name:'新增确诊',
                            type:"line",
                            smooth: true,
                            data:yDataArr1,
                        },
                        {
                            name:'境外输入',
                            type:"line",
                            smooth: true,
                            data:yDataArr2,
                        },
                        {
                            name:'死亡增加',
                            type:"line",
                            smooth: true,
                            data:yDataArr3,
                        },
                        {
                            name:'治愈增加',
                            type:"line",
                            smooth: true,
                            data:yDataArr4,
                        }
                    ],
                }
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
    .addData{
        /*width: 550px;*/
         width: 100%;
        height: 400px;
        /* height: 50%; */
        background-color: #2cebb8ab;
    }
</style>
