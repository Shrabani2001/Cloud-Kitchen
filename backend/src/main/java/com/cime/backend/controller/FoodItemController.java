//package com.cime.backend.controller;
//
//import com.cime.backend.model.FoodItem;
//import com.cime.backend.repository.FoodItemRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
//@RequiredArgsConstructor
//@RequestMapping("kitchen/fooditem")
//public class FoodItemController {
//private final FoodItemRepository foodItemRepository;
//
//    @GetMapping
//    public List<FoodItem> getAllFoodItems() {
//
//        return foodItemRepository.findAll();
//    }
//}
