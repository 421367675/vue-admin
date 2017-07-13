<template>
<chart :options="areaStack" ref="areaStack" auto-resize id="areaStack"></chart>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts.vue'

export default {
	
  data: function () {

    return {
      areaStack: {
      		color: ['#3398DB'],
		    title: {
		        text: '2017销售数据(年度)',
		        subtext: '此数据为虚构',
		        right:'3%'
		    },
		    tooltip : {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'cross',
		            label: {
		                backgroundColor: '#6a7985'
		            }
		        }
		    },
		    legend: {
		        data:['订单','店铺','销售额'],
		        left:'3%'
		        
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'订单',
		            type:'line',
		            symbol:'emptyCircle',
		            symbolSize :5,
		            smooth: true,
		            lineStyle:{
		            	normal:{
		            		color:'#FF4949'
		            	}
		            },
		            areaStyle: {
		            	normal: {
		            		color:'#D3DCE6'
		            	}
		            },
		            data:[1120, 1032, 301, 134, 90, 630, 120,54,300,200,500,100,0]
		        },
		        {
		            name:'销售额',
		            type:'bar',
		            smooth: true,
		            lineStyle:{
		            	normal:{
		            		color:'#20A0FF'
		            	}
		            },
		            areaStyle: {
		            	normal: {
		            		color:'#20A0FF'
		            	}
		            },
		            data:[20, 300, 191, 734, 290, 430, 1000,100,400,300,800,120]
		        },
		        {
		            name:'店铺',
		            type:'line',
		            smooth: true,
		            lineStyle:{
		            	normal:{
		            		color:'#F7BA2A'
		            	}
		            },
		            areaStyle: {
		            	normal: {
		            		color:'#F7BA2A',
		            		opacity:0
		            	}
		            },
		            data:[500, 700, 501, 154, 190, 330, 50,520,731,502,165,0]
		        }
		    ]
		}		   
    }
  },
  mounted () {
  	
	let areaStack = this.$refs.areaStack;
	let timeInterval = setInterval(()=>{
		if( document.getElementById('areaStack').scrollWidth > 0 ){ 
			clearInterval( timeInterval );
			areaStack.hideLoading();
          	areaStack.resize();
		}
	},100)
	areaStack.showLoading({
        text: 'loading...',
        color: '#324157',
        maskColor: 'rgba(229, 233, 242, 0.9)'
     })	
     
 },
  components: { 
  	chart: ECharts
  },
}
</script>