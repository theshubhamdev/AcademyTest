import Image from "next/image";
import React, { FC } from "react";

interface Props {
  id: string;
}

const BonusPointsOpenCard: FC<Props> = ({ id }) => {
  return (
    <div className="self-center mr-96 pr-96">
      <div className="flex flex-col items-center">
        <div className="z-10 w-fit rounded-full p-1.5 border border-gray-500">
          <Image
            className="rounded-full z-10"
            id={id}
            src={"/dummy.png"}
            alt="Next.js Logo"
            width={200}
            height={180}
            style={{ height: 80, width: 80 }}
            priority
          />
        </div>
        <div className="text-left py-10 overflow-auto">
          <p className="text-2xl border-gray-500 pb-6 text-white font-medium leading-none">
            10,000 <span className="text-green-600">$PEPE</span>
          </p>
          <p className="text-md text-muted-foreground ">Memecoin Airdrop</p>
        </div>
      </div>
    </div>
  );
};

export default BonusPointsOpenCard;
