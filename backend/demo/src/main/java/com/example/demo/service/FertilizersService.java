package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Fertilizers;
import com.example.demo.repository.FertilizersRepository;
@Service
public class FertilizersService {
        @Autowired
    private FertilizersRepository fertilizersRepository; 

        public Fertilizers saveFertilizer(Fertilizers fertilizer) {
        return fertilizersRepository.save(fertilizer);
    }

    public List<Fertilizers> getAllFertilizers() {
        return fertilizersRepository.findAll();
    }


}
