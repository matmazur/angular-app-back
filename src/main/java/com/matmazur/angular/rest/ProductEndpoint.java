package com.matmazur.angular.rest;


import com.matmazur.angular.data.ProductRepository;
import com.matmazur.angular.model.Product;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import java.util.List;

@RequestScoped
@Path("/products")
@Produces(MediaType.APPLICATION_JSON)
public class ProductEndpoint {


    @Inject
    ProductRepository repository;

    @GET
    public Response getAllProducts() {


        List<Product> list = repository.findAll();
        if (list != null) {
            return Response.ok(list).build();
        } else {
            return Response.noContent().build();
        }
    }


    @GET
    @Path("/{id}")
    public Response getSpecificProduct(@PathParam("id") Long id) {

        Product product = repository.findByID(id);
        if (product != null) {
            return Response.ok(product).build();
        } else {
            return Response.noContent().build();
        }
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response saveProduct(Product product, @Context UriInfo uriInfo){

        repository.save(product);
        return Response.accepted(product).build();
    }

}
