package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Pesticides;
@Repository
public interface PesticidesRepository extends JpaRepository<Pesticides, Long> {
    // Additional query methods (if needed) can be defined here
}
