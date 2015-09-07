package org.dl.tengrui.entity;


import java.util.List;

import flexjson.JSON;

public class DTDataResponse {

	private List<?> aaData;

	private long iTotalRecords; // 鎬绘暟閲�

	private long iTotalDisplayRecords; // 鏉′欢鏌ヨ涔嬪悗鏁伴噺

	public long getiTotalDisplayRecords() {
		return iTotalDisplayRecords;
	}

	public void setiTotalDisplayRecords(long iTotalDisplayRecords) {
		this.iTotalDisplayRecords = iTotalDisplayRecords;
	}

	public long getiTotalRecords() {
		return iTotalRecords;
	}

	public void setiTotalRecords(long iTotalRecords) {
		this.iTotalRecords = iTotalRecords;
	}

	@JSON
	public List<?> getAaData() {
		return aaData;
	}

	public void setAaData(List<?> aaData) {
		this.aaData = aaData;
	}

}
