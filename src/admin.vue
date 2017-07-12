<template>
<transition name="tp-fade">	
	<div class="tp-admin" v-show="!fullScreenShow" :class="getSystemSwitch() ? 'tp_samll' : ''">
		<system-side-menu></system-side-menu>
		<system-nav-menu></system-nav-menu>
		<router-view></router-view>
	</div>
</transition>

</template>

<script>
import SystemSideMenu from '@/components/menu'
import SystemNavMenu from '@/components/menu/navmenu'
import { mapGetters } from 'vuex'


export default {
	data(){
		return {
			fullScreenShow : true 
		}
	},
	
	mounted(){
		//console.log(this.$router)
		this.loadfull()
	},
	
	computed : {
		
	},
    methods: {
    	...mapGetters([
			'getSystemSwitch'
		]),
    	//页面初始化 loading
    	loadfull(){
    		
    		let loadingInstance = this.$loading({
    			fullscreen : true,
    			lock : this.fullScreenShow,
    			text : 'loading...'
    		})
    		
    		setTimeout(() => {
    			loadingInstance.close();
          		this.fullScreenShow = false;
        	}, 2000);
        
    	}
    },
    
    components : { 
    	SystemSideMenu,
    	SystemNavMenu
    }
};
</script>

<style lang="scss">

.tp-admin{
	height: 100%;
	overflow: hidden;
	position: relative;
	min-height: 600px;
	transition: all .5s;
	padding-left:200px;
	overflow-y: auto;
	
	&.tp_samll{
		padding-left:60px;
	}
}


</style>
