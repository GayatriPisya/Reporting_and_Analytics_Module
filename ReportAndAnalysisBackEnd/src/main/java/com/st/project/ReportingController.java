package com.st.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ReportingController {

    @Autowired
    private MonthlyUsersService monthlyUsersService;

    @GetMapping("/monthly-users")
    public ResponseEntity<List<MonthlyUser>> getMonthlyUsers() {
        List<MonthlyUser> monthlyUsers = monthlyUsersService.getAllMonthlyUsers();
        return ResponseEntity.ok(monthlyUsers);
    }
}

