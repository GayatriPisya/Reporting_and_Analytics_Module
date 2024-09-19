package com.st.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MonthlyUsersService {

    @Autowired
    private MonthlyUsersRepository repository;

    public List<MonthlyUser> getMonthlyUsers() {
        return repository.findAll();
    }
}
