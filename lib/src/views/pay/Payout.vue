<template>
	<div class="payout">
		<div class="g-main">
			<div class="m-panel ">
				<div class="panel-body">
					<h3>结算单</h3>
					<div class="m-table-tool f-cb">
						<div class="tool-search f-cb">
							<form action="#" method="post">
								<input type="text" class="form-element" name="keyword" value="">
								<button class="u-btn u-btn-primary" type="submit">搜索</button>
							</form>
						</div>
					</div>
					<table id="table" class="m-table table_bor table_cen">
						<thead>
							<tr>
								<th>待提现</th>
								<th>已提现</th>
								<th>提现中</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>19390.00</td>
								<td>599.00</td>
								<td>19390.00</td>

							</tr>
						</tbody>
					</table>
					<div class="payout">
						余额可提现 &nbsp;&nbsp; <b> &yen;0.00</b>&nbsp;&nbsp;
						<button class="u-btn u-btn-large">提现</button>
					</div>
					<table id="table" class="m-table  table_cen table_th">
						<thead>
							<tr>
								<th>时间</th>
								<th>内容</th>
								<th>订单号</th>
								<th>收支</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>2016-10-20</td>
								<td>广告收入</td>
								<td>42134658</td>
								<td>-15000.00</td>
							</tr>
							<tr>
								<td>2016-10-20</td>
								<td>推广收入</td>
								<td>42134658</td>
								<td>-15000.00</td>
							</tr>
							<tr>
								<td>2016-10-19</td>
								<td>广告收入</td>
								<td>42134658</td>
								<td>-15000.00</td>
							</tr>
							<tr>
								<td>2016-10-19</td>
								<td>推广收入</td>
								<td>42134658</td>
								<td>-15000.00</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div></div>

</template>

<script type="text/javascript">
	/**
	 * export数据层
	 */
	var items;
	export default {
		data() {
			return {
				items: items,
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
				width: 100%;
				position: relative;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
	
	.transition(@transition) {
		-webkit-transition: @transition;
		-moz-transition: @transition;
		-o-transition: @transition;
		transition: @transition;
	}
</style>