import { CircleCheck, CircleDollarSign } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { ModuleType } from "@/data";
import { trimString } from "./utils";

type CardProps = React.ComponentProps<typeof Card>;

interface Props extends CardProps {
  modules: ModuleType;
}
export function CourseStructureCard({ modules, className, ...props }: Props) {
  if (!modules) return;
  return (
    <Card
      className={cn(
        "w-[450px] z-10 scroll-m-0 bg-neutral-900 rounded-lg border-gray-500 ",
        className
      )}
      {...props}
    >
      <CardHeader>
        <div className="flex">
          <div className="rounded-lg p-1.5 border border-gray-500 scroll ">
            <Image
              className="rounded-lg -mb-11"
              src={modules.image}
              alt="Next.js Logo"
              width={200}
              height={180}
              style={{ height: 180, width: 250 }}
              priority
            />
            <Badge className="bg-blue-950 p-2 relative left-8 ">
              {modules.quests} Quests
            </Badge>
          </div>
          <div className="text-white p-5">
            <CardTitle className="text-xl pb-5">{modules.title}</CardTitle>
            <CardDescription className="border-b border-dashed border-gray-500 pb-6 mb-4">
              {modules.description}
            </CardDescription>
            <Badge className="bg-neutral-800 p-2">
              <CircleDollarSign size={15} className="mr-1" stroke="gold" />{" "}
              {modules.totalExp}
              XPs
            </Badge>
          </div>
        </div>
      </CardHeader>
      <hr />
      <CardContent
        style={{ scrollbarWidth: "none" }}
        className="h-[410px] overflow-y-scroll bg-black py-4 grid gap-4"
      >
        {modules?.modules?.map((item, index) => (
          <div key={index} className=" bg-neutral-900 flex items-center space-x-2 rounded-md border-gray-800 p-4">
            <Image
              className="rounded-lg"
              src={item.img}
              alt="Next.js Logo"
              width={120}
              height={100}
              style={{ height: 80, width: 120 }}
              priority
            />
            <div className="flex-1 space-y-1">
              <p className="inline-block overflow-hidden whitespace-nowrap border-b border-dashed border-gray-500 pb-6 mb-4 text-white font-medium leading-none">
                #{index + 1} {trimString(item.title)}
              </p>
              <div className="flex">
                <p className="text-xs text-muted-foreground ">
                  {item.tasks} Tasks
                </p>
                <div className="flex-1 bg-black shadow-lg border rounded-full p-0.5 h-4 ml-2">
                  <div
                    className="bg-neutral-600 h-2 rounded-full"
                    style={{ width: `${100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <CircleCheck className="self-end" color="gray" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
