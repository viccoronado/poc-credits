import { creditServiceCheck } from "./creditService.check";
import { HealthService } from "./health.service";
import { ResourceHealth } from "./resource-health.enum";
import { Router } from "express";

const healthRoutes = Router();

healthRoutes.get('/health', async (req, res) => {
  const healthService = new HealthService(
    [
      new creditServiceCheck(),
    ]
  );

  const healthResults = await healthService.getHealth();

  res.status(healthResults.status === ResourceHealth.Healthy ? 200 : 503)
    .send({
      status: healthResults.status, dependencies: healthResults.results
    });
});

export default healthRoutes;