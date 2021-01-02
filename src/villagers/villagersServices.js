import { villager } from "./villagersModel"

export const registration = async (req, res) => {
    const data = req.body
    try {
        const newVillager = await new villager(data).save()
        res.json(newVillager)
    }
    catch (err) {
        res.status(500).json({ message: 'internal server response' })
    }
}
