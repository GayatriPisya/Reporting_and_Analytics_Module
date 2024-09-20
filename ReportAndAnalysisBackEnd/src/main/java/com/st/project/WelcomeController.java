package com.st.project;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WelcomeController {
    @GetMapping("/login")
    public String welcome() {
        return "redirect:/login.html";  // Show the login page at the root URL
    }

    @GetMapping("/welcome")
    public String welcomePage() {
        return "redirect:/welcome.html";  // Show the welcome page after login
    }
}
