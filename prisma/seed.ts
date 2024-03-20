import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prisma = new PrismaClient();

async function main() {
  const dataPath = join(__dirname, "./data.json");
  const data = JSON.parse(readFileSync(dataPath, "utf-8"));

  // Seed Images
  for (const image of data.images) {
    await prisma.image.create({
      data: {
        ...image,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
  }

  // Seed Categories
  for (const category of data.categories) {
    await prisma.category.create({
      data: {
        ...category,
        image: {
          connect: { id: category.image },
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
  }

  // Seed Collections
  for (const collection of data.collections) {
    await prisma.collection.create({
      data: {
        ...collection,
        image: {
          connect: { id: collection.image },
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
  }

  // Seed Colors
  for (const color of data.colors) {
    await prisma.color.create({
      data: {
        ...color,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
  }

  // Seed Sizes
  for (const size of data.sizes) {
    await prisma.size.create({
      data: {
        ...size,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
  }

  // Seed Products
  for (const product of data.products) {
    await prisma.product.create({
      data: {
        ...product,
        colors: {
          connect: product.colors.map((colorId: string) => ({ id: colorId })),
        },
        sizes: {
          connect: product.sizes.map((sizeId: string) => ({ id: sizeId })),
        },
        categories: {
          connect: product.categories.map((categoryId: string) => ({
            id: categoryId,
          })),
        },
        collections: {
          connect: product.collections.map((collectionId: string) => ({
            id: collectionId,
          })),
        },
        images: {
          connect: product.images.map((imageId: string) => ({ id: imageId })),
        },
        reviews: {
          create: product.reviews,
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
