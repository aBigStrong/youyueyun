<template>
	<div class="pay">
		<div class="g-main">
			<h3>收款信息</h3>

			<div class="m-panel ">
				<div class="panel-body">

					<form action="#" method="post" id="form" class="m-form m-form-horizontal">
						<fieldset>

							<div class="formitm">
								<label class="lab">
									<select name="paychannel" id="money" class="form-element" onchange="tobank(this)">
										<option value="alipay">支付宝</option>
										<option value="bank">银行卡</option>
										<option value="wehcat">微信号</option>
									</select>
								</label>
								<div class="ipt">
									<input name="pay_account" type="text" class="form-element u-width-large  " id="pay_alipay_account" value="" maxlength="250">
								</div>
							</div>
							<div class="formitm" style="display: none;" id='bankh'> 
								<label class="lab">开户支行</label>
								<div class="ipt">
									<input name="pay_bankh" type="text" class="form-element u-width-large  " id="pay_alipay_realname" value="" maxlength="250">
								</div>
							</div>
							<div class="formitm">
								<label class="lab">真实姓名</label>
								<div class="ipt">
									<input name="pay_realname" type="text" class="form-element u-width-large  " id="pay_alipay_realname" value="" maxlength="250">
								</div>
							</div>

							<div class="formitm">
								<label class="lab">联系电话</label>
								<div class="ipt">
									<input name="pay_phone" type="text" class="form-element u-width-large  " id="pay_alipay_phone" value="" maxlength="250">
								</div>
							</div>
							<div class="formitm">
								<label class="lab">微信号</label>
								<div class="ipt">
									<input name="pay_weixin" type="text" class="form-element u-width-large  " id="pay_weixin" value="" maxlength="250">
								</div>
							</div>
							<div class="formitm">
								<label class="lab">联系QQ</label>
								<div class="ipt">
									<input name="pay_qq" type="text" class="form-element u-width-large  " id="pay_qq" value="" maxlength="250">
								</div>
							</div>

							<div class="formitm form-submit">
								<div class="ipt">
									<div class="tip" id="tips"></div>
									<button class="u-btn u-btn-success u-btn-large" type="submit" id="btn-submit">保存</button>
									<button class="u-btn u-btn-large" type="reset">重置</button>
								</div>
							</div>
						</fieldset>
					</form>
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