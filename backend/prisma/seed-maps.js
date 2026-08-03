import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const maps = [
  {
    id: 1,
    name: "Isle of Dawn",
    slug: "isle-of-dawn",
    displayOrder: 1,
    subtitle: "1st Map",
    introduction:
      "Free lost spirits and follow the bell to the temple",
    caption:
      "This is where your journey begins, enjoy the view and the music!",
    imageAlt: "Isle of Dawn",
  },
  {
    id: 2,
    name: "Daylight Prairie",
    slug: "daylight-prairie",
    displayOrder: 2,
    subtitle: "2nd Map",
    introduction:
      "Ring the bell towers and reveal your path",
    caption:
      "Enjoy the beauty of the Daylight Prairie!",
    imageAlt: "Daylight Prairie",
  },
  {
    id: 3,
    name: "Hidden Forest",
    slug: "hidden-forest",
    displayOrder: 3,
    subtitle: "3rd Map",
    introduction:
      "Protect your light and find the source of Ancient Power",
    caption:
      "Don't stay too long in the rain and waters.",
    imageAlt: "Hidden Forest",
  },
  {
    id: 4,
    name: "Valley of Triumph",
    slug: "valley-of-triumph",
    displayOrder: 4,
    subtitle: "4th Map",
    introduction:
      "Race down the ridge, and the city gates will open to honor you",
    caption:
      "Train your reflexes and be ready to run, jump, and slide through the valley's two races.",
    imageAlt: "Valley of Triumph",
  },
  {
    id: 5,
    name: "Golden Wasteland",
    slug: "golden-wasteland",
    displayOrder: 5,
    subtitle: "5th Map",
    introduction:
      "Beyond the barren wastes, the Vault of Knowledge awaits",
    caption:
      "Krills are waiting to ambush you. Be careful and keep your light safe.",
    imageAlt: "Golden Wasteland",
  },
  {
    id: 6,
    name: "Vault of Knowledge",
    slug: "vault-of-knowledge",
    displayOrder: 6,
    subtitle: "6th Map",
    introduction:
      "Climb the Vault, its wisdom awaits",
    caption:
      "Kindness is the key to open the Vault.",
    imageAlt: "Vault of Knowledge",
  },
  {
    id: 7,
    name: "Eye of Eden",
    slug: "eye-of-eden",
    displayOrder: 7,
    subtitle: "7th Map",
    introduction:
      "Push into the darkness",
    caption:
      "Be ready to face the darkness and the unknown!",
    imageAlt: "Eye of Eden",
  },
  {
    id: 8,
    name: "Aviary Village",
    slug: "aviary-village",
    displayOrder: 8,
    subtitle: "8th Map",
    introduction:
      "The New Homespace",
    caption:
      "The forgotten part of the Sky Kingdom is returning.",
    imageAlt: "Aviary Village",
  },
];

const mapSections = [
  {
    type: "INFO",
    heading: "Info",
    displayOrder: 1,
  },
  {
    type: "REGULAR_SPIRITS",
    heading: "Regular Spirits",
    displayOrder: 2,
  },
  {
    type: "SEASON_SPIRITS",
    heading: "Season Spirits",
    displayOrder: 3,
  },
  {
    type: "WINGED_LIGHTS",
    heading: "Winged Lights",
    displayOrder: 4,
  },
  {
    type: "MAP_SHRINES",
    heading: "Map Shrines",
    displayOrder: 5,
  },
  {
    type: "DYE_RATIO",
    heading: "Dye Ratio",
    displayOrder: 6,
  },
];

async function seedMaps() {
  console.log("Seeding SkyKidHero Maps...");

  for (const mapRecord of maps) {
    await prisma.map.upsert({
      where: {
        id: mapRecord.id,
      },
      create: {
        ...mapRecord,
        published: true,
      },
      update: {
        name: mapRecord.name,
        slug: mapRecord.slug,
        displayOrder: mapRecord.displayOrder,
        subtitle: mapRecord.subtitle,
        imageAlt: mapRecord.imageAlt,
        published: true,
      },
    });

    for (const section of mapSections) {
      await prisma.mapSection.upsert({
        where: {
          mapId_type: {
            mapId: mapRecord.id,
            type: section.type,
          },
        },
        create: {
          mapId: mapRecord.id,
          type: section.type,
          heading: section.heading,
          displayOrder: section.displayOrder,
          published: true,
        },
        update: {
          heading: section.heading,
          displayOrder: section.displayOrder,
          published: true,
        },
      });
    }

    console.log(`✓ ${mapRecord.name}`);
  }

  const mapCount = await prisma.map.count();
  const sectionCount = await prisma.mapSection.count();

  console.log("");
  console.log(`Maps available: ${mapCount}`);
  console.log(`Map sections available: ${sectionCount}`);
}

seedMaps()
  .catch((error) => {
    console.error("Map seed failed:");
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });