#!usr/bin/env bash

npx wp-env run cli wp rewrite structure "/%postname%/"
npx wp-env run cli wp theme activate komorebi