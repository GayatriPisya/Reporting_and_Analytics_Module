package com.st.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LoginAnalyticsService {

    @Autowired
    private UserLoginRepository userLoginRepository;

    public List<UserLogin> getLogins() {
        return userLoginRepository.findAll(); // Or apply filters based on the month
    }
}
