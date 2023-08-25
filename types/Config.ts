import CPU from "./CPU"
import Case from "./Case"
import Cooling from "./Cooling"
import GPU from "./GPU"
import HDD from "./HDD"
import MotherBoard from "./MotherBoard"
import RAM from "./RAM"
import SSD from "./SSD"
import User from "./User"

export default interface Config {
    id: number
    status: string
    active_step: number
    user: User
    cpu: CPU
    cooling: Cooling
    gpu: GPU
    hdd: HDD
    motherboard: MotherBoard
    ssd: SSD
    ram: RAM
    case: Case
}