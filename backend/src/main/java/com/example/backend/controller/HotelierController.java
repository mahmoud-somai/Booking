package com.example.backend.controller;

import com.example.backend.model.Hotel;
import com.example.backend.model.Hotelier;
import com.example.backend.repository.HotelierRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class HotelierController {
    @Autowired
    private HotelierRepo hotelierRepo;

    @PostMapping("/hotelier")
    Hotelier newHotelier(@RequestBody Hotelier newHotelier) {
        return hotelierRepo.save(newHotelier);
    }

    @GetMapping("/hoteliers")
    List<Hotelier> getAllHoteliers() {
        return hotelierRepo.findAll();
    }

    @GetMapping("/hotelier/{id}")
    Hotelier getHotelierById(@PathVariable Long id) {
        return hotelierRepo.findById(id).orElse(null);
    }

    @PutMapping("/hotelier/{id}")
    public ResponseEntity<Hotelier> updateEmployee(@PathVariable long id, @RequestBody Hotelier hotDetails) {
        Hotelier updateHotelier = hotelierRepo.findById(id)
                .orElseThrow(null);

        updateHotelier.setFirstname(hotDetails.getFirstname());
        updateHotelier.setLastname(hotDetails.getLastname());
        updateHotelier.setEmail(hotDetails.getEmail());
        updateHotelier.setPassword(hotDetails.getPassword());

        hotelierRepo.save(updateHotelier);

        return ResponseEntity.ok(updateHotelier);
    }

    @DeleteMapping("/hotelier/{id}")
    public ResponseEntity<Hotelier> deleteHotelier(@PathVariable long id){
        hotelierRepo.deleteById(id);
        return new  ResponseEntity<>(HttpStatus.OK);
    }

}