import { Box, Button, Flex, Heading, Spacer, useColorMode } from "@chakra-ui/react";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const color = useContext(ThemeContext);

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className="Header">
      <Flex minWidth="max-content" alignItems="center" gap="2" m={2}>
        <Box p="2">
          <Heading size="md" style={{ color }}>
            ReactHooks with Chakra
          </Heading>
        </Box>
        <Spacer />
        <Button onClick={toggleColorMode}>
          Modo {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Flex>
    </div>
  );
};

export default Header;
