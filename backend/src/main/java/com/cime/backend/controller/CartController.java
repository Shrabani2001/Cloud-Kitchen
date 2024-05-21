//package com.cime.backend.controller;
//
//import com.cime.backend.model.CartItem;
//import com.cime.backend.model.FoodItem;
//import com.cime.backend.model.User;
//import com.cime.backend.repository.FoodItemRepository;
//import com.cime.backend.repository.UserRepository;
//import com.cime.backend.service.CartItemService;
//import com.cime.backend.service.Impl.CartItemImpl;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RequiredArgsConstructor
//@RestController
//@RequestMapping("/kitchen/cart")
//public class CartController {
//private final CartItemService cartItemService;
//    @GetMapping
//    public List<CartItem> getCartItems() {
//        return cartItemService.getCartItems();
//    }
//
//    @PostMapping("/buy/{cartItemId}")
//    public void buyItem(@PathVariable Long cartItemId) {
//        cartItemService.buyItem(cartItemId);
//
//    }
////    @PostMapping("/add/{foodItemId}")
////    public void addFoodItemToCart(@PathVariable Long foodItemId) {
////        cartItemService.addItemToCart(foodItemId);
////    }
///*
//    @PostMapping("/add/{foodItemId}/{quantity}")
//    public ResponseEntity<List<CartItem>> addFoodItemToCart(@PathVariable Long foodItemId, int quantity) {
//        cartItemService.addItemToCart(foodItemId, quantity);
//        List<CartItem> cartItems = cartItemService.getCartItems(); // Assuming you have a method to get all cart items
//        return ResponseEntity.ok(cartItems);
//    }
//*/
//    @PostMapping("/add/{foodItemId}/{quantity}")
//    public ResponseEntity<List<CartItem>> addFoodItemToCart(@PathVariable Long foodItemId, @PathVariable int quantity) {
//        cartItemService.addItemToCart(foodItemId, quantity);
//        List<CartItem> cartItems = cartItemService.getCartItems(); // Assuming you have a method to get all cart items
//        return ResponseEntity.ok(cartItems);
//    }
//
//
//
//    @DeleteMapping("/cancel/{cartItemId}")
//    public void cancelItem(@PathVariable Long cartItemId) {
//
//        cartItemService.cancelItem(cartItemId);
//    }
//
//
//}
