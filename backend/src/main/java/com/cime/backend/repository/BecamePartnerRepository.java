package com.cime.backend.repository;

import com.cime.backend.model.BecamePartner;
import com.cime.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BecamePartnerRepository extends JpaRepository<BecamePartner,Integer>{

}
