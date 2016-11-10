<template>
	<div class="user">
		<div class="g-main">
			<h3>用户列表 </h3>
			<div class="m-panel ">
				<div class="panel-body">
					<div class="m-table-tool f-cb">
						<div class="tool-search f-cb">
							<form action="./用户管理_files/用户管理.html" method="post">
								<input type="text" class="form-element" name="keyword" value="">
								<button class="u-btn u-btn-primary" type="submit">搜索</button>
							</form>
						</div>

						<div class="tool-filter f-cb">
							<form action="./用户管理_files/用户管理.html" method="post">
								<select name="subscribe" id="subscribe" class="form-element ">
									<option value="0" selected="selected">==请选择==</option>
									<option value="1">账户</option>
									<option value="2">余额</option>
									<option value="2">总充值金额</option>
									<option value="2">注册时间</option>
								</select>
								<select name="deretion" id="money" class="form-element ">
									<option value="1">升</option>
									<option value="2">降</option>
								</select>
								<button class="u-btn u-btn-primary" type="submit">筛选</button>
							</form>
						</div>
					</div>
					<table id="table" class="m-table " v-bind:class="{ 'table_bor': isA}" v-on:click='tabs'>
						<thead>
							<tr v-bind:style="{ color: red,fontSize:num+'px'}">
								<th>账户</th>
								<th>呢称</th>
								<th>头像</th>
								<th>注册时间</th>
								<th>总充值金额</th>
								<th>渠道</th>
								<th>详情</th>

							</tr>
						</thead>
						<tbody>
							<tr>
								<td>we20161021002714</td>
								<td>熊大大. </td>
								<td>
									<img src="../../assets/logo.png" />
								</td>
								<td>2016-10-21 00:27:14</td>
								<td>0</td>
								<td>0</td>
								<td>
									<a class="u-btn u-btn-primary" v-link="{ path: '/userdetail'}">查看</a>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="m-table-bar">
						<div class="bar-pages">
							<div class="m-page">
								<div> 
									<span class="current">1</span>
									<a class="num" href="#" v-for="item in items">{{item+2}}</a>
									<a class="next" href="#">&gt;&gt;</a>
									<a class="end" v-bind:href="url">1556</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script type="text/javascript">

	/**
	 * export数据层
	 */
	export default {
		data() {
			return {
				items: 10,
				url:'http://127.0.0.1:8080/#!/',
				isA:false,
				red:'red',
				num:15
			}
		},
		methods:{
			tabs:function(){
				//this.$set('isA',!this.isA)
				this.isA=!this.isA
			}
		}
	}
</script>

<style lang="less">
	@width: 200px;
	@padding: 20px;
	#wf {
		position: relative;
		margin: 0 auto;
		div {
			width: @width;
			position: absolute;
			top: 0;
			left: 0;
			padding: @padding;
			border: solid 1px grey;
			border-radius: 4px;
			.transition(left 1s);
			img {
				width: 30%;
				position: relative;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
	
	img {
		width: 10%;
	}
	
	.transition(@transition) {
		-webkit-transition: @transition;
		-moz-transition: @transition;
		-o-transition: @transition;
		transition: @transition;
	}
</style>