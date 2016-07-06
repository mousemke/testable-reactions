#!/bin/bash -ex

if [ "$1" == "PRODUCTION" ]; then
    export PRODUCTION=1
fi

npm prune
npm install
npm run build
npm test
