import React, { FC } from "react";
import { Button } from "@chakra-ui/react";

interface PrimaryButton {
  fitParent?: boolean;
}

const PrimaryButton: FC <PrimaryButton> = ({children, fitParent}) => {
  return (
    <Button bg="#58DE15" h="50px" radio="10px" text-align="center" p="10px" width={fitParent ? 'inherit' : 'unset'}>
      { children }
    </Button>
  );
}

export default PrimaryButton;
