<template>
  <div class="title">
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
								<th width="30">序号</th>
								<th>标题</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>紫烟</td>
							</tr>

							<tr>
								<td>2</td>
								<td>紫烟2</td>
							</tr>
						</tbody>
					</table>
					<div class="m-table-bar">
						<div class="bar-pages">
							<div class="m-page">
								<div> <span class="current">1</span>
									<a class="num" href="#">2</a>
									<a class="num" href="#">3</a>
									<a class="num" href="#">4</a>
									<a class="num" href="#">5</a>
									<a class="num" href="#">6</a>
									<a class="num" href="#">7</a>
									<a class="num" href="#">8</a>
									<a class="num" href="#">9</a>
									<a class="num" href="#">10</a>
									<a class="num" href="#">11</a>
									<a class="next" href="#">&gt;&gt;</a>
									<a class="end" href="#">33</a>
								</div>
							</div>
						</div>
						<div class="f-cb"></div>
					</div>
				</div>
			</div>
		</div></div>

</template>

<script type="text/javascript">

/**
 * export数据层
 */
var items;
export default{
    data () {
      return {
        items: items,
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
