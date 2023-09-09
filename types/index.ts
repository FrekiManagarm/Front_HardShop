import MotherBoard from "./MotherBoard";
import CPU from "./CPU";
import GPU from "./GPU";
import RAM from "./RAM";
import HDD from "./HDD";
import Cooling from "./Cooling";
import Case from "./Case";
import Config from "./Config";
import SSD from "./SSD";
import User from "./User";
import PSU from "./PSU";

interface PageInfosProps {
    id: number,
    title: string,
    image: string,
    subtitle: string,
    subtitleLink: string,
    btnL: string,
    btnLlink: string,
    btnR: string,
    btnRLink: string,
    lastSubtitle: string,
    lastSubtitleLink: string
}

export type { MotherBoard, CPU, GPU, RAM, HDD, Cooling, Case, Config, SSD, User, PSU, PageInfosProps }