#!/bin/bash
value=$(<current)
let "value+=1" 
echo "$value" > current

git config user.name github-actions
git config user.email github-actions@github.com
git add .
git commit -m "incremented"
git push

