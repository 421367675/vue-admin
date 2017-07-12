<template>
	<div class="tp-admin-home-container">
		<el-alert title="Vue后台管理系统，新鲜出炉" type="warning"></el-alert>
		<div class="tp-info-statistics">
			<div class="title_stats_items">
				<h5><i class="fa  fa-codepen"></i>订单总数</h5>
				<div class="info-data">5600</div>
				<p class="info-week">上周飙升<span class="green">55%</span></p>
			</div>	
			<div class="title_stats_items">
				<h5><i class="fa fa-thumb-tack"></i>今日订单</h5>
				<div class="info-data">188</div>
			</div>
			<div class="title_stats_items">
				<h5><i class="fa fa-database"></i>订单总额</h5>
				<div class="info-data">685,400,00</div>
				<p class="info-week">上周上升<span class="green">55%</span></p>
			</div>
			<div class="title_stats_items">
				<h5><i class="fa fa-globe" ></i>销售统计</h5>
				<div class="info-data">380</div>
				<p class="info-week">上周飙升升<span class="green">39%</span></p>
			</div>
			<div class="title_stats_items">
				<h5><i class="fa fa-id-card"></i>店铺统计</h5>
				<div class="info-data">120</div>
				<p class="info-week">上月上升<span class="green">5%</span></p>
			</div>
			<div class="title_stats_items">
				<h5><i class="fa fa-commenting"></i>评论数</h5>
				<div class="info-data">9930</div>
			</div>
		</div>
		<div class="tp-charts-container clearfix">
			<div class="tp-charts-rows">
				<h5>年度销售统计</h5>
				<area-stack></area-stack>
			</div>
			<div class="tp-charts-rows" ref="chartsMap" :class="fullscreenView ? 'full_view':''">
				<h5>
					<el-tooltip class="tp-expand" effect="dark" content="全屏查看" placement="right-center">
						<el-button  class="menu-on-off" @click="fullView">
							<i class="fa fa-arrows-alt"></i>
						</el-button>
					</el-tooltip>
					全国地市销售额</h5>
				<E-map></E-map>
			</div>
		</div>
		<div class="tp-charts-pie clearfix">
			<Pie class="echats">echarts</Pie>
		</div>
	   
	</div>

</template>


<style lang="scss" >

.tp-info-statistics{
	height: 120px;
	overflow: hidden;
	background-color: #E5E9F2;
	padding: 10px 0;
	
	.title_stats_items{
		width:16.666% ;
		float: left;
		padding:0 3%;
		min-height: 90px;
		
		&+ .title_stats_items{
			border-left: 2px solid #C0CCDA;
		}
		
		h5{
			white-space: nowrap;
			height: 30px;
			line-height: 30px;
			
			.fa{ margin-right: 5px; color: #99A9BF;}
		}
		
		.info-data{
			
			font-size:28px;
			font-weight: bold;
			color: #1D8CE0;
		}
		
		.info-week{
			color: #99A9BF;
			white-space: nowrap;
		}
		
		.green{ color: green;}
	}
}

.tp-admin-home-container{
	
	.el-alert{
		border-radius: 0;
	}
	
	.tp-charts-container{
		width: 100%;
		padding: 10px;
		min-width: 400px;
		column-count:2;
		column-gap:10px;
	}
	
	.tp-charts-rows{
		border: 1px solid #ccc;
		width: 100%;
		
		&.full_view{
			position: fixed;
			z-index: 9999;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;	
			background-color: #fff;
		}
		
		h5{
			height: 40px;
			line-height: 40px;
			margin: 0;
			padding: 0 12px;
			border-bottom: 1px solid #ccc;
			margin-bottom: 10px;
			background-color: #E5E9F2;
			color: #324057;
			
			.tp-expand{
				float: right;
				width: 20px;
				height: 20px;
				line-height: 20px;
				text-align: center;
				cursor: pointer;
				margin: 8px 0 0;
				padding: 0;
				background-color:transparent;
				border: 0 none;
				color: #8492A6;
			}
		}
		
		.echarts{
			width:100%;
			min-width: 400px;
			height: 500px;
			padding: 10px;
		}
	}
	
	.tp-charts-pie{
		height: 1500px;
	}
}
</style>

<script>
import Pie from './echarts/pie'
import EMap from './echarts/map'
import AreaStack from './echarts/areaStack'


//mix-line-bar
export default {
  data(){
	return {
  		fullscreenView : false
  	}
  },
  components : { 
  	Pie,
  	EMap,
  	AreaStack
  },
  
  methods:{

  	fullView(){
  		this.fullscreenView = !this.fullscreenView;
  	}
  	
  },
  
  mounted(){
  	//console.log(this)
  }
}
</script>