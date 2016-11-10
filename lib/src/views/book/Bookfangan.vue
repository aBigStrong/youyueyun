<template>
	<div class="bookfangan">
		<div class="g-main">
			<h3>推广方案</h3>
			<form action="./userupdate_files/userupdate.html" method="post" id="form" class="m-form m-form-horizontal">
				<fieldset>

					<div class="formitm">
						<label class="lab">渠道号</label>
						<div class="ipt">
							<input name="pen_name" type="text" class="form-element u-width-large  " id="pen_name" maxlength="10">
						</div>
					</div>

					<div class="formitm">
						<label class="lab">推广信息</label>
						<div class="ipt">
							<input name="pen_msg" type="text" class="form-element u-width-large  " id="pen_msg" value="" maxlength="250">
						</div>
					</div>

					<div class="formitm">
						<label class="lab">平台</label>
						<div class="ipt">
							<label style=" vertical-align: middle;margin-right: 10px;">
								<input name="pingtai" type="radio"  id="weixin" value="weixin" >微信
							</label>
							<label style=" vertical-align: middle;margin-right: 10px;">
								<input name="pingtai" type="radio"  id="after/bookfangan.html" value="weibo" >微博
							</label>
							<label style=" vertical-align: middle;">
								<input name="pingtai" type="radio"  id="after/bookfangan.html" value="other">其他
							</label>
						</div>
					</div>

					<div class="formitm">
						<label class="lab">成本</label>
						<div class="ipt">
							<input name="vote" type="text" class="form-element u-width-large  " id="vote" value="" maxlength="10">
							<p class="help-block"></p>
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