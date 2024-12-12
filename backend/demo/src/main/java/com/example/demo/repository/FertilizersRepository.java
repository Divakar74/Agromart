package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Fertilizers;
@Repository
public interface FertilizersRepository extends JpaRepository<Fertilizers, Long> {
    // Additional query methods (if needed) can be defined here
}
