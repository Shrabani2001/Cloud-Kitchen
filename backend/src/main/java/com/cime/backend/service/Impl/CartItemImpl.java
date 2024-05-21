//package com.cime.backend.service.Impl;
//
//import com.cime.backend.model.CartItem;
//import com.cime.backend.model.FoodItem;
//import com.cime.backend.model.User;
//import com.cime.backend.repository.CartItemRepository;
//import com.cime.backend.repository.FoodItemRepository;
//import com.cime.backend.service.CartItemService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//
//
//import java.util.List;
//
//@RequiredArgsConstructor
//@Service
//public class CartItemImpl implements CartItemService {
//    private final CartItemRepository cartItemRepository;
//    private final FoodItemRepository foodItemRepository;
//
//
//    @Override
//    public void addItemToCart(Long foodItemId, int quantity) {
//
//            FoodItem foodItem = foodItemRepository.findById(foodItemId)
//                    .orElseThrow(() -> new RuntimeException("Food item not found"));
//
//            CartItem cartItem = new CartItem();
//            cartItem.setFoodItem(foodItem);
//            cartItem.setBought(false);
//            cartItem.setQuantity(quantity);
//            cartItemRepository.save(cartItem);
//        }
//
//
//
//
//
//    @Override
//    public List<CartItem> getCartItems() {
//        return cartItemRepository.findAll();
//    }
//
//    @Override
//    public void buyItem(Long cartItemId) {
//        CartItem cartItem = cartItemRepository.findById(cartItemId)
//                .orElseThrow(() -> new RuntimeException("Item not found"));
//        cartItem.setBought(true);
//        cartItemRepository.save(cartItem);
//    }
//    @Override
//    public void cancelItem(Long cartItemId) {
//        cartItemRepository.deleteById(cartItemId);
//    }
//}
