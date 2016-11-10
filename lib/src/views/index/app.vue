<template>
	<div id="admin">
		<div class="g-main">
			<div class="g-grid div_cen">
				<div class="g-col-4-1">
					<div class="m-panel s-panel-info">
						<div class="panel-header">
							<div class="f-cb">
								<p>当日充值</p>
								<p>30</p>
							</div>
						</div>
					</div>
				</div>
				<div class="g-col-4-1">
					<div class="m-panel s-panel-danger">
						<div class="panel-header">
							<div class="f-cb">
								<p>本月充值</p>
								<p>6660</p>
							</div>
						</div>
					</div>
				</div>
				<div class="g-col-4-1">
					<div class="m-panel s-panel-success">
						<div class="panel-header">
							<div class="f-cb">
								<p>累计充值</p>
								<p>26050</p>
							</div>
						</div>
					</div>
				</div>
				<div class="g-col-4-1 g-col-last">
					<div class="m-panel s-panel-warning">
						<div class="panel-header">
							<div class="f-cb">
								<p>账户余额</p>
								<p>6660</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="g-grid">
				<div class="m-panel">
					<div class="panel-header"> <i class="u-icon-bars"></i> 充值明细 </div>
					<div class="m-table-mobile">
						<table id="table" class="m-table ">
							<thead>
								<tr>
									<th>序号</th>
									<th>用户名</th>
									<th>充值金额</th>
									<th>充值方式</th>
									<th>{{msg | capitalize}}</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="person in gridData" v-on:click='con'>
									<td v-for="date in person">{{ date }}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">

	export default {
		data: function() {
			return {
				msg: 'hello',
				gridData: [],
				arr:[1,2,3,4]
			}
		},
		methods: {
			con: function() {
				console.log(this.arr.reverse())
				
			}
		},
		ready: function() {
			this.$http.get('./static/date/hello.json').then(function(res) {
				//this.$set('gridData', res.data)
				this.gridData=res.data
			}, function() {
				console.log(2)
			}).catch(function(response) {
				console.log(response)
			});
		}
	}
</script>

<style lang="less">

</style>