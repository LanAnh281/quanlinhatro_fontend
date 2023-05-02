<template>
    <Sidebar class="col-2 px-0" :dieuhuongProps="dieuhuong"></Sidebar>
    <div class="col-10 px-2">
      <Header :silderProps="'Thống kê tiền trọ'"></Header>
      <h4 class="text-center mt-3 mb-4">Thông kê số lượng khách trọ đã thanh toán tiền trọ và chưa thanh toán tiền trọ</h4>
      <div class="row ">
        <Bar :data="chartData"  class="col-12" />
        
      </div>
      

      
    </div>
  </template>
  
  <script>
  import Header from "./Header.vue";
  import Sidebar from "./sidebar.vue";
  import hoadonServices from "../../services/hoadon.services";

  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  

  export default {
    name: "TienTro",
    name: 'BarChart',
    components: { Bar, Header, Sidebar  },
    data() {
      return {
        dieuhuong:{thongke:true},
        chartData:{labels:[],datasets:[]},
        chuathanhtoan:[],
        dathanhtoan:[],
      };
    },
    async created() {
        await this.layhoadon();
        this.chartData=  {
             labels: ['Đã thanh toán','chưa thanh toán'],
             maintainAspectRatio:false,
             datasets:[
               {
                 label: 'số lượng người',
                 backgroundColor: '#5c1ad9',
              
                 
                 data: [this.dathanhtoan.length,this.chuathanhtoan.length]
               },
               
             ]
           }
    },
    methods: {
        async layhoadon (){
            let hoadon= await hoadonServices.layDSHD();
            this.dathanhtoan= hoadon.filter((hd)=>hd.trangthai==='Đã thanh toán');
            this.chuathanhtoan=hoadon.filter((hd)=>hd.trangthai==='chưa thanh toán');
            // console.log("Đã thanh toán", this.dathanhtoan);
            // console.log("chưa thanh toán", this.chuathanhtoan);
        }
    }
      
     
  };
  </script>
  
  <style scoped>
  .style {
    padding: 1px;
    width: 16px;
    color: white;
    border-radius: 15px;
  }
  
  .info {
    background-color: rgb(93, 42, 245);
  }
  
  .trash {
    color: red;
  }
  </style>
  