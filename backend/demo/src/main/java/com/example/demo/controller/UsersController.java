package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Users;
import com.example.demo.service.UsersService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/users")

public class UsersController {
    @Autowired
    public UsersService usersService;
    @PostMapping("/register")
    public Users registeruser(@RequestBody Users farmer) {
        return usersService.saveuser(farmer);
    }
    @GetMapping("/all")
    public List<Users> getAllusers() {
        return usersService.getuser();
    }


}
