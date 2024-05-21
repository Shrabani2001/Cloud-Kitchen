package com.cime.backend.service.Impl;

import com.cime.backend.model.BecamePartner;
import com.cime.backend.repository.BecamePartnerRepository;
import com.cime.backend.service.BecamePartnerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class BecamePartnerImpl implements BecamePartnerService {
    private final BecamePartnerRepository becamePartnerRepository;
    @Override
    public BecamePartner createPartner(BecamePartner becamePartner) {
        becamePartnerRepository.save(becamePartner);
        return becamePartner;

    }
}
