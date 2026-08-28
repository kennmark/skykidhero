import { Router } from "express";
import { authenticate } from "../middleware/authenticate.middleware.js";
import authRoutes from "../modules/auth/auth.routes.js"
import newsRoutes from "../modules/news/news.routes.js"
import newsAdminRoutes from "../modules/news/news.admin.routes.js";
import dashboardRoutes from "../modules/dashboard/dashboard.routes.js";
import mapRoutes from "../modules/maps/map.routes.js"; 
import mapAdminRoutes from "../modules/maps/map.admin.routes.js";
import spiritRoutes from "../modules/spirits/spirit.routes.js";
import spiritAdminRoutes from "../modules/spirits/spirit.admin.routes.js";
import wingedLightRoutes from "../modules/wingedLights/wingedLight.routes.js";
import wingedLightAdminRoutes from "../modules/wingedLights/wingedLight.admin.routes.js";

const router = Router();

router.use("/auth", authRoutes)

router.get("/protected",
    authenticate,
    (req, res) => {
        res.json({
            success: true,
            user: req.user
        })
    }
)

router.use("/news", newsRoutes)

router.use("/admin/news", newsAdminRoutes)

router.use("/", spiritRoutes);

router.use("/", wingedLightRoutes);

router.use("/maps", mapRoutes);

router.use("/admin", spiritAdminRoutes);

router.use("/admin", wingedLightAdminRoutes);

router.use("/admin/maps", mapAdminRoutes);

router.use("/admin/dashboard", dashboardRoutes)

export default router;