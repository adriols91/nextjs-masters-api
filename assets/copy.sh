#!/bin/bash

# Define the source file path
source_file="./no-image.webp"

destinations=(
    "./categories/t-shirts.webp"
    "./categories/jeans.webp"
    "./categories/dresses.webp"
    "./categories/jackets.webp"
    "./categories/shoes.webp"
    "./categories/accessories.webp"
    "./categories/sportswear.webp"
    "./categories/sweaters.webp"
    "./categories/shorts.webp"
    "./categories/outerwear.webp"
    "./collections/summer-2024.webp"
    "./collections/winter-2024.webp"
    "./collections/spring-2024.webp"
    "./collections/autumn-2024.webp"
    "./collections/casual-wear.webp"
    "./collections/formal-wear.webp"
    "./collections/sport-collection.webp"
    "./collections/eco-collection.webp"
    "./collections/limited-edition.webp"
    "./collections/sale.webp"
    "./products/slim-jeans.webp"
    "./products/basic-tee.webp"
    "./products/summer-maxi-dress.webp"
    "./products/classic-leather-jacket.webp"
    "./products/running-sneakers.webp"
    "./products/elegant-silk-scarf.webp"
    "./products/active-gym-shorts.webp"
    "./products/cozy-knit-sweater.webp"
    "./products/casual-denim-shorts.webp"
    "./products/heavy-winter-coat.webp"
    "./products/professional-blazer.webp"
    "./products/light-linen-shirt.webp"
    "./products/pique-polo-shirt.webp"
    "./products/utility-cargo-pants.webp"
    "./products/stretch-yoga-pants.webp"
    "./products/flowy-maxi-skirt.webp"
    "./products/beach-ready-bikini.webp"
    "./products/athletic-track-jacket.webp"
    "./products/comfy-hoodie.webp"
    "./products/warm-beanie.webp"
    "./products/everyday-sneakers.webp"
    "./products/chic-high-heels.webp"
    "./products/versatile-ankle-boots.webp"
    "./products/summer-sandals.webp"
    "./products/classic-loafers.webp"
    "./products/timeless-wrist-watch.webp"
    "./products/stylish-sunglasses.webp"
    "./products/durable-leather-belt.webp"
    "./products/spacious-tote-bag.webp"
    "./products/evening-clutch.webp"
    "./products/soft-cardigan.webp"
    "./products/insulated-puffer-jacket.webp"
    "./products/waterproof-raincoat.webp"
    "./products/fleece-pullover.webp"
    "./products/sleek-turtleneck.webp"
    "./products/trendy-mesh-top.webp"
    "./products/floral-midi-dress.webp"
    "./products/tailored-cropped-pants.webp"
    "./products/one-piece-jumpsuit.webp"
    "./products/casual-romper.webp"
    "./products/formal-bow-tie.webp"
    "./products/elegant-cufflinks.webp"
    "./products/luxury-leather-gloves.webp"
    "./products/warm-wool-scarf.webp"
    "./products/comfy-knee-socks.webp"
    "./products/sporty-baseball-cap.webp"
    "./products/flexible-leggings.webp"
    "./products/cycling-shorts.webp"
    "./products/breathable-tank-top.webp"
    "./products/layering-vest.webp"
)

# Loop through the destinations and copy the source file to each location
for dest in "${destinations[@]}"; do
    cp "$source_file" "$dest"
done
