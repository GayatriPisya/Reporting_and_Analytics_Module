package com.st.project;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MonthlyUsersRepository extends JpaRepository<MonthlyUser, String> {
}
