import { routerMap, constantRouterMap } from '@/router'
import Layout from '@/pages/Layout/Layout'
import Layout1 from '@/pages/Layout/Layout1'
import axios from 'axios';
import router from '@/router'
import store from '@/store/'
/**
 * 获取模块名称
 */
function getLoginMoudle() {
	return new Promise(function (resolve, reject) {
		axios.get('/main/index', {
			params: {}
		})
			.then(function (response) {				
				resolve(response);
			})
			.catch(function (response) {
				return reject(response);
			})
	});
};
const permission = {
	state: {
		routers: constantRouterMap,
		addRouters: [],
		permission: false,
	},
	mutations: {
		SET_ROUTERS: (state, routers) => {
			state.addRouters = routers
			state.routers = constantRouterMap.concat(routers)
		},
		SET_PERMISSION: (state, flag) => {
			state.permission = flag
		}
	},
	actions: {
		GenerateRoutes({
			commit
		}) {
			return new Promise(resolve => {
				let tempRouter = []
				getLoginMoudle().then(function (res) {
					if (res.data.msg == "请先登录！") {
						store.dispatch('LogOut');
						location.reload();
					} else {
                        let routerList = res.data;  
                        let newList = [];             
                        routerList.forEach(e => {
                            if(e.menuParentId == '0'){
                                newList.push(e)
                            }
                        });                    
                        newList.forEach(menu=>{ 
                            let childMenu = []                      
                            routerList.forEach(child => {
                                if( child.menuParentId == menu.id ){
                                    childMenu.push(child)
                                }
                            });
                            menu.childMenu = childMenu
                        })
                        // console.log(newList)
						// 动态添加路由数组
						if (newList.length > 0) {
							commit('SET_PERMISSION', true)
							for (let i = 0; i < newList.length; i++) {
								if(newList[i].id != 5 ){
									let moduleRouter = {
										path: '',
										component: Layout,
										icon:newList[i].icon,
										redirect: '',
										children: [],
										name: newList[i].id,
										meta: {
											title: newList[i].menuName
										}
									}
									let flag = false;
									// 子菜单
									let routerChildren = newList[i].childMenu;
									for (let j = 0; j < routerChildren.length; j++) {
										let menuId = routerChildren[j].id;
										// 所有已配置的路由信息中存在相同menuId的
										if (routerMap[menuId] != undefined) {
											moduleRouter.children.push(routerMap[menuId]);
											flag = true;
										}                            

									}
									if (flag) {
										tempRouter.push(moduleRouter);
									}
								}else{
									let moduleRouter2 = {
										component:Layout1,
										path: '',
										icon:newList[i].icon,
										redirect: '',
										children: [],
										name: newList[i].id,
										meta: {
											title: newList[i].menuName
										}
									}
									let flag = false;
									// 子菜单
									let routerChildren2 = newList[i].childMenu;
									for (let j = 0; j < routerChildren2.length; j++) {
										let menuId2 = routerChildren2[j].id;
										// 所有已配置的路由信息中存在相同menuId的
										if (routerMap[menuId2] != undefined) {
											moduleRouter2.children.push(routerMap[menuId2]);
											flag = true;
										}                            

									}
									if (flag) {
										tempRouter.push(moduleRouter2);
									}
								}
							}
							// 重定向路由
							let redirectModule = tempRouter[0].children;
							for (let i = 0; i < redirectModule.length; i++) {
								if (!redirectModule[i].hidden) {
									tempRouter[0].redirect = "/" + redirectModule[i].path;
									break
								}
							}
							router.push({
                                 path: '/'
							})
							// console.log(tempRouter)
							commit('SET_ROUTERS', tempRouter)
							resolve()
						} else {
							commit('SET_PERMISSION', false)
							router.push({
								path: 'login'
							})
						}
					}

				}).catch(function onRejected(error) {
					console.error(error);
				});

			})
		}
	}
}

export default permission