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
    private LoginAnalyticsService loginAnalyticsService;

    @GetMapping("/logins")
    public ResponseEntity<List<UserLogin>> getLogins() {
        List<UserLogin> logins = loginAnalyticsService.getLogins();
        return ResponseEntity.ok(logins);
    }
}
