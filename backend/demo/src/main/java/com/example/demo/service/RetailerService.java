package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Retailer;
import com.example.demo.repository.RetailerRepository;
import java.util.List;

@Service
public class RetailerService {
    @Autowired
    public RetailerRepository retailerRepository;

    public Retailer saveretailer(Retailer retailer)
    {
        return retailerRepository.save(retailer);
    }
    public List<Retailer> getretailer()
    {
        return retailerRepository.findAll();
    }
}
