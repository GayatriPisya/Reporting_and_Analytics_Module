package com.st.project;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "monthly_users")
public class MonthlyUser {

    @Id
    private String month;
    private int count;

    // No-argument constructor (required by JPA)
    public MonthlyUser() {}

    // Getters and setters
    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
