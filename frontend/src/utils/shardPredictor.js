const REALMS = [
  "Daylight Prairie",
  "Hidden Forest",
  "Valley of Triumph",
  "Golden Wasteland",
  "Vault of Knowledge",
];

// Example locations.
// Replace these with the actual location table.
const BLACK_LOCATIONS = {
  "Daylight Prairie": ["Bird Nest", "Sanctuary Islands"],
  "Hidden Forest": ["Brook", "Boneyard"],
  "Valley of Triumph": ["Ice Rink", "Village of Dreams", ],
  "Golden Wasteland": ["Broken Temple", "Graveyard"],
  "Vault of Knowledge": ["Starlight Desert", "Repository"],
};

const RED_LOCATIONS = {
  "Daylight Prairie": [
    "Butterfly Fields",
    "Village Islands",
    "Sanctuary Islands",
  ],
  "Hidden Forest": [
    "Brook",
    "Boneyard",
    "Treehouse",
  ],
  "Valley of Triumph": [
    "Village of Dreams",
    "Ice Rink",
    "Hermit Valley",
  ],
  "Golden Wasteland": [
    "Graveyard",
    "Battlefield",
    "Broken Temple",
  ],
  "Vault of Knowledge": [
    "Repository",
    "Starlight Desert",
    "Archives",
  ],
};
// Timing pattern repeats every 12 days.
const TIMING_PATTERN = [2, 1, 3, 5, 0, 4, 1, 2, 0, 5, 3, 1, 4, 0, 5]; //[2, 1, 3, 0, 4, 1, 2, 0, 3, 1, 4, 0];

// Example UTC schedule.
// Replace these with your preferred timezone or convert later.
const TIME_INTERVALS = [
  {
    id: 0,
    windows: [
      { start: "16:58:40", end: "20:50:00" },
      { start: "00:58:40", end: "04:50:00" },
      { start: "08:58:40", end: "12:50:00" },
    ],
  },
  {
    id: 1,
    windows: [
      { start: "17:28:40", end: "21:20:00" },
      { start: "23:28:40", end: "3:20:00" },
      { start: "5:58:40", end: "9:20:00" },
    ],
  },
  {
    id: 2,
    windows: [
      { start: "18:38:40", end: "22:30:00" },
      { start: "00:38:40", end: "4:30:00" },
      { start: "6:38:40", end: "10:30:00" },
    ],
  },
  {
    id: 3,
    windows: [
      { start: "19:58:40", end: "23:50:00" },
      { start: "3:58:40", end: "7:50:00" },
      { start: "11:58:40", end: "15:50:00" },
    ],
  },
  {
    id: 4,
    windows: [
      { start: "20:58:40", end: "00:50:00" },
      { start: "4:58:40", end: "8:50:00" },
      { start: "12:58:40", end: "16:50:00" },
    ],
  },
  {
    id: 5,
    windows: [
      { start: "0", end: "0" },
    ],
  },
];

function toDate(baseDate, time) {
   const [hour, minute, second] = time.split(":").map(Number);

  return new Date(
    baseDate.getFullYear(),
    baseDate.getMonth(),
    baseDate.getDate(),
    hour,
    minute,
    second || 0,
    0
  );
}

function formatCountdown(ms) {
  if (ms <= 0) return "00:00:00";

  const totalSeconds = Math.floor(ms / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ].join(":");
}

export function predictShard(date = new Date()) {
   const day = date.getDate();

  const realm = REALMS[(day - 1) % 5];

  const type = day % 2 ? "Red" : "Black";

  let location="";

  if (type === "Black") {
    const group = day % 4 === 0 ? 0 : 1;

    location =
      BLACK_LOCATIONS[realm]?.[
        group % (BLACK_LOCATIONS[realm]?.length || 1)
      ] || "";
  } else {
    const group = ((3 - (day % 3)) % 3) + 2;

    location =
      RED_LOCATIONS[realm]?.[
        (group - 2) % (RED_LOCATIONS[realm]?.length || 1)
      ] || "";
  }

  // Timing cycle repeats every 12 days
   const timingIndex = TIMING_PATTERN[(day - 1) % TIMING_PATTERN.length];

   const intervals =
    TIME_INTERVALS.find((t) => t.id === timingIndex)?.windows || [];

    const now = new Date();

  let isActive = false;
  let currentInterval = null;
  let nextInterval = null;
  let countdown = "00:00:00";
  let progress = 0;
  let status = "Finished";

  for (const interval of intervals) {
    const start = toDate(date, interval.start);
    const end = toDate(date, interval.end);

    if (end < start) {
      end.setDate(end.getDate() + 1);
    }

    // Current eruption
    if (now >= start && now <= end) {
      isActive = true;
      currentInterval = interval;
      status = "Active";

      const total = end.getTime() - start.getTime();
      const elapsed = now.getTime() - start.getTime();

      progress = Math.round((elapsed / total) * 100);
      countdown = formatCountdown(end.getTime() - now.getTime());

      break;
    }

    // Next eruption
    if (!nextInterval && now < start) {
      nextInterval = interval;
      status = "Upcoming";
      countdown = formatCountdown(start.getTime() - now.getTime());
    }
  }

  if (!isActive && !nextInterval) {
    status = "Finished";
    progress = 100;
  }

  return {
    date: date.toDateString(),
    realm,
    type,
    location,
    intervals,

    // Live props
    isActive,
    currentInterval,
    nextInterval,
    countdown,
    progress,
    status,
  };
}