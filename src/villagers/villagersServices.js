import Villager from './villagersModel';

// eslint-disable-next-line consistent-return
export const registration = async (req, res) => {
  const data = req.body;
  const fullName = req.body.fullname;
  try {
    const villagerExist = await Villager.countDocuments({ fullname: fullName });
    if (villagerExist) return res.status(409).send(`villager with name ${fullName} exist`);
    const newVillager = await new Villager(data).save();
    res.json({
      _id: newVillager.id,
      fullname: newVillager.fullname,
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
