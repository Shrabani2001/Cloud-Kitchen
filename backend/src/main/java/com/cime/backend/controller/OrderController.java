//package com.cime.backend.controller;
//
//import com.cime.backend.model.CartItem;
//import com.cime.backend.model.Order;
//import com.cime.backend.model.User;
//import com.cime.backend.repository.UserRepository;
//import com.cime.backend.service.Impl.CartItemImpl;
//import com.cime.backend.service.Impl.OrderImpl;
//import com.cime.backend.service.OrderService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RequiredArgsConstructor
//@RestController
//@RequestMapping("/kitchen/order")
//public class OrderController {
//    private final OrderImpl orderImpl;
//    private final UserRepository userRepository;
//    private final CartItemImpl cartItemImpl;
//
//    @PostMapping("/place")
//    public void placeOrder(@RequestParam Long userId) {
//        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
//        List<CartItem> cartItems = cartItemImpl.getCartItems(user);
//        Order order = orderImpl.placeOrder(user, cartItems);
//        orderImpl.processPayment(order);
//        cartItemImpl.clearCart(user);
//    }
//
//}
