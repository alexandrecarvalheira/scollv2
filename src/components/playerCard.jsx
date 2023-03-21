import Image from "next/image";
import Link from "next/link";
import preview from "../../public/images/nft-preview.gif";
import { motion } from "framer-motion";
import contractStore from "@/store/contractStore";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbSword, TbBrandTailwind, TbClover } from "react-icons/tb";
import { SlEnergy } from "react-icons/sl";
import { GiPotionBall } from "react-icons/gi";
import { GoLightBulb } from "react-icons/go";
import { SiGhost } from "react-icons/si";
import { TfiEye } from "react-icons/tfi";

export default function PlayerCard() {
  const store = contractStore();
  const [selectedPlayer, setSelectedPlayer] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const loadContract = async () => {
      const contract = await store.diamond;
      const response = await contract.getPlayer(store.players[index]);
      setSelectedPlayer(response);
    };
    loadContract();
  }, [index]);
  console.log(selectedPlayer);
  return (
    <div className="stats shadow absolute -bottom-4 bg-[#E6E6FA] hover:bg-white overflow-hidden py-2 pr-5 gap-6 scale-50 sm:scale-100 sm:bottom-3">
      <div className="w-full flex items-center my-auto pl-1 gap-4">
        <div className="avatar p-4">
          <div className="w-16 rounded-full">
            <Image
              alt="player"
              src={selectedPlayer?.uri}
              fill
              className="rounded-full"
            />
          </div>
        </div>
        <div>
          <div className="stat-value text-purple-900">
            {selectedPlayer?.name}
          </div>
          <div>
            <div className="stat-title">
              {" "}
              {selectedPlayer?.male ? "Male" : "Female"}
            </div>
            <div className="text-success font-bold text-sm">
              {selectedPlayer?.status.toNumber() === 0 ? "ready" : "not ready"}
            </div>
          </div>
          <div className="stat-desc text-purple-800 font-bold">
            level: {selectedPlayer?.level.toNumber()}
          </div>
          <progress
            className="progress w-full progress-success"
            value="50"
            max="100"
          ></progress>
        </div>
      </div>
      <div className=" my-auto">
        <div
          className=" flex justify-center items-center text-3xl text-purple-900 tooltip tooltip-bottom"
          data-tip="strength"
        >
          <TbSword />0{selectedPlayer?.strength.toNumber()}
        </div>
        <div
          className=" flex justify-center items-center text-3xl text-purple-900 tooltip"
          data-tip="health"
        >
          <AiOutlineHeart />
          {selectedPlayer?.health.toNumber()}
        </div>
        <div
          className=" flex justify-center items-center text-3xl text-purple-900 tooltip"
          data-tip="stamina"
        >
          <SlEnergy />0{selectedPlayer?.stamina.toNumber()}
        </div>
      </div>
      <div className=" my-auto ">
        <div
          className=" flex justify-center items-center text-3xl text-purple-900 tooltip tooltip-bottom"
          data-tip="mana"
        >
          <GiPotionBall />0{selectedPlayer?.mana.toNumber()}
        </div>
        <div
          className=" flex justify-center items-center text-3xl text-purple-900 tooltip"
          data-tip="agility"
        >
          <TbBrandTailwind />0{selectedPlayer?.agility.toNumber()}
        </div>
        <div
          className=" flex justify-center items-center text-3xl text-purple-900 tooltip"
          data-tip="perception"
        >
          <TbClover />0{selectedPlayer?.luck.toNumber()}
        </div>
      </div>
      <div className=" my-auto ">
        <div
          className=" flex justify-center items-center text-3xl text-purple-900 tooltip tooltip-bottom"
          data-tip="wisdom"
        >
          <GoLightBulb />0{selectedPlayer?.wisdom.toNumber()}
        </div>
        <div
          className=" flex justify-center items-center text-3xl text-purple-900 tooltip"
          data-tip="haki"
        >
          <SiGhost />0{selectedPlayer?.haki.toNumber()}
        </div>
        <div
          className=" flex justify-center items-center text-3xl text-purple-900 tooltip"
          data-tip="perception"
        >
          <TfiEye />0{selectedPlayer?.perception.toNumber()}
        </div>
      </div>
    </div>
  );
}
