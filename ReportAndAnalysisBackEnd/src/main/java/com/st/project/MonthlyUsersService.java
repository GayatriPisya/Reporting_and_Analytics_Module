package com.st.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MonthlyUsersService {

    @Autowired
    private MonthlyUsersRepository repository;

    public List<MonthlyUser> getMonthlyUsers() {
        return repository.findAll();
    }
}
