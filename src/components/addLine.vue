<template>
    <!-- 
        数据新增变化折线图
     -->
    <div class="addData"></div>
</template>

<script>
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
                    };
                    // 取近30天的数据
                    this.dayAddList.splice(0,30)
                    console.log(this.dayAddList)
                })
                .catch(error=>{
                    console.log(error)
                })
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped>
</style>