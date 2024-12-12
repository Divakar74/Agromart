package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Seeds;
import com.example.demo.service.SeedsService;

@RestController
@CrossOrigin
@RequestMapping("/api/seeds")

public class SeedsController {
        @Autowired
    private SeedsService seedsService;

    @GetMapping
    public List<Seeds> getAllSeeds() {
        return seedsService.getAllSeeds();
    }

    @PostMapping
    public Seeds createSeed(@RequestBody Seeds seed) {
        return seedsService.saveSeed(seed);
    }


}
