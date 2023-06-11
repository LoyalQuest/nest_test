"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const seed_service_1 = require("./seed.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await (0, seed_service_1.executeSQLQueries)();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map