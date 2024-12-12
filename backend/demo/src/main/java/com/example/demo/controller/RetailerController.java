package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Retailer;
import com.example.demo.service.RetailerService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/retailers")

public class RetailerController {
    @Autowired
    public RetailerService retailerService;
    

    @PostMapping("/register")
    public Retailer registerRetailer(@RequestBody Retailer retailer) {
        return retailerService.saveretailer(retailer);
    }

    @GetMapping("/all")
    public List<Retailer> getAllRetailers() {
        return retailerService.getretailer();
    }

}
