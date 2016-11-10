'use strict'

export default function(router) {
	router.map({
		'/': {
			name: 'home',
			component: (resolve) => {
				require(['./views/index/app.vue'], resolve)
			},
		},
		'/user': {
			name: 'user',
			component: (resolve) => {
				require(['./views/user/User.vue'], resolve)
			},
		},
		'/userdetail': {
			name: 'userdetail',
			component: (resolve) => {
				require(['./views/user/Userdetail.vue'], resolve)
			},
		},
		'/book': {
			name: 'book',
			component: (resolve) => {
				require(['./views/book/Book.vue'], resolve)
			},
		},
		'/bookfangan': {
			name: 'bookfangan',
			component: (resolve) => {
				require(['./views/book/Bookfangan.vue'], resolve)
			},
		},
		'/picture': {
			name: 'picture',
			component: (resolve) => {
				require(['./views/book/Picture.vue'], resolve)
			},
		},
		'/title': {
			name: 'title',
			component: (resolve) => {
				require(['./views/book/Title.vue'], resolve)
			},
		},
		'/channel': {
			name: 'channel',
			component: (resolve) => {
				require(['./views/channel/Channel.vue'], resolve)
			},
		},
		'/put': {
			name: 'put',
			component: (resolve) => {
				require(['./views/put/Put.vue'], resolve)
			},
		},
		'/pay': {
			name: 'pay',
			component: (resolve) => {
				require(['./views/pay/Pay.vue'], resolve)
			},
		},
		'/paydetail': {
			name: 'paydetail',
			component: (resolve) => {
				require(['./views/pay/Paydetail.vue'], resolve)
			},
		},
		'/payout': {
			name: 'payout',
			component: (resolve) => {
				require(['./views/pay/Payout.vue'], resolve)
			},
		},
	})
}