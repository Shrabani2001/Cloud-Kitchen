package com.cime.backend.controller;


import com.cime.backend.model.Admin;

import com.cime.backend.model.User;
import com.cime.backend.repository.AdminRepository;
import com.cime.backend.service.AdminService;
import com.cime.backend.service.Impl.AdminImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;



@RestController
@RequiredArgsConstructor
@RequestMapping("/kitchen/admin")
public class AdminController {

    private final AdminImpl adminImpl;
    private final AdminRepository adminRepository;



    @PostMapping("/login")
    public Admin getAdminByadminNameAndPassword(String adminName, String password) {
        return adminRepository.findByAdminNameAndPassword(adminName, password);
    }


}

