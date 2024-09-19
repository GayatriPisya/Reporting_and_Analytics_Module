package com.st.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ReportingController {

    @Autowired
    private MonthlyUsersService monthlyUsersService;

    @GetMapping("/monthly-users")
    public ResponseEntity<List<MonthlyUser>> getMonthlyUsers() {
        List<MonthlyUser> users = monthlyUsersService.getMonthlyUsers();
        return ResponseEntity.ok(users);
    }
}
