package com.foodapp.demo.repository;

import com.foodapp.demo.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    // Các phương thức tùy chỉnh nếu cần, ví dụ:
    User findByUsername(String username);
}
