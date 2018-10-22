package com.matmazur.angular.data;

import com.matmazur.angular.model.Product;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Stateless
public class ProductRepository {

    @PersistenceContext
    EntityManager entityManager;

    public List<Product> findAll(){

        TypedQuery<Product> query =  entityManager.createNamedQuery("Product.findAll",Product.class);

        return query.getResultList();
    }

    public Product findByID(Long id){

        TypedQuery<Product> query =  entityManager.createNamedQuery("Product.findById",Product.class);
        query.setParameter("id",id);

        return query.getResultList().get(0);
    }

    public Long save(Product product){
        entityManager.persist(product);
        return product.getId();
    }
}
