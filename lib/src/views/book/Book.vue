<template>
  <div class="book">
		<div class="g-main">
			<h3>图书管理 </h3>
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
							<form action="#" method="post">
								<select name="order_key" id="order_key" class="form-element ">
									<option value="0" selected="selected">===排序===</option>
									<option value="money">价格</option>
									<option value="recharge">充值</option>
								</select>
								<select name="order_by" id="order_by" class="form-element ">
									<option value="asc">升</option>
									<option value="desc">降</option>
								</select>
								<button class="u-btn u-btn-primary" type="submit">筛选</button>
							</form>
						</div>
					</div>
					<table id="table" class="m-table ">
						<thead>
							<tr>
								<th width="30">书号</th>
								<th width="100">封面</th>
								<th>书名</th>
								<th width="120">作者</th>
								<th width="50">类型</th>
								<th width="50">完本</th>
								<th width="50">总字数</th>
								<th width="50">价格</th>
								<th width="50">热度</th>
								<th width="100">创建时间</th>
								<th width="150">操作</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>
									
								</td>
								<td>
									<a href="#" target="_blank">甜宠蜜妻，老婆别跑</a>
								</td>
								<td>紫烟</td>
								<td>都市</td>
								<td>
									<span class="u-badge u-badge-danger">连载</span>
								</td>
								<td>997096</td>
								<td>0</td>
								<td>0</td>
								<td>2016-09-18 13:11:58</td>
								<td>
									<a class="u-btn u-btn-primary" v-link="{path:'/bookfangan'}">推广文案</a>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td>
									
								</td>
								<td>
									<a href="#" target="_blank">霸道总裁有点拽</a>
								</td>
								<td>晓亦</td>
								<td>言情</td>
								<td>
									<span class="u-badge u-badge-danger">连载</span>
								</td>
								<td>307788</td>
								<td>0</td>
								<td>0</td>
								<td>2016-09-18 13:11:58</td>
								<td>
									<a class="u-btn u-btn-primary" v-link="{path:'/bookfangan'}">推广文案</a>
								</td>
							</tr>

						</tbody>
					</table>
					<div class="m-table-bar">
						<div class="bar-pages">
							<div class="m-page">
								<div> <span class="current">1</span>
									<a class="num" href="#" v-for="item in items">{{$index+2}}</a>
									<a class="next" href="#">&gt;&gt;</a>
									<a class="end" href="#">33</a>
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
export default{
    data () {
      return {
        items: 10,
      }
    }
}

</script>


<style lang="less">
@width: 200px;
@padding: 20px;

#wf{
  position: relative;
  margin: 0 auto;
  div{
    width: @width;
    position: absolute;
    top: 0;
    left: 0;
    padding: @padding;
    border: solid 1px grey;
    border-radius: 4px;
    .transition(left 1s);
    img{
      width: 100%;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.transition(@transition){
  -webkit-transition: @transition;
  -moz-transition: @transition;
  -o-transition: @transition;
  transition: @transition;
}
</style>
