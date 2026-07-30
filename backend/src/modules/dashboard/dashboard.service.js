import {
  getDashboardAnalyticsRepository,
} from "./dashboard.repository.js";

function createUtcMonthDate(year, month) {
  return new Date(
    Date.UTC(
      year,
      month,
      1,
      0,
      0,
      0,
      0
    )
  );
}

function getMonthKey(date) {
  return [
    date.getUTCFullYear(),
    String(
      date.getUTCMonth() + 1
    ).padStart(2, "0"),
  ].join("-");
}

function getMonthLabel(date) {
  return new Intl.DateTimeFormat(
    "en-US",
    {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }
  ).format(date);
}

function buildMonthlyActivity(
  activityNews,
  now = new Date()
) {
  const months = [];

  for (let index = 5; index >= 0; index -= 1) {
    const monthDate =
      createUtcMonthDate(
        now.getUTCFullYear(),
        now.getUTCMonth() - index
      );

    months.push({
      key: getMonthKey(monthDate),
      label: getMonthLabel(monthDate),
      created: 0,
      published: 0,
    });
  }

  const monthlyLookup = new Map(
    months.map((month) => [
      month.key,
      month,
    ])
  );

  activityNews.forEach((news) => {
    if (news.createdAt) {
      const createdKey =
        getMonthKey(
          new Date(news.createdAt)
        );

      const createdMonth =
        monthlyLookup.get(createdKey);

      if (createdMonth) {
        createdMonth.created += 1;
      }
    }

    if (
      news.published &&
      news.publishedAt
    ) {
      const publishedKey =
        getMonthKey(
          new Date(news.publishedAt)
        );

      const publishedMonth =
        monthlyLookup.get(publishedKey);

      if (publishedMonth) {
        publishedMonth.published += 1;
      }
    }
  });

  return months;
}

export async function getDashboardAnalyticsService() {
  const now = new Date()
  const activityStartDate = 
    createUtcMonthDate(
      now.getUTCFullYear(),
      now.getUTCMonth() - 5
    )

  const analytics =
    await getDashboardAnalyticsRepository({
      activityStartDate,
    });

  const {
    total,
    published,
  } = analytics.counts;

  const publicationRate =
    total === 0
      ? 0
      : Math.round(
          (published / total) * 100
        );

  return {
    counts: {
      ...analytics.counts,
      publicationRate,
    },

    recentNews:
      analytics.recentNews,
    
    monthlyActivity:
      buildMonthlyActivity(
        analytics.activityNews,
        now
      ),
  }
}