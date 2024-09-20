package com.st.project;

import java.time.LocalDateTime;
import java.time.Month;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {

    @Autowired
    private UserLoginRepository userLoginRepository;

    @Autowired
    private MonthlyUsersRepository monthlyUsersRepository;

    @PostMapping("/login")
    public String loginUser(@RequestParam String username) {
        // Save the login information
        UserLogin userLogin = new UserLogin();
        userLogin.setUsername(username);
        userLogin.setLoginTime(LocalDateTime.now());
        userLoginRepository.save(userLogin);

        // Increment monthly user count
        String currentMonth = Month.of(LocalDateTime.now().getMonthValue()).name();
        MonthlyUser monthlyUser = monthlyUsersRepository.findById(currentMonth).orElse(new MonthlyUser());
        monthlyUser.setMonth(currentMonth);
        monthlyUser.setCount(monthlyUser.getCount() != null ? monthlyUser.getCount() + 1 : 1);
        monthlyUsersRepository.save(monthlyUser);

        return "redirect:/welcome";
    }
}
