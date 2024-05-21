package com.cime.backend.service.Impl;

import com.cime.backend.model.Admin;

import com.cime.backend.repository.AdminRepository;

import com.cime.backend.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
@Service
@RequiredArgsConstructor
public class AdminImpl implements AdminService {

    private final AdminRepository adminRepository;


    @Override
    public Admin getAdminByadminNameAndPassword(String adminName, String password) {
        return adminRepository.findByAdminNameAndPassword(adminName, password);
    }


//    @Override
//    public FoodItem addFoodItem(FoodItem foodItem) {
//
//        return foodItemRepository.save(foodItem);
//    }
//
//
//    @Override
//    public void DeleteFoodItem(Long foodItemId) {
//        foodItemRepository.deleteById(foodItemId);
//    }
//
//    @Override
//    public List<FoodItem> getAllFoodItems() {
//        return foodItemRepository.findAll();
//    }
//
//    @Override
//    public Optional<FoodItem> getFoodItemById(Long id) {
//        return foodItemRepository.findById(id);
//    }
//
//
//
//    @Override
//    public FoodItem updateFoodItem(long foodItemId, FoodItem foodItem) {
//            FoodItem existingFoodItem = foodItemRepository.findById(foodItemId)
//                    .orElseThrow(() -> new RuntimeException("Food item not found"));
//
//            // Update the properties of the existing food item with the properties of the updated food item
//            existingFoodItem.setFoodName(foodItem.getFoodName());
//            existingFoodItem.setPrice(foodItem.getPrice());
//
//            return foodItemRepository.save(existingFoodItem);
//        }

    }



