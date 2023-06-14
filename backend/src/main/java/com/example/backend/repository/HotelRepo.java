package com.example.backend.repository;

import com.example.backend.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HotelRepo extends JpaRepository<Hotel,Long> {
    List<Hotel> findHotelByCity(String city);
    long countHotelByCity(String city);
    ;

}
