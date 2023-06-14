package com.example.backend.controller;

import com.example.backend.model.Days;
import com.example.backend.repository.DayRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class DayController {
    @Autowired
    private DayRepo dayRepo;

    @PostMapping("/days")
    Days newDays(@RequestBody Days newDays){
        return dayRepo.save(newDays);
    }

    @GetMapping("/days")
    List<Days> getDays(){
        return dayRepo.findAll();
    }

}

