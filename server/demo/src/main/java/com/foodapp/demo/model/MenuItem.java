package com.foodapp.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "menu_items")
public class MenuItem {
    // name: "Phở bò",
    // description: "Phở bò tái, chín",
    // price: 35000,
    // availableDate: ISODate("2025-05-09"),
    // createdBy: db.users.findOne({ username: "chef1" })._id,
    // status: "ACTIVE",
    // image: "dish3.jpg",

    @Id
    private String id;
    private String name;
    private String description;
    private double price;
    private String availableDate;
    private String createdBy; // userId of the chef who created the menu item
    private String status; // ACTIVE, INACTIVE, DELETED
    private String image; // URL or path to the image of the menu item

}
