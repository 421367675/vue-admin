<template>
<chart :options="map" ref="map" auto-resize  id="map"></chart>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts.vue'
//import 'echarts/lib/chart/map'
//import 'echarts/lib/component/tooltip'
// built-in theme
import 'echarts/theme/dark'

// Map of China
import chinaMap from '../../assets/charts/china.json'

// registering map data
ECharts.registerMap('china', chinaMap)


// custom theme
import theme from '../../assets/charts/theme.json'
// registering custom theme
ECharts.registerTheme('dark', theme)


export default {
	
  data: function () {

    return {
	map : {
	    title: {
	        text: '全国实时销售数据(支持鼠标放大)',
	        subtext: '纯属虚构',
	        left: 'center'
	    },
	    tooltip: {
	        trigger: 'item'
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        show:false,
	        data:['今日订单','销售总额','订单数']
	    },
	    visualMap: {
	    	show:false,
	    	type: 'continuous',
	        min: 0,
	        max: 2500,
	        splitNumber:3,
	        color: ['orangered','yellow','lightskyblue'],
	        left: 'left',
	        top: 'bottom',
	        text: ['低','高'], 
	        calculable: false
	    },
	    series: [
	        {
	            name: '销售总额',
	            type: 'map',
	            mapType: 'china',
	            roam: true,
	            
	            label: {
	                normal: {
	                    show: true
	                },
	                emphasis: {
	                    show: true
	                }
	            },
	            data:[
	                {name: '北京',value: Math.round(Math.random()*1000) },
	                {name: '天津',value: Math.round(Math.random()*1000) },
	                {name: '上海',value: Math.round(Math.random()*1000) },
	                {name: '重庆',value: Math.round(Math.random()*1000) },
	                {name: '河北',value: Math.round(Math.random()*1000) },
	                {name: '河南',value: Math.round(Math.random()*1000) },
	                {name: '云南',value: Math.round(Math.random()*1000) },
	                {name: '辽宁',value: Math.round(Math.random()*1000) },
	                {name: '黑龙江',value: Math.round(Math.random()*1000) },
	                {name: '湖南',value: Math.round(Math.random()*1000) },
	                {name: '安徽',value: Math.round(Math.random()*1000) },
	                {name: '山东',value: Math.round(Math.random()*1000) },
	                {name: '新疆',value: Math.round(Math.random()*1000) },
	                {name: '江苏',value: Math.round(Math.random()*1000) },
	                {name: '浙江',value: Math.round(Math.random()*1000) },
	                {name: '江西',value: Math.round(Math.random()*1000) },
	                {name: '湖北',value: Math.round(Math.random()*1000) },
	                {name: '广西',value: Math.round(Math.random()*1000) },
	                {name: '甘肃',value: Math.round(Math.random()*1000) },
	                {name: '山西',value: Math.round(Math.random()*1000) },
	                {name: '内蒙古',value: Math.round(Math.random()*1000) },
	                {name: '陕西',value: Math.round(Math.random()*1000) },
	                {name: '吉林',value: Math.round(Math.random()*1000) },
	                {name: '福建',value: Math.round(Math.random()*1000) },
	                {name: '贵州',value: Math.round(Math.random()*1000) },
	                {name: '广东',value: Math.round(Math.random()*1000) },
	                {name: '青海',value: Math.round(Math.random()*1000) },
	                {name: '西藏',value: Math.round(Math.random()*1000) },
	                {name: '四川',value: Math.round(Math.random()*1000) },
	                {name: '宁夏',value: Math.round(Math.random()*1000) },
	                {name: '海南',value: Math.round(Math.random()*1000) },
	                {name: '台湾',value: Math.round(Math.random()*1000) },
	                {name: '香港',value: Math.round(Math.random()*1000) },
	                {name: '澳门',value: Math.round(Math.random()*1000) }
	            ]
	        }
	    ]
	}
    }
  },
  
  mounted () {
  	
	let map = this.$refs.map;
	let timeInterval = setInterval(()=>{
		if( document.getElementById('map').scrollWidth > 0 ){ 
			clearInterval( timeInterval );
			map.hideLoading();
          	map.resize();
		}
	},100)
	map.showLoading({
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