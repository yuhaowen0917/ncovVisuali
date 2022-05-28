<template>
    <div class="totalData"></div>
</template>

<script>
    import * as echarts from "echarts";
    import axios from 'axios';
    export default{
        name:"totalLine",
        data(){
            return{
                dayList:[]
            }
        },
        methods:{
            getData(){
                axios.get("https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=chinaDayList,chinaDayAddList,cityStatis,nowConfirmStatis,provinceCompare")
                .then(res=>{
                    // console.log(res.data.data);
                    let chinaDayList = res.data.data.chinaDayList;
                    // console.log(chinaDayAddList)
                    for (let i=0;i<chinaDayList.length;i++){
                        this.dayList.push({
                            date:chinaDayList[i].date,
                            deadTotal:chinaDayList[i].dead,
                            healTotal:chinaDayList[i].heal,
                            // 确诊总人数增加
                            confirmTotal:chinaDayList[i].confirm,
                            // 境外输入增加
                            importedCaseTotal:chinaDayList[i].importedCase,
                        })
                    }
                    // 取近30天的数据
                    this.dayList.splice(0,30);
                    // console.log(this.dayAddList);
                    this.leftAdd()

                })
                .catch(error=>{
                    console.log(error)
                })
            },
            leftAdd(){
                let myCharts = echarts.init(document.querySelector(".totalData"));
                var xDataArr=[];
                var yDataArr1=[];
                var yDataArr2=[];
                var yDataArr3=[];
                var yDataArr4=[];

                for(let i = 0;i<this.dayList.length;i++){
                    xDataArr.push(this.dayList[i].date);
                    yDataArr1.push(this.dayList[i].confirmTotal);
                    yDataArr2.push(this.dayList[i].importedCaseTotal);
                    yDataArr3.push(this.dayList[i].deadTotal);
                    yDataArr4.push(this.dayList[i].healTotal);

                }

              // eslint-disable-next-line no-mixed-spaces-and-tabs
			        var option = {
                    legend:{
                        data:['累计确诊','境外输入','累计死亡','累计治愈']
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
                            // color: 'green',
                            // fontSize: 12,
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
                            name:'累计确诊',
                            type:"line",
                            data:yDataArr1,
                        },
                        {
                            name:'境外输入',
                            type:"line",
                            data:yDataArr2,
                        },
                        {
                            name:'累计死亡',
                            type:"line",
                            data:yDataArr3,
                        },
                        {
                            name:'累计治愈',
                            type:"line",
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
    .totalData{
        /*width: 550px;*/
         width: 100%;
        height: 400px;
        /* height: 50%; */
        background-color: #e29458b9;
    }
</style>