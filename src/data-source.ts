import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Employee } from "./entity/Employee";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "hr",
    synchronize: true,
    logging: false,
    entities: [User, Employee],
    migrations: [],
    subscribers: [],
})
