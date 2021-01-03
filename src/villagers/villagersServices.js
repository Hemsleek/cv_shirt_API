import Villager from './villagersModel';

export const registration = async (req, res) => {
  const data = req.body;
  try {
    const newVillager = await new Villager(data).save();
    res.json({
      _id: newVillager.id,
      fullname: newVillager.fullname,
      color: newVillager.color,
      size: newVillager.size,
      patterns: newVillager.patterns,
    });
  } catch (err) {
    res.status(500).json({ message: 'internal server response' });
  }
};

export const allVillagers = async (req, res) => {
  const excludeFromResult = '-createdAt -updatedAt -__v';

  try {
    const Villagers = await Villager.find({}, excludeFromResult);
    res.json(Villagers);
  } catch (err) {
    res.status(500).send('internal server error');
  }
};
