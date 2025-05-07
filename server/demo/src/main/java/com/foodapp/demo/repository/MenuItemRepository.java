package com.foodapp.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.foodapp.demo.model.MenuItem;

public interface MenuItemRepository extends MongoRepository<MenuItem, String> {
    // Các phương thức tùy chỉnh nếu cần, ví dụ:
    MenuItem findByName(String name);

}
