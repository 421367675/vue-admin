<template>
<chart :options="pie" ref="pie" auto-resize></chart>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts.vue'
//import 'echarts/lib/chart/pie'
//import 'echarts/lib/component/tooltip'


export default {
	
  data: function () {

    return {
      pie: {
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        x: 'left',
			        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
			    },
			    series: [
			        {
			            name:'访问来源',
			            type:'pie',
			            radius: ['50%', '70%'],
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '30',
			                        fontWeight: 'bold'
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },
			            data:[
			                {value:335, name:'直接访问'},
			                {value:310, name:'邮件营销'},
			                {value:234, name:'联盟广告'},
			                {value:135, name:'视频广告'},
			                {value:1548, name:'搜索引擎'}
			            ]
			        }
			    ]
			}
    }
  },
  
  mounted () {
		
		
  	//console.log(this.$refs.pie);
  	
  },
  components: { 
  	chart: ECharts
  },
}
</script>