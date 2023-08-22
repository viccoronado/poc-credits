import express, { Express } from "express";
import * as bodyParser from "body-parser";
import { Server as HttpServer } from "http";
import Server from "../../../application/interfaces/server";
import creditRoutes from "./credit.routes";
import healthRoutes from "../healthCheck/health.routes";

export default class ServerExpress implements Server {
    private server: HttpServer
    private express: Express;
    port: number;

    constructor(port: number) {
        this.port = Number(port);
        this.express = express();
    }
    setup(): void {
        this.express.use(express.json());
        this.express.use(bodyParser.urlencoded());
        this.express.use(healthRoutes);
        this.express.use(creditRoutes);
    }
    start(): void {
        this.server = this.express.listen(this.port, () => console.log(`- Server started at port ${this.port} ✨`));
    }
    close(): void {
        this.server.close(() => {
            console.log(`- Server closed.`);
            process.exit(0)
            }
        );
    }
}