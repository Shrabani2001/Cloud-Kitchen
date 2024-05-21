package com.cime.backend.repository;

import com.cime.backend.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository  extends JpaRepository<Admin, Long>{
    Admin findByAdminNameAndPassword(String adminName, String password);
}
