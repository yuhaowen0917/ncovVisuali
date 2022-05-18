<template>
    <div class="recentNumber">
        <div class="content">
            <div v-for="(da,index) in dataList" :key="index" class="num">
                <div class="desc">{{da.desc}}</div>
                <div class="total">{{da.total}}</div>
                <div class="add">
                    <span>较昨日</span>
                    {{da.add}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default{
        name: "topdataWrap",
        data(){
            return{
                // 本土现有确诊
                localConfirm:'',
                // 现有确诊
                nowConfirm:'',
                // 累计确诊
                confirm:'',
                // 无症状感染者
                noInfect:'',
                // 境外输入
                importedCase:'',
                // 累计治愈
                heal:'',
                // 累计死亡
                dead:'',
                // 数据列表
                dataList:[],
                // 数据增加列表
                // addList:[],
            }
        },
        methods:{
            // 获取数据
            getData(){
                axios.get("https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf")
                    .then(response=>{
                        // console.log(response.data.data);
                        let diseaseh5Shelf = response.data.data.diseaseh5Shelf;
                        // 累计数据
                        // console.log(diseaseh5Shelf)
                        // 本土现有确诊
                        this.localConfirm = diseaseh5Shelf.chinaTotal.localConfirm;
                        // 现有确诊
                        this.nowConfirm = diseaseh5Shelf.chinaTotal.nowConfirm;
                        // 累计确诊
                        this.confirm = diseaseh5Shelf.chinaTotal.confirm;
                        // 无症状感染者
                        this.noInfect = diseaseh5Shelf.chinaTotal.noInfect;
                        // 境外输入
                        this.importedCase = diseaseh5Shelf.chinaTotal.importedCase;
                        // 累计治愈
                        this.heal = diseaseh5Shelf.chinaTotal.heal;
                        // 累计死亡
                        this.dead = diseaseh5Shelf.chinaTotal.dead;
                        // 数据列表
                        this.dataList.push(
                            {
                                total:this.localConfirm,
                                add:diseaseh5Shelf.chinaAdd.localConfirmH5,
                                desc:'本土确诊'
                            },
                            {
                                total:this.nowConfirm,
                                add:diseaseh5Shelf.chinaAdd.nowConfirm,
                                desc:"现有确诊"
                            },
                            {
                                total:this.confirm,
                                add:diseaseh5Shelf.chinaAdd.confirm,
                                desc:"累计确诊"
                            },
                            {
                                total:this.noInfect,
                                add:diseaseh5Shelf.chinaAdd.noInfect,
                                desc:"无症状感染者"
                            },
                            {
                                total:this.importedCase,
                                add:diseaseh5Shelf.chinaAdd.importedCase,
                                desc:"境外输入患者"
                            },
                            {
                                total:this.heal,
                                add:diseaseh5Shelf.chinaAdd.heal,
                                desc:"治愈人数"
                            },
                            {
                                total:this.dead,
                                add:diseaseh5Shelf.chinaAdd.dead,
                                desc:"累计死亡"
                            },

                        )
                        // console.log(diseaseh5Shelf.chinaAdd)
                    
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
    .recentNumber{
        width: 700px;
        height: 300px;
        background-color: #a1afc9;
    }
    .content{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .num{
        display: flex;
        width: 25%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 15px 0px;
    }
    .desc{
        font-weight: 800;
        font-size: 20px;
        line-height: 30px;
    }
    .total{
        font-weight: 800;
        font-size: 25px;
        /* line-height: 45px; */
        margin: 8px auto;
    }
    .add{
        font-size: 17px;
        color: #707070;
    }
</style>