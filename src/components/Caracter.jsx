import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import Search from "./Search";
import useCaracter from "../hooks/caracteres";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const initialState = {
  favoritos: [],
};
const urlAPI = "https://rickandmortyapi.com/api/character/";

const favoritoReduce = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favoritos: [...state.favoritos, action.payload],
      };
    default:
      return state;
  }
};

const Caracter = () => {
  const [favoritos, dispatch] = useReducer(favoritoReduce, initialState);
  const [buscar, setBuscar] = useState("");
  const buscarInput = useRef(null);
  const caracters = useCaracter(urlAPI);

  const handleClick = (favoritos) => {
    dispatch({
      type: "ADD_FAVORITE",
      payload: favoritos,
    });
  };

  const handleSearch = useCallback(() => {
    setBuscar(buscarInput.current.value);
  }, []);

  const filtroUsers = useMemo(
    () =>
      caracters.filter((user) => {
        return user.name.toLowerCase().includes(buscar.toLowerCase());
      }),
    [caracters, buscar]
  );

  return (
    <div className="Caracters">
      <Stack direction="row">
        {favoritos.favoritos.map((favorito) => (
          <Badge key={favorito.id} variant="solid" colorScheme="green">
            <Flex align="center">
              <StarIcon color="#DBC743" />

              <Text>{favorito.name}</Text>
            </Flex>
          </Badge>
        ))}
      </Stack>
      <Search
        search={buscar}
        searchInput={buscarInput}
        handleSearch={handleSearch}
      />
      <Grid templateColumns="repeat(5, 1fr)" gap={5}>
        {filtroUsers.map((caracter) => (
          <GridItem key={caracter.id}>
            <Stack spacing={8} direction="row">
              <Box p={5} shadow="md" borderWidth="1px">
                <Flex justify="center">
                  <Heading fontSize="xl">{caracter.name}</Heading>
                </Flex>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src={caracter.image}
                  alt="Dan Abramov"
                />
                <ButtonGroup mt={2} gap="2">
                  <Button type="button" onClick={() => handleClick(caracter)}>
                    Agregar favoritos
                  </Button>
                </ButtonGroup>
              </Box>
            </Stack>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default Caracter;
