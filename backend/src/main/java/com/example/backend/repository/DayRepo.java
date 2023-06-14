package com.example.backend.repository;

import com.example.backend.model.Days;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DayRepo extends JpaRepository<Days,Long> {
}
