<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=utf-8"%>
	
<div class="tabbable-line">
		<ul class="nav nav-tabs ">
			<li>
				<a aria-expanded="true" href="#tab_1_1" data-toggle="tab">
				用户管理 </a>
			</li>		
		</ul>
		<div class="tab-content">
			<div class="tab-pane" id="tab_1_1">
				<div class="row">
					<div class="col-md-12 clearfix">
						<div class="pull-left">
							<a href="#" class="btn blue" id="add_btn" >新增</a> 
						</div>
						<div class="operation-search pull-right">
							<form class="form-inline" role="form" id="search-form">
								<div class="form-group">
									<input type="text" class="form-control" id="user_input" name="user_input" placeholder="请输入用户的名称">
									<a href="#" id="search" class="btn blue" onclick="searchUser();">查询</a>  
								</div>
							</form>
						</div>
		      		</div>
		   		</div>
		  		<div class="row">
					<div class="col-md-12">	
						<table class="table table-striped table-bordered table-advance table-hover" id="user_table"></table>
					</div>
				</div>
			</div>			
		</div>
		<div class="modal fade" id="confirmModalForUser" tabindex="-1" role="confirmModal" aria-hidden="true"
			style="width: 500px;padding-left:auto; padding-right: auto; margin-top: 150px;">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
				<h3>操作提示</h3>
			</div>
			<div class="modal-body">
				<p class="fs16">确定删除该条记录吗？</p>
				<input type="hidden" id="userId" />
			</div>
			<div class="modal-footer">
				<button data-dismiss="modal" class="btn blue confirm" onclick="removeText()">确定</button>
				<button class="btn" data-dismiss="modal" aria-hidden="true">取消</button>
			</div>
		</div>
</div>
