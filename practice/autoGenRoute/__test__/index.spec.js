test('练习自动化生成路由配置',() => {
  const {getRouter} = require('../index')
  const ret = getRouter(__dirname + '/data')
  console.log(ret)
  expect(ret).toBe(
`
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/about.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/home.vue')
    },
  ]
})`
  )
})