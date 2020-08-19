import { TRoutesInput } from '../types/routes';
import UserController from '../controllers/user.controller';
import PetController from '../controllers/pet.controller';
const userService = require('../service/user.service.js');

export default ({ app }: TRoutesInput) => {
  app.post('/api/user', async (req, res) => {
    const user = await UserController.CreateUser({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    });

    const pet = await PetController.CreatePet({
      owner: user._id,
      name: req.body.petName
    });

    return res.send({ user, pet });
  });
  app.get('/app/info', async (req, res) => {
    res.send(req.query.name)
  });

  app.get('/user', async (req, res) => {
    const data = await userService.findOne(req.query);
    res.send(data);
  });
};
