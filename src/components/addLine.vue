<template>
    <div class="addData"></div>
</template>

<script>
    import axios from 'axios';
    export default{
        name:"addLine",
        data(){
            return{
                
            }
        },
        methods:{
            getData(){
                axios.get("https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=chinaDayList,chinaDayAddList,cityStatis,nowConfirmStatis,provinceCompare")
                .then(res=>{
                    console.log(res.data.data);
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