package com.st.project;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MonthlyUserRepository extends JpaRepository<MonthlyUser, String> {
    List<MonthlyUser> findAllByYear(int year);
}
