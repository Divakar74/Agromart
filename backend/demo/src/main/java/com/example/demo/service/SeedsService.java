package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Seeds;
import com.example.demo.repository.SeedsRepository;

@Service
public class SeedsService {
        @Autowired
    private SeedsRepository seedsRepository;

       public Seeds saveSeed(Seeds seed) {
        return seedsRepository.save(seed);
    
    }
    
    public List<Seeds> getAllSeeds() {
        return seedsRepository.findAll();
    }

}
