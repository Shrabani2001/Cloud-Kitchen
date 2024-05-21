//package com.cime.backend.service.Impl;
//
//import com.cime.backend.model.CartItem;
//import com.cime.backend.model.Order;
//import com.cime.backend.model.User;
//import com.cime.backend.repository.OrderRepository;
//import com.cime.backend.service.OrderService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@RequiredArgsConstructor
//@Service
//public class OrderImpl implements OrderService {
//
//    private final OrderRepository orderRepository;
//
//    @Override
//    public Order placeOrder(User user, List<CartItem> cartItems) {
//        Order order = new Order();
//        order.setUser(user);
//        order.setItems(cartItems);
//        order.setTotalPrice(cartItems.stream().mapToDouble(item -> item.getFoodItem().getPrice() * item.getQuantity()).sum());
//        return orderRepository.save(order);
//    }
//
//    @Override
//    public void processPayment(Order order) {
//        order.setPaid(true);
//        orderRepository.save(order);
//    }
//}
