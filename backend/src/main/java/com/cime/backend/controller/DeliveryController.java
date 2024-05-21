//package com.cime.backend.controller;
//
//import com.cime.backend.repository.DeliveryRequestRepository;
//import com.cime.backend.service.AdminService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequiredArgsConstructor
//@RequestMapping("/kitchen/delivery")
//public class DeliveryController {
//
//    private final DeliveryRequestRepository deliveryRequestRepository;
//
//    private final AdminService adminService;
//
//    @PostMapping("/validate/{deliveryRequestId}")
//    public boolean validateDeliveryRequest(@PathVariable Long deliveryRequestId) {
//        // Assuming admin is authenticated and authorized
//        return adminService.validateDeliveryRequest(deliveryRequestId);
//    }
//}
