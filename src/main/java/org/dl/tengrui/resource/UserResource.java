package org.dl.tengrui.resource;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.dl.tengrui.entity.User;
import org.dl.tengrui.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

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
    public List<User> getUsers(
    		@QueryParam(value = "iDisplayStart") Long start,// 开始
    		@QueryParam(value = "iDisplayLength") Long amount,
    		@QueryParam("name") final String searchText) throws Exception {
    	
		if (start < 0) {
			start = 0L;
		}
		if ((amount < 10) || (amount > 100)) {
			amount = 10L;
		}
		
    	return userService.getUsers(start, amount, "");
    }

}
