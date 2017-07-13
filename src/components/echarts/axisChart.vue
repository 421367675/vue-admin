<template>
	<div class="axisCharts" ref="axiseCharts" id="axiseCharts" v-loading="fullScreenShow" element-loading-text="loading..."></div>
</template>

<script>
import Echarts from 'echarts';
import {mapGetters } from 'vuex'

export default {
	
  data(){
    let data = []

    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }

    return {
    	echarts : null ,
    	fullScreenShow : true,
      echartOption: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      }
    }
  },
  
  computed :{
  	 ...mapGetters({ globalTimer : 'echartloadingTime'})
  },
  
  methods:{
  	
  	getSize(){
  		let elemntChart = this.$refs.axiseCharts;
  		return{
  			x : Math.max( elemntChart.clientWidth, elemntChart.scrollWidth ) ,
  			y : Math.max( elemntChart.clientHeight, elemntChart.scrollHeight ),
  			chart : elemntChart
  		}
  	},
  	
  	reSize(){
  		
  		//检测echarts是否在DOM上已经注册过
  		if( this.echarts ){
  				this.echarts.dispose();
  		}
			this.setSize();
  		this.echarts = Echarts.init( this.$refs.axiseCharts );
  		this.echarts.setOption( this.echartOption );
  	},
  	
  	setSize(){
	  		let chartsSize = this.getSize();
	  		chartsSize.chart.style.width = chartsSize.x + 'px';
	  		chartsSize.chart.style.height = chartsSize.y + 'px';
  	},
  	
  	initApps(){
  		
	  		let globalTimer = setTimeout(() =>{
						this.fullScreenShow = false;
	  				this.reSize();	
	  		}, this.globalTimer )
	  		
	  		window.addEventListener('resize', () =>{
					 this.reSize();
	  			 this.echarts.resize();
	  		});
	  			
  	}
  	
  },
  
  mounted(){
	
  	this.$nextTick(()=>{
  		
  		this.initApps()
  		
  	})
  }
}
</script>
<style scoped lang="scss">
.axisCharts{
	height: 100%;
	width: 100%;
}
</style>