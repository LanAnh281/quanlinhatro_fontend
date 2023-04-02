<template>
    <div class="page row">
        <DSLP>

        </DSLP>
    </div>
</template>
<script>
    import DSLP from '@/components/DSLP.vue';

    export default {
        components:{
            DSLP,
        },
        data(){
            return {
            loaiphong:[],
            activeIndex: -1,
            };
        },
        watch:{

        },
        computed:{
            loaiphongStrings(){
                return this.loaiphong.map((loaiphong)=>{
                    const{tenloai,dientich,giaphong}=loaiphong;
                    retrun [tenloai,dientich,giaphong].join("");
                });
            },
        },
        
        filteredLPCount(){
            return this.
        },
    }
</script>

<style>

</style>