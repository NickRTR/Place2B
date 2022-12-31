# Place2B

An app to organize all the items in your home

## Run it on your (linux) server:

(Prerequisites: git, node, npm)

1. `git clone https://github.com/NickRTR/Place2B.git`
2. `cd Place2B/`
3. `sh start.sh`

<!-- To start and restart the app automatically, create a systemd service:

1. `sudo nano /lib/systemd/system/Place2B.service`
2. add the following script:

   ```
    [Unit]
    Description = Place2B

    [Service]
    Type           = simple
    LimitNOFILE    = 4096
    Restart        = always
    RestartSec     = 5s
    User           = <user>
    StandardOutput = append:/home/<user>/Place2B/errors.log
    StandardError  = append:/home/<user>/Place2B/errors.log
    ExecStart      = sh /home/<user>/Place2B/start.sh

    [Install]
    WantedBy = multi-user.target
   ```

3. Replace <user> with your user
4. `systemctl enable Place2B.service`
5. `systemctl start Place2B` -->

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
