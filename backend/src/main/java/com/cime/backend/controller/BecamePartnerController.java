package com.cime.backend.controller;

import com.cime.backend.model.BecamePartner;

import com.cime.backend.service.Impl.BecamePartnerImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/kitchen/becamepartner")
@RequiredArgsConstructor
public class BecamePartnerController {

private final BecamePartnerImpl becamePartnerImpl;
    @PostMapping("/create")
    public BecamePartner addPartner(@RequestBody BecamePartner becamePartner){
return becamePartnerImpl.createPartner(becamePartner);

    }

}
