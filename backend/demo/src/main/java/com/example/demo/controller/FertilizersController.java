package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Fertilizers;
import com.example.demo.service.FertilizersService;

@RestController
@CrossOrigin
@RequestMapping("/api/fertilizers")
public class FertilizersController {
        @Autowired
    private FertilizersService fertilizersService;

    @GetMapping
    public List<Fertilizers> getAllFertilizers() {
        return fertilizersService.getAllFertilizers();
    }
        @PostMapping
    public Fertilizers createFertilizer(@RequestBody Fertilizers fertilizer) {
        return fertilizersService.saveFertilizer(fertilizer);
    }

}
