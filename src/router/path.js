

export  const home = r => require.ensure([], () => r(require( '@/components')), 'home')
export  const admin = r => require.ensure([], () => r(require( '@/admin')), 'admin')
export  const Error = r => require.ensure([], () => r(require( '@/components/Error')), 'Error')
export  const setting = r => require.ensure([], () => r(require( '@/components/setting')), 'setting')
export  const goods = r => require.ensure([], () => r(require( '@/components/setting/goods_set_template')), 'goods')
export  const message = r => require.ensure([], () => r(require( '@/components/setting/message_set_template')), 'message')
export  const email = r => require.ensure([], () => r(require( '@/components/setting/email_set_template')), 'email')
export  const code = r => require.ensure([], () => r(require( '@/components/setting/code_set_template')), 'code')
export  const login = r => require.ensure([], () => r(require( '@/components/login')), 'login')
