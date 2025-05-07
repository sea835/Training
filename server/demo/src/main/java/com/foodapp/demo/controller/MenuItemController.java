package com.foodapp.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.demo.model.MenuItem;
import com.foodapp.demo.service.MenuItemService;

@RestController
@RequestMapping("/api/menu")
public class MenuItemController {

    @Autowired
    private MenuItemService menuItemService;

    @GetMapping("/items")
    public List<MenuItem> getAllMenuItems() {
        return menuItemService.getAllMenuItems();
    }

    @PostMapping("/add")
    public MenuItem saveMenuItem(@RequestBody MenuItem menuItem) {
        return menuItemService.saveMenuItem(menuItem);
    }

    @PostMapping("/update")
    public MenuItem updateMenuItem(@RequestBody MenuItem menuItem) {
        return menuItemService.updateMenuItem(menuItem);
    }

    @PostMapping("/delete")
    public void deleteMenuItem(@RequestBody String id) {
        menuItemService.deleteMenuItem(id);
    }

    @GetMapping("/{name}")
    public MenuItem getMenuItemByName(@RequestBody String name) {
        return menuItemService.getMenuItemByName(name);
    }
}
