package com.example.backend.controller;

import com.example.backend.model.Hotel;
import com.example.backend.model.Hotelier;
import com.example.backend.repository.HotelRepo;
import jakarta.persistence.Entity;
import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class HotelController {

    @Autowired
    private HotelRepo hotelRepo;

    //post
    @PostMapping("/hotel")
    Hotel newHotel(@RequestBody Hotel newHotel){
        return hotelRepo.save(newHotel);
    }

    //get all
    @GetMapping("/hotels")
    List<Hotel> getAllHotels(){
        return hotelRepo.findAll();
    }

    //get by id
    @GetMapping("/hotel/{id}")
    Hotel getHotelById(@PathVariable Long id) {
        return hotelRepo.findById(id).orElse(null);
    }

    @GetMapping("/hotels/count")
    public long count(){
        return  hotelRepo.count();
    }

    @GetMapping("/hotels/{city}")
     public long count(@PathVariable String city) {
        List<Hotel>tes=hotelRepo.findHotelByCity(city);
        long x=tes.size();
        return  x;
    }
    @PutMapping("/hotel/{id}")
    public ResponseEntity<Hotel> updateHotel(@PathVariable long id, @RequestBody Hotel hotelDetails) {
        Hotel updateHotel = hotelRepo.findById(id)
                .orElseThrow(null);

        updateHotel.setName(hotelDetails.getName());
        updateHotel.setCity(hotelDetails.getCity());
        updateHotel.setAddress(hotelDetails.getAddress());
        updateHotel.setDescription(hotelDetails.getDescription());
        updateHotel.setPrice((hotelDetails.getPrice()));

        hotelRepo.save(updateHotel);

        return ResponseEntity.ok(updateHotel);
    }


}
