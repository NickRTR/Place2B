# Place2B

An app to organize all the items in your home

## Requirements

- item's location is divided into building (garage, house, garden, ...), room and position (drawer, sideboard, ...)
- add new buildings, rooms and position
- add new items and assign them a location
- search for items to get their location
- show all items in one building, room or position

## Database

buildings(title)  
rooms(title, <u>building</u>)  
position(title, <u>room</u>)

items(title, quantity, <u>building</u>, <u>room</u>, <u>position</u>)
