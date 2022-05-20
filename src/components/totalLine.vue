<template>
    <div class="totalData"></div>
</template>

<script>
    import axios from 'axios';
    export default{
        name:"totalLine",
        data(){
            return{
                
            }
        },
        methods:{
            getData(){
                axios.get("https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf")
                .then(res=>{
                    // console.log(res.data.data);
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