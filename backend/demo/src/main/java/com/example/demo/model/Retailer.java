package com.example.demo.model;


import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.List;

@Entity
@Table(name="retailer")
public class Retailer {
        @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;
    private String email;
    private String password;
    private String mobilenumber;
    private String location;
    private String shopName;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> fertilizer;
    
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> insecticide;
    
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> herbicide;
    
    private String shopImageUrl; // URL or file path for the shop image

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobilenumber() {
        return mobilenumber;
    }

    public void setMobilenumber(String mobilenumber) {
        this.mobilenumber = mobilenumber;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public List<String> getFertilizer() {
        return fertilizer;
    }

    public void setFertilizer(List<String> fertilizer) {
        this.fertilizer = fertilizer;
    }

    public List<String> getInsecticide() {
        return insecticide;
    }

    public void setInsecticide(List<String> insecticide) {
        this.insecticide = insecticide;
    }

    public List<String> getHerbicide() {
        return herbicide;
    }

    public void setHerbicide(List<String> herbicide) {
        this.herbicide = herbicide;
    }

    public String getShopImageUrl() {
        return shopImageUrl;
    }

    public void setShopImageUrl(String shopImageUrl) {
        this.shopImageUrl = shopImageUrl;
    }

        
}
