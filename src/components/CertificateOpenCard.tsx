import { ModuleType } from "@/data";
import { CircleCheck, LockKeyhole } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  id: string;
  certificate: ModuleType["certificate"];
}

const CertificateOpenCard: FC<Props> = ({ id, certificate }) => {
  return (
    <div className="self-end">
      <div className="flex flex-col">
        <CircleCheck className="ml-14 my-5 z-10" color="gray" size={45} />
        <div className="flex flex-col z-10 w-fit items-end rounded-lg p-1.5 border border-gray-500">
          <Image
            className="rounded-lg z-10"
            id={id}
            src={certificate.image}
            alt="Next.js Logo"
            width={200}
            height={180}
            style={{ height: 165, width: 150 }}
            priority
          />
          <LockKeyhole
            size={45}
            stroke="white"
            color="gray"
            className="rounded-full bg-neutral-950 p-3 z-20 -m-5"
          />
        </div>
        <div className="text-left py-10 overflow-auto">
          <p className="text-2xl border-gray-500 pb-6 text-white font-medium leading-none">
            {certificate.title}
          </p>
          <p className="text-md text-muted-foreground ">
            {certificate.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateOpenCard;
