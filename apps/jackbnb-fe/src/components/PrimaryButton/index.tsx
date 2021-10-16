import React, { FC } from "react";
import { Button } from "@chakra-ui/react";

const PrimaryButton: FC = ({children}) => {
  return (
    <Button bg="#58DE15" h="50px" radio="10px" text-align="center" p="15px">
      {children}
    </Button>
  );
}

export default PrimaryButton;
