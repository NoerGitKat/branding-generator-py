# Use: Generates a base layer for Lambda functions

# Remove (if exists) container
docker rm layer-container

# Build a base layer
docker build -t base-layer .

# Rename base-layer to layer-container
docker run --name layer-container base-layer

# Copy the zip artifact for CDK to use
docker cp layer-container:layer.zip . && echo "Created layer.zip with updated base layer!"