package org.dl.tengrui.resource;

import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;

@Path("/users")
@Controller
public class UserResource {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		System.out.println("test");
	}
	

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public void getUsers(@QueryParam("st") final String searchText,
            @HeaderParam("userID") final String userID) throws Exception {
    	System.out.println("test");
    }

}
