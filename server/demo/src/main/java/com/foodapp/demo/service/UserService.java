package com.foodapp.demo.service;

import com.foodapp.demo.model.User;
import com.foodapp.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Lấy tất cả người dùng
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Lấy người dùng theo username
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    // Lưu người dùng mới
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
