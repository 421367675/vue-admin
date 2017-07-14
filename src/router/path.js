

export  const home = r => require.ensure([], () => r(require( '@/components')), 'home')
export  const admin = r => require.ensure([], () => r(require( '@/admin')), 'admin')
export  const Error = r => require.ensure([], () => r(require( '@/components/Error')), 'Error')
export  const setting_basic = r => require.ensure([], () => r(require( '@/components/setting')), 'setting')
export  const setting_goods = r => require.ensure([], () => r(require( '@/components/setting/goods_set_template')), 'goods')
export  const member_list = r => require.ensure([], () => r(require( '@/components/member/list')), 'list')

export  const login = r => require.ensure([], () => r(require( '@/components/login')), 'login')

//echarts page
export  const axis_axisChart = r => require.ensure([], () => r(require( '@/components/echarts/axisChart')), 'axisChart')
export  const axis_pageChartState = r => require.ensure([], () => r(require( '@/components/echarts/pageChartState')), 'pageChartState')
