package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Pesticides;
import com.example.demo.service.PesticidesService;

@RestController
@CrossOrigin
@RequestMapping("/api/pesticides")

public class PesticidesController {
        @Autowired
    private PesticidesService pesticidesService;

    @GetMapping
    public List<Pesticides> getAllPesticides() {
        return pesticidesService.getAllPesticides();
    }
     
        @PostMapping
    public Pesticides createPesticide(@RequestBody Pesticides pesticide) {
        return pesticidesService.savePesticide(pesticide);
    }

}
