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
rooms(title, <ins>building</ins>)  
position(title, <ins>room</ins>)

items(title, quantity, <ins>building</ins>, <ins>room</ins>, <ins>position</ins>)

## Run on Server:

1. `npm run build`
2. `npm run db & npm run preview -- --host`
