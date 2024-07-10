import React, { ComponentProps, FC } from "react";

interface Props {
  props: ComponentProps<"input">;
}

const BaseInput: FC<Props> = ({ props }) => {
  return (
    <input
      className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm max-w-[220px]"
      {...props}
    />
  );
};

export default BaseInput;
