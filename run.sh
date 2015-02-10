#! /bin/sh

#export NODE_ENV=production
export NODE_ENV=development
export PORT=80

supervisor -w app.js,routes app
#node app

