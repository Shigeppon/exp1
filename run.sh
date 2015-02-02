#! /bin/sh

export NODE_ENV=production
export PORT=8080

supervisor -w app.js app
#node app

