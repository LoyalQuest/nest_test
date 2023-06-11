import { AppDataSource } from './data-source';
// import { User } from "./entity/User"
import { bootstrap } from './main';

AppDataSource.initialize()
  .then(async () => {
    console.log('Data Source has been initialized');
    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)
    //
    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    bootstrap();
  })
  .catch((error) => console.log('Error during data source init.', error));
