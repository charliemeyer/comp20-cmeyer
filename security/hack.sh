#!/bin/bash
for (( i = 0; i < 100; i++ ));
do
    for (( j = 0; j < 100; j++ ));
        do  
            DATA="login=cmeyer$i$j&lat=$i&lng=$j"
            echo $DATA
            curl --data $DATA http://badjobming.herokuapp.com/sendLocation
        done
done
