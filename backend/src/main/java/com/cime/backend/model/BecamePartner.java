package com.cime.backend.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Entity
@Getter
@Setter
@Table(name = "partners")
public class BecamePartner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int partnerId;
    private String name;
    private String email;
    private String password;
    private long phnNo;
    private String companyDetails;
}
