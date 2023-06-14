package com.example.backend.controller;

import com.example.backend.model.Hotelier;
import com.example.backend.model.Res;
import com.example.backend.repository.ResRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ResController {
    @Autowired
    private ResRepo resRepo;

    @PostMapping("/reservation")
    Res newReservation(@RequestBody Res newRes) {
        return resRepo.save(newRes);
    }

    @GetMapping("/reservations")
    List<Res> getAllRes() {
        return resRepo.findAll();
    }

    @DeleteMapping("/res/{id}")
    public ResponseEntity<Res> deleteRes(@PathVariable long id){
        resRepo.deleteById(id);
        return new  ResponseEntity<>(HttpStatus.OK);
    }

}
