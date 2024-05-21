//package com.cime.backend.model;
//
//import jakarta.persistence.*;
//import lombok.Getter;
//import lombok.Setter;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Getter
//@Setter
//public class Order {
//
//        @Id
//        @GeneratedValue(strategy = GenerationType.IDENTITY)
//        private Long id;
//        @ManyToOne
//        private User user;
//        @OneToMany(mappedBy = "order")
//        private List<CartItem> items = new ArrayList<>();
//        private double totalPrice;
//        private boolean paid;
//}
