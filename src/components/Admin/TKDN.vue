<template>
    <Sidebar class="col-2 px-0" :dieuhuongProps="dieuhuong"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Thống kê điện nước'"></Header>
    <h3 class="my-5 text-center">Thống Kê Điện Nước Tiêu Thụ 3 Tháng</h3>
    <Bar :data="chartData" />
    </div>
  </template>
  
  <script>
  import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";
import ghidiennuoc from '../../services/ghidiennuoc.services';
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar, Header, Sidebar  },
    data() {
      return {      
        dieuhuong:{thongke:true},
        diennuoc:[],
        chartData:{labels:[],datasets:[]},
      }
    },
    async created(){
        await this.layTKDN();
        if(this.diennuoc.length>=3){
          this.chartData=  {
             labels: [`Tháng ${this.diennuoc[2].thang}`,`Tháng ${this.diennuoc[1].thang}`, `Tháng ${this.diennuoc[0].thang}`],
             datasets:[
               {
                 label: 'Nước (m³)',
                 backgroundColor: '#5c1ad9',
                 data: [this.diennuoc[2].tongdientieuthu,this.diennuoc[1].tongdientieuthu,this.diennuoc[0].tongdientieuthu]
               },
               {
                 label: 'Điện (kWh)',
                 backgroundColor: '#FF6961',
                 data: [this.diennuoc[2].tongdientieuthu,this.diennuoc[1].tongnuoctieuthu,this.diennuoc[0].tongnuoctieuthu]
               }
             ]
           }

        }
       
    },
    methods:{
      async layTKDN (){
        this.diennuoc= await ghidiennuoc.thongkeDN('2023');
        // console.log(this.diennuoc);
      },
      

    }
    
  }
  </script>