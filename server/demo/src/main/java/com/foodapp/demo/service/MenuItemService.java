package com.foodapp.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodapp.demo.model.MenuItem;
import com.foodapp.demo.repository.MenuItemRepository;

@Service
public class MenuItemService {

    @Autowired
    private MenuItemRepository menuItemRepository;

    // Lấy tất cả món ăn
    public List<MenuItem> getAllMenuItems() {
        return menuItemRepository.findAll();
    }

    // Lấy món ăn theo tên
    public MenuItem getMenuItemByName(String name) {
        return menuItemRepository.findByName(name);
    }

    // Lưu món ăn mới
    public MenuItem saveMenuItem(MenuItem menuItem) {
        return menuItemRepository.save(menuItem);
    }

    // Cập nhật món ăn
    public MenuItem updateMenuItem(MenuItem menuItem) {
        return menuItemRepository.save(menuItem);
    }

    // Xóa món ăn theo ID
    public void deleteMenuItem(String id) {
        menuItemRepository.deleteById(id);
    }

}
