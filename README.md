# Place2B

An app to organize all the items in your home

## Run it on your (linux) server:

(Prerequisites: git, node, npm)

1. `git clone https://github.com/NickRTR/Place2B.git`
2. `cd Place2B/`
3. `sh start.sh`

To start and restart the app automatically, create a systemd service:

1. `sudo nano /lib/systemd/system/Place2B.service`
2. paste the following code:

   ```
   [Unit]
   Description = Place2B

   [Service]
   Type           = simple
   LimitNOFILE    = 4096
   Restart        = always
   RestartSec     = 5s
   User           = <user>
   StandardOutput = append:<PathToPlace2B>/Place2B/errors.log
   StandardError  = append:<PathToPlace2B>/Place2B/errors.log
   ExecStart      = sh <PathToPlace2B>/Place2B/start.sh

   [Install]
   WantedBy = multi-user.target
   ```

3. Replace \<user\> and \<PathToPlace2B\> with your user
4. `sudo systemctl enable Place2B.service`
5. `sudo systemctl start Place2B`

### Update

1. `cd /Place2B`
2. `mv ./pocketbase ../`
3. `cd ..`
4. `rm -rf /Place2B`
5. `git clone https://github.com/NickRTR/Place2B.git`
6. cd `/Place2B`
7. `rm -r pocketbase/`
8. `cd ..`
9. `mv pocketbase/ Place2B/`
10 `sudo systemctl restart Place2B`

## Project Requirements

- item's location is divided into building (garage, house, garden, ...), room and position (drawer, sideboard, ...)
- add new buildings, rooms and position
- add new items and assign them a location
- search for items to get their location
- show all items in one building, room or position

## Database

buildings(title)  
rooms(title, _<ins>building</ins>_)  
position(title, _<ins>room</ins>_)

items(title, _<ins>building</ins>_, _<ins>room</ins>_, _<ins>position</ins>_)
