//package com.cime.backend.controller;
//
//import com.cime.backend.model.Payment;
//import com.cime.backend.service.Impl.PaymentImpl;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequiredArgsConstructor
//@RequestMapping("/kitchen/payment")
//public class PaymentController {
//    private final PaymentImpl paymentImpl;
//
//    @PostMapping("/make")
//    public Payment makePayment(@RequestBody Payment payment) {
//        // Calculate total amount based on noOfItems and other factors
//        double totalAmount = calculateTotalAmount(payment);
//        payment.setTotalAmount(totalAmount);
//
//        // Save payment to database
//        return paymentImpl.makePayment(payment);
//    }
//
//    // Helper method to calculate total amount
//    private double calculateTotalAmount(Payment payment) {
//        // Implement your logic here to calculate the total amount
//        // For example:
//        // Assuming each item costs $10
//        double itemPrice = 10;
//        int numOfItems = payment.getNoOfItems();
//        // Add any other factors like taxes, shipping costs, etc.
//        return numOfItems * itemPrice;
//    }
//
//
//}
