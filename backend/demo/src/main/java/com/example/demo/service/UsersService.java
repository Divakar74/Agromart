package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Users;
import com.example.demo.repository.UsersRepository;

import java.util.List;

@Service
public class UsersService {
    @Autowired
    public UsersRepository usersRepository;

    public Users saveuser(Users user)
    {
        return usersRepository.save(user);
    }
    public List<Users> getuser()
    {
        return usersRepository.findAll();
    }
}
