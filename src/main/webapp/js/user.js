$(document).ready(function() {
	
});

//生成表数据
function loadUserTable(name) {
	datatable = $('#chat_group_table')
			.dataTable(
					{
						"bDestroy" : true,
						"bProcessing" : true, // 数据加载提示信息是否显示
						"sAjaxSource" : "/wms/api/users",
						"bServerSide" : true,
						"bFilter" : false,
						"bStateSave" : false,
						"bAutoWidth" : false,
						 fnServerParams : function(aoData) {
							aoData.push({
								name : 'name',
								value : name
							});
						},
						"aoColumns" : [
								{
									mData : 'id',
									bSortable : false,
									sTitle : '群组ID',
									sDefault : '',
									mRender : function(data, type, full) {
										var template ='<a href="javascript:void(0);" onclick="editApp(DBID_)"><span>' + "ld-group-" 
											+ data + '</span></a>'; 
										return template.replace(/DBID_/g,
												full.id);
									}
								},
								{
									mData : 'name',
									bSortable : false,
									sTitle : '群组名称',
									sDefault : '',
									mRender : function(data, type, full) {
										var template = '<span>' + data
											+ '</span>';
										return template.replace(/DBID_/g,
												full.name);
									}
								},
								{
									mData : 'createUserName',
									bSortable : false,
									sTitle : '创建者',
									sDefault : '',
									mRender : function(data, type, full) {
										var template = '<span>' + data
												+ '</span>';
										return template;
									}
								},
								{
									mData : 'createTimeStr',
									bSortable : false,
									sTitle : '创建时间',
									sDefault : '',
									mRender : function(data, type, full) {
										var template = '<span>' + data
												+ '</span>';
										return template;
									}
								},
								{
									mData : 'id',
									bSortable : false,
									sTitle : '操作',
									sDefault : '',
									mRender : function(data, type, full) {
										var template = '&nbsp;&nbsp;<a class="btn blue btn-xs" href="#" onclick="editApp(DBID_);">编辑</a>';
										template += '&nbsp;&nbsp;<a class="btn blue btn-xs" href="#" onclick="getConfirm(DBID_);">删除</a>';
										template += '&nbsp;&nbsp;<a class="btn blue btn-xs" href="#" onclick="getChatGroupUser(DBID_);">显示群成员</a>';
										return template = template.replace(
												/DBID_/g, full.id);
									}
								} ],
					});
	$('.dataTables_filter input').addClass(
			"form-control input-medium input-inline");
	$('.dataTables_length select').addClass(
			"form-control input-xsmall input-inline");
}