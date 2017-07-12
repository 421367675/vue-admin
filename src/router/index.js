import Vue from 'vue'
import Router from 'vue-router'
import * as path from './path'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      component: path.admin,
      children : [
      		{
			      path: '/',
			      name : 'home',
			      component: path.home,
			      meta : {
			      	//验证登录
			      	requiresAuth : false 
			      }
			    },
			    
      		{
			      path: 'setting',
			      name : 'setting',
			      component: path.setting,
			      meta : {
			      	//验证登录
			      	requiresAuth : true 
			      }
			    },
			    
			    {
			      path: 'goods',
			      component: path.goods,
			      meta : {
			      	//验证登录
			      	requiresAuth : true 
			      }
			    },
			    
			    {
			      path: 'message',
			      component: path.message,
			      meta : {
			      	//验证登录
			      	requiresAuth : true 
			      }
			    },
			    
			    {
			      path: 'email',
			      component: path.email,
			      meta : {
			      	//验证登录
			      	requiresAuth : true 
			      }
			    },
			    
			    {
			      path: 'code',
			      component: path.code,
			      meta : {
			      	//验证登录
			      	requiresAuth : true 
			      }
			    }
			    
      ]
    },
    {
      path: '/login',
      name : 'login',
      component: path.login
    },
    
    {
      path: '*',
      component: path.Error
    }
    
  ]
})


router.beforeEach((to, from, next) => {
	
	store.commit('GETLOGINDATA',{
		 store : store,
		 key : 'login'
	})

	let islogin = store.state.imposeSwitchType;

	if( to.meta.requiresAuth ){
			if( islogin ){
	      next({
	        path: '/login'
	        //query: { redirect: to.fullPath } 
	      });
			}else{
				next();
			}
	   
	}else{
	    next();
	}
});

export default  router;