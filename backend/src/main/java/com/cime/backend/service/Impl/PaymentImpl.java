//package com.cime.backend.service.Impl;
//
//import com.cime.backend.model.Payment;
//import com.cime.backend.repository.PaymentRepository;
//import com.cime.backend.service.PaymentService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//@Service
//@RequiredArgsConstructor
//public class PaymentImpl implements PaymentService {
//    private final PaymentRepository paymentRepository;
//    @Override
//    public double calculateTotalAmount(Payment payment) {
//        // Assuming each item costs $10
//        double itemPrice = 10;
//        int numOfItems = payment.getNoOfItems();
//        // Add any other factors like taxes, shipping costs, etc.
//        return numOfItems * itemPrice;
//    }
//
//    @Override
//    public Payment makePayment(Payment payment) {
//        return paymentRepository.save(payment);
//    }
//}
