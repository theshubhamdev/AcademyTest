import React from "react";
import { CourseStructureCard } from "../CourseStructureCard";
import { MODULE_1, MODULE_2 } from "@/data";
import CertificateOpenCard from "../CertificateOpenCard";
import BonusPointsOpenCard from "../BonusPointsOpenCard";
import RewardTimerCard from "../RewardTimerCard";
import Xarrow from "react-xarrows";

const Modules = () => {
  return (
    <>
      <div className="flex w-full justify-around">
        <CourseStructureCard id="1" modules={MODULE_1} />
        <CertificateOpenCard id="2" certificate={MODULE_1.certificate} />
      </div>
      <div className="flex w-full mt-36 justify-evenly">
        <CertificateOpenCard id="4" certificate={MODULE_2.certificate} />
        <div className="self-center">
          <CourseStructureCard id="3" modules={MODULE_2} />
        </div>
        <div id="2.1" className=" -mb-30 w-1/3"></div>
      </div>
      <div className="mt-36">
        <BonusPointsOpenCard id="5" />
      </div>
      <RewardTimerCard />
      <Xarrow
        start={"1"}
        end={"2"}
        dashness={{ strokeLen: 5, nonStrokeLen: 5 }}
        color="gray"
        strokeWidth={1}
        curveness={1.5}
        showHead={false}
        labels={{ middle: "Road to your Learner NFT" }}
        divContainerStyle={{ color: "white" }}
      />
      <Xarrow
        start={"2"}
        end={"3"}
        dashness={{ strokeLen: 5, nonStrokeLen: 5 }}
        color="gray"
        startAnchor={"right"}
        strokeWidth={1}
        curveness={2.8}
        _cpx2Offset={15000}
        _cpy1Offset={20}
        showHead={false}
        arrowBodyProps={{ overflow: "hidden" }}
      />
      <Xarrow
        start={"3"}
        end={"4"}
        dashness={{ strokeLen: 5, nonStrokeLen: 5 }}
        color="gray"
        strokeWidth={1}
        curveness={2}
        showHead={false}
      />

      <Xarrow
        start={"4"}
        end={"5"}
        dashness={{ strokeLen: 5, nonStrokeLen: 5 }}
        color="gray"
        startAnchor={"left"}
        endAnchor={"left"}
        _cpx2Offset={-2000}
        _cpy1Offset={0}
        strokeWidth={1}
        curveness={-1}
        showHead={false}
      />
      <Xarrow
        start={"5"}
        end={"reward-timer"}
        dashness={{ strokeLen: 5, nonStrokeLen: 5 }}
        color="gray"
        strokeWidth={1}
        curveness={1.2}
        endAnchor={"top"}
        showHead={false}
      />
    </>
  );
};

export default Modules;
