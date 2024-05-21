package com.cime.backend.service;

import com.cime.backend.model.Admin;

public interface AdminService {
    Admin getAdminByadminNameAndPassword(String adminName, String password);

}
