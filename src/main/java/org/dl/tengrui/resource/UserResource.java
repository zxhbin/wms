package org.dl.tengrui.resource;

import java.util.List;

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
    public List<User> getUsers(@QueryParam("st") final String searchText,
            @HeaderParam("userID") final String userID) throws Exception {
    	return userService.getUsers("", userID);
    }

}
