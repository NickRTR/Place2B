#!/bin/bash

mv ./pocketbase ../
cd ..
rm -rf /Place2B
git clone https://github.com/NickRTR/Place2B.git
cd /Place2B
rm -r pocketbase/
cd ..
mv pocketbase/ Place2B/
sudo systemctl restart Place2B