package com.cime.backend.controller;

import com.cime.backend.model.User;
import com.cime.backend.service.Impl.UserImpl;
import com.cime.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/kitchen/user")
@RequiredArgsConstructor
public class UserController {


    private final UserImpl userImpl;

    @PostMapping("/create")
    public User addUser(@RequestBody User user){

        return userImpl.createUser(user);
    }

    @PostMapping("/login")
    public User getUser(@RequestBody User user){
     return userImpl.getUserByEmailAndPassword(user.getEmail(), user.getPassword());
    }


}
