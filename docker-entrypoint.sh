#!/bin/sh

echo "\nGenerating vectors...\n"

python ./scripts/generate_vectors.py

exec "$@"
