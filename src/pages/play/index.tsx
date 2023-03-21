import Image from "next/image";
import map from "../../../public/images/game-map.jpeg";
import map2 from "../../../public/images/dgmap.png";
import PlayerCard from "@/components/playerCard";
import { useAccount } from "wagmi";
import { Web3Button } from "@web3modal/react";
import contractStore from "@/store/contractStore";
import { useEffect, useState } from "react";
import Mint from "@/components/mint";

export default function Play() {
  const store = contractStore();
  const { address, isConnected } = useAccount();
  const [players, setPlayers] = useState([]);

  const loadContract = async () => {
    const contract = await store.diamond;
    const response = await contract.getPlayers(address);
    const players = await response.map((val: any) => val.toNumber());
    store.setPlayers(await players);
    setPlayers(players);
  };
  useEffect(() => {
    loadContract();
  }, [address]);

  if (!isConnected) {
    return (
      <div className="relative min-h-[85vh] min-w-full flex flex-col items-center justify-center">
        <h2 className="font-bold m-4">Connect to play</h2>
        <Web3Button label="Connect Wallet" avatar="hide" icon="hide" />
      </div>
    );
  }

  if (players.length === 0) {
    return (
      <div className="relative min-h-screen min-w-full flex flex-col items-center justify-center">
        <Mint />
      </div>
    );
  }
  return (
    <>
      <div className="relative w-fit mb-auto min-h-fit flex items-center justify-center overflow-hidden  mx-auto">
        <Image src={map2} alt="game map" width="850" className="rounded-3xl" />
        <PlayerCard />

        {/* <div className="absolute right-[5%] inset-y-10  mx-auto grid h-fit w-fit  max-w-4xl animate-rotate place-items-center rounded-lg bg-[linear-gradient(var(--rotate),var(--tw-gradient-from)_33%,rgb(37_99_235)_66%,var(--tw-gradient-to))] from-yellow-600 via-yellow-300 to-yellow-500 p-[0.15rem] shadow-xl ring-1 before:absolute before:inset-0 before:z-0 before:h-full before:w-full before:animate-rotate before:bg-[linear-gradient(var(--rotate),var(--tw-gradient-from)_33%,rgb(37_99_235)_66%,var(--tw-gradient-to))] before:from-yellow-500 before:via-yellow-300 before:to-yellow-600 before:blur-2xl before:transition-all before:hover:scale-110 before:hover:blur-3xl sm:mx-auto">
        <div className="z-10 grid h-full w-full place-items-center rounded-lg bg-primary bg-gradient-to-t from-neutral-800 py-2 px-4 text-white">
          Gold: 10
        </div>
      </div> */}
        {/* <button className="btn  normal-case absolute top-[65%] left-[25%] overflow-hidden rounded-lg px-12 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2">
          <span className="absolute inset-px z-10 grid place-items-center rounded-lg bg-primary bg-gradient-to-t from-neutral-800 text-white">
            Train
          </span>
          <span
            aria-hidden
            className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
          />
        </button>
        <button className="btn  normal-case absolute top-[28%] left-[50%] overflow-hidden rounded-lg px-12 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2">
          <span className="absolute inset-px z-10 grid place-items-center rounded-lg bg-primary bg-gradient-to-t from-neutral-800 text-white">
            Arena
          </span>
          <span
            aria-hidden
            className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
          />
        </button>
        <button className="btn  normal-case absolute top-[35%] left-[85%] overflow-hidden rounded-lg px-12 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2">
          <span className="absolute inset-px z-10 grid place-items-center rounded-lg bg-primary bg-gradient-to-t from-neutral-800 text-white">
            Quest
          </span>
          <span
            aria-hidden
            className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
          />
        </button>
        <button className="btn  normal-case absolute top-[75%] left-[65%] overflow-hidden rounded-lg px-12 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2">
          <span className="absolute inset-px z-10 grid place-items-center rounded-lg bg-primary bg-gradient-to-t from-neutral-800 text-white">
            Craft
          </span>
          <span
            aria-hidden
            className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
          />
        </button>
      */}
      </div>
    </>
  );
}
