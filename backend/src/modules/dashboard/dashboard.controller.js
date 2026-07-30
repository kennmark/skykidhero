import {
  getDashboardAnalyticsService,
} from "./dashboard.service.js";

import {
  success,
} from "../../shared/utils/response.js";

export async function getDashboardAnalyticsController(
  req,
  res,
  next
) {
  try {
    const analytics =
      await getDashboardAnalyticsService();

    return success(
      res,
      analytics,
      "Dashboard analytics retrieved successfully."
    );
  } catch (error) {
    next(error);
  }
}