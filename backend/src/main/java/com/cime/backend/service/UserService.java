package com.cime.backend.service;

import com.cime.backend.model.User;

public interface UserService {
    User createUser(User user);

    User getUserByEmailAndPassword(String email, String password);

}
