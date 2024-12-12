package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Pesticides;
import com.example.demo.repository.PesticidesRepository;

@Service
public class PesticidesService {
        @Autowired
    private PesticidesRepository pesticidesRepository;

    public List<Pesticides> getAllPesticides() {
        return pesticidesRepository.findAll();
    }

    public Pesticides savePesticide(Pesticides pesticide) {
        return pesticidesRepository.save(pesticide);
    }


}
