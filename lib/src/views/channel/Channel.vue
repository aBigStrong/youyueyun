<template>
	<div class="channel">
		<div class="g-main">
			<h3>渠道管理 </h3>

			<div class="m-panel ">
				<div class="panel-body">
					<div class="m-table-tool f-cb">
						<div class="tool-search f-cb">
							<form action="#" method="post">
								<input type="text" class="form-element" name="keyword" value="">
								<button class="u-btn u-btn-primary" type="submit">搜索</button>
							</form>
						</div>

						<div class="tool-filter f-cb">
							<form action=".#" method="post">
								<select name="money" id="money" class="form-element ">
									<option value="0" selected="selected">==请选择==</option>
									<option value="1">已充值</option>
									<option value="2">未充值</option>
								</select>
								<button class="u-btn u-btn-primary" type="submit">筛选</button>
							</form>
						</div>
					</div>
					<div class="formitm form-submit">
						<div class="ipt">
							<div class="tip" id="tips"></div>
							<a href="channeladd.html" id="btn_createBtn" class="u-btn u-btn-primary">新增渠道</a>&nbsp;&nbsp;&nbsp;
							<a href="putlink.html" id="btn_createBtn" class="u-btn u-btn-primary">渠道推广链接</a>
						</div>
					</div>
					<table id="table" class="m-table ">
						<thead>
							<tr>
								<th>ID</th>
								<th>帐户</th>
								<th>渠道名称</th>
								<th>点击</th>
								<th>引导人数</th>
								<th>注册用户</th>
								<th>充值笔数</th>
								<th>总充值RMB</th>
								<th>成本(回报率)</th>
								<th>详情</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>10934</td>
								<td>020</td>
								<td>321</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0</td>
								<td>0(0%)</td>
								<td>
									<a class="u-btn u-btn-primary" href="channeldetail.html">查看</a>
								</td>
							</tr>

						</tbody>
					</table>
					<div class="m-table-bar">
						<div class="bar-pages">
							<div class="m-page">
								<div> <span class="current">1</span>
									<a class="num" href="#">2</a>
									<a class="next" href="#">&gt;&gt;</a>
								</div>
							</div>
						</div>
						<div class="f-cb"></div>
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