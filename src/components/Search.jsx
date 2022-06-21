import { Input } from "@chakra-ui/react";
import React from "react";

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <Input
      mx={5}
      my={5}
      placeholder="Buscar Personaje"
      type="text"
      id="filtro"
      value={search}
      ref={searchInput}
      onChange={handleSearch}
    />
  );
};

export default Search;
