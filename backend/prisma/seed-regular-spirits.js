import { PrismaClient } from "@prisma/client";
import { regularSpiritsSeed } from "./data/regularSpirits.seed.js";

const prisma = new PrismaClient();

async function assertMapsExist() {
  const requiredMapIds = [
    ...new Set(
      regularSpiritsSeed.map(
        (spirit) => spirit.mapId
      )
    ),
  ];

  const maps = await prisma.map.findMany({
    where: {
      id: {
        in: requiredMapIds,
      },
      deletedAt: null,
    },
    select: {
      id: true,
      name: true,
    },
  });

  const foundIds = new Set(
    maps.map((map) => map.id)
  );

  const missingIds =
    requiredMapIds.filter(
      (id) => !foundIds.has(id)
    );

  if (missingIds.length > 0) {
    throw new Error(
      `Cannot seed Regular Spirits. Missing Map IDs: ${missingIds.join(", ")}`
    );
  }
}

async function syncCollectibles(
  tx,
  spiritId,
  collectibles
) {
  const displayOrders =
    collectibles.map(
      (item) => item.displayOrder
    );

  await tx.spiritCollectible.deleteMany({
    where: {
      spiritId,
      ...(displayOrders.length > 0
        ? {
            displayOrder: {
              notIn: displayOrders,
            },
          }
        : {}),
    },
  });

  for (const item of collectibles) {
    await tx.spiritCollectible.upsert({
      where: {
        spiritId_displayOrder: {
          spiritId,
          displayOrder:
            item.displayOrder,
        },
      },

      create: {
        spiritId,
        label: item.label,
        image: item.image,
        currency: item.currency,
        price: item.price,
        displayOrder:
          item.displayOrder,
      },

      update: {
        label: item.label,
        currency: item.currency,
        price: item.price,

        /*
         * Preserve image/imagePublicId
         * if media is uploaded later
         * through the CMS.
         */
      },
    });
  }
}

async function syncTreeCosts(
  tx,
  spiritId,
  treeCosts
) {
  const displayOrders =
    treeCosts.map(
      (item) => item.displayOrder
    );

  await tx.spiritTreeCost.deleteMany({
    where: {
      spiritId,
      ...(displayOrders.length > 0
        ? {
            displayOrder: {
              notIn: displayOrders,
            },
          }
        : {}),
    },
  });

  for (const item of treeCosts) {
    await tx.spiritTreeCost.upsert({
      where: {
        spiritId_displayOrder: {
          spiritId,
          displayOrder:
            item.displayOrder,
        },
      },

      create: {
        spiritId,
        candles: item.candles,
        hearts: item.hearts,
        ascendedCandles:
          item.ascendedCandles,
        displayOrder:
          item.displayOrder,
      },

      update: {
        candles: item.candles,
        hearts: item.hearts,
        ascendedCandles:
          item.ascendedCandles,
      },
    });
  }
}

async function seedRegularSpirit(
  tx,
  seed
) {
  const {
    collectibles,
    treeCosts,
    ...spiritData
  } = seed;

  const spirit =
    await tx.spirit.upsert({
      where: {
        code: spiritData.code,
      },

      create: {
        ...spiritData,
        type: "REGULAR",
      },

      update: {
        mapId: spiritData.mapId,
        type: "REGULAR",
        name: spiritData.name,
        category:
          spiritData.category,
        reliveType:
          spiritData.reliveType,
        difficultyLevel:
          spiritData.difficultyLevel,
        difficultyTypes:
          spiritData.difficultyTypes,
        guideVideoUrl:
          spiritData.guideVideoUrl,
        directions:
          spiritData.directions,
        displayOrder:
          spiritData.displayOrder,
        published:
          spiritData.published,
        deletedAt: null,

        /*
         * Preserve icon/detail media if
         * uploaded later through CMS.
         */
      },

      select: {
        id: true,
        code: true,
      },
    });

  await syncCollectibles(
    tx,
    spirit.id,
    collectibles
  );

  await syncTreeCosts(
    tx,
    spirit.id,
    treeCosts
  );

  return spirit;
}

async function main() {
  await assertMapsExist();

  const seeded = [];

  for (
    const seed
    of regularSpiritsSeed
  ) {
    const spirit =
      await prisma.$transaction(
        async (tx) => {
          return seedRegularSpirit(
            tx,
            seed
          );
        }
      );

    seeded.push(spirit);

    console.log(
      `✅ ${spirit.code}`
    );
  }

  console.log(
    `\n✅ Seeded ${seeded.length} Regular Spirits.`
  );

  const byMap =
    regularSpiritsSeed.reduce(
      (counts, spirit) => {
        counts[spirit.mapId] =
          (counts[spirit.mapId] || 0) +
          1;

        return counts;
      },
      {}
    );

  console.table(byMap);
}

main()
  .catch((error) => {
    console.error(
      "❌ Regular Spirit seed failed:",
      error
    );

    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
