import prisma
  from "../src/config/prisma.js";

import {
  wingedLightsSeedData,
} from "./data/wingedLights.seed.js";

function groupByMap(
  records
) {
  return records.reduce(
    (groups, record) => {
      const key =
        record.mapId;

      if (!groups.has(key)) {
        groups.set(
          key,
          []
        );
      }

      groups
        .get(key)
        .push(record);

      return groups;
    },
    new Map()
  );
}

async function seedMapWingedLights(
  mapId,
  records
) {
  const map =
    await prisma.map.findFirst({
      where: {
        id: mapId,
        deletedAt: null,
      },

      select: {
        id: true,
        name: true,
      },
    });

  if (!map) {
    throw new Error(
      `Map ${mapId} was not found. Seed Maps first.`
    );
  }

  await prisma.$transaction(
    async (tx) => {
      const existing =
        await tx.wingedLight.findMany({
          where: {
            mapId,
          },

          select: {
            id: true,
            code: true,
          },
        });

      /*
       * Temporarily move existing
       * display orders out of the
       * positive range.
       *
       * This prevents unique-order
       * conflicts if seed ordering
       * changes later.
       */
      for (
        const item
        of existing
      ) {
        await tx.wingedLight.update({
          where: {
            id: item.id,
          },

          data: {
            displayOrder:
              -item.id,
          },
        });
      }

      for (
        const record
        of records
      ) {
        const {
          code,
          ...data
        } = record;

        await tx.wingedLight.upsert({
          where: {
            code,
          },

          create: {
            code,
            ...data,
          },

          update: {
            mapId:
              data.mapId,

            label:
              data.label,

            groupKey:
              data.groupKey,

            seasonGroupKey:
              data.seasonGroupKey,

            directions:
              data.directions,

            displayOrder:
              data.displayOrder,

            published:
              data.published,

            deletedAt: null,

            /*
             * image and
             * imagePublicId are
             * intentionally omitted.
             */
          },
        });
      }
    }
  );

  console.log(
    `✅ ${map.name}: ${records.length} Winged Lights`
  );
}

async function main() {
  const grouped =
    groupByMap(
      wingedLightsSeedData
    );

  let total = 0;

  for (
    const [
      mapId,
      records,
    ]
    of grouped
  ) {
    await seedMapWingedLights(
      mapId,
      records
    );

    total +=
      records.length;
  }

  console.log(
    `\n✨ Winged Light seed complete: ${total} records`
  );
}

main()
  .catch((error) => {
    console.error(
      "❌ Winged Light seed failed:"
    );

    console.error(
      error
    );

    process.exitCode =
      1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });