import React, {FC} from 'react';
import { Button } from "@chakra-ui/react"

const MyTestButton: FC = ({children}) => {
  return <Button colorScheme="blue">{children}</Button>;
};

export default MyTestButton;
