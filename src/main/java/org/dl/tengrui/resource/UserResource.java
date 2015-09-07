package org.dl.tengrui.resource;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.dl.tengrui.entity.DTDataResponse;
import org.dl.tengrui.entity.User;
import org.dl.tengrui.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Path("/users")
@Controller
public class UserResource {
	
    /** User Service **/
    @Autowired
    private UserService userService;
    
//	public static void main(String[] args) {
//		// TODO Auto-generated method stub
//
//		System.out.println("test");
//	}
//	

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public DTDataResponse getUsers(
    		@QueryParam(value = "iDisplayStart") Long start,// 开始
    		@QueryParam(value = "iDisplayLength") Long amount,
    		@QueryParam("name") final String searchText) throws Exception {
    	
		if (start < 0) {
			start = 0L;
		}
		if ((amount < 10) || (amount > 100)) {
			amount = 10L;
		}
		
    	List<User> users =  userService.getUsers(start, amount, "");
    	long totalRecord = userService.getUserCount();
    	
		final DTDataResponse response = new DTDataResponse();
		response.setiTotalDisplayRecords(totalRecord);
		response.setiTotalRecords(totalRecord);
		response.setAaData(users);
    	
    	return response;
    }

}
