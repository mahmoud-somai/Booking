package com.example.backend.repository;

import com.example.backend.model.Res;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResRepo extends JpaRepository<Res,Long> {
}
