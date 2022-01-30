import Toolbox from '../utils/toolbox';
import db from '../services';
import database from '../models';

const {
  successResponse,
  errorResponse,
} = Toolbox;
const {
  Cereal
} = database;

const cerealController = {
  async addCereal(req, res) {
    const cereal = await db.add(Cereal, req.body);
    return successResponse(res, { cereal }, 200);
  },
};

export default cerealController;
