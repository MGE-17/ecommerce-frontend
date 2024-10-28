# Project Title

BikeSwap

## Overview

BikeSwap is a web application designed for cyclists to buy and sell second-hand bike gear. This platform provides a simple, user-friendly interface for listing products and connecting with buyers and sellers within the cycling community. Whether you’re looking to offload your old gear or score a great deal, BikeSwap makes it easy to connect with like-minded enthusiasts.

### Problem

Finding affordable, high-quality bike gear can be challenging, especially for those looking for second-hand options. Existing platforms often lack a specific focus on cycling gear or charge high fees for listings. Cyclists need a dedicated marketplace to sell their used equipment and find deals on gear without the hassle.

### User Profile

Sellers:

    - Cyclists looking to sell their used bike equipment quickly and easily.
    - Users wanting to manage their listings effectively and engage with potential buyers.

    (depending on the time constraint I will see if I can create 2 differnet logins one for buyers one for sellers
    The more likely option is this will be a plataform and anybody can input what they are selling and when a buyer appers then
    Ill give them the option to contact the seller)

Buyers: - Cyclists interested in browsing for affordable, second-hand bike gear. - Users searching for specific bike parts, gear, or accessories. - Buyers looking to compare prices and negotiate directly with sellers.

### Features

- Users can browse available bike equipment by categories such as bikes, accessories, and parts.
- Users can search for specific items using filters like price, condition, and type of gear.
- Sellers can upload photos and detailed descriptions of their items for sale.
- Sellers can manage their listings, including updating or deleting them.
- Buyers and sellers can message each other to ask questions or negotiate prices. ( this will more likely be that the details of the person selling the item are given to buyer).

## Implementation

### Tech Stack

- Client libraries:
  - react
  - react-router-dom
  - axios
  - Sass
- Server libraries:
  - knex
  - express
  - SQL

### APIs

The application will utilize RESTful APIs for backend communication, facilitating user authentication, product listing management, and messaging between users (if implemented)

### Sitemap

- Home page ( Display featured listings and categories)
- User login
- Browse Listings: display all listings available with filtering options
- Product detail page: Show detailed information about a selected item.
- Register (if time/complexity allows)
- Login (if time/complexity allows)

### Data

User:
ID
Name
Email
Password (hashed with bcrypt)
Strava User ID

Goals:
User ID (foreign key)
Goal Type (e.g., distance, time)
Target Value (e.g., 500 km)
Progress

### Endpoints

https://www.figma.com/design/7LqMmKQIvOC0AZAgM7imYr/Full-E-Commerce-Website-UI-UX-Design-(Community)?node-id=34-213&t=VrS661ff2dKB1nNM-4
(only the first page)
