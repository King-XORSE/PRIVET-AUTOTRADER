#!/bin/bash

echo "Enter Docker registry username: "
read USERNAME
echo "Enter Docker registry password: "
read PASSWORD

docker login -u ${USERNAME} --password-stdin ${PASSWORD} registry.23alice.duckdns.org

curl https://minio.23alice.duckdns.org/config/config > ~/.kube/config