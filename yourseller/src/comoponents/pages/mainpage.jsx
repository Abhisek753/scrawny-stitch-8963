import {
  Button,
  Box,
  Flex,
  Select,
  SimpleGrid,
  background,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import CardMapping from "./Cardmapping";

import { Appcontext } from "../Statemange";
import Footer from "../Footer";
import CardContainer from "./CardContainer";
import { Searchcontext } from "./Searchcontext";

export default function MainPage() {
  const { state, dispatch } = useContext(Appcontext);

  const [checkvalue, setCheckValue] = useState("");
  const [cat, setCat] = useState("Mobile");
  const [order, setOrder] = useState("asc");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const { sdata } = useContext(Searchcontext);

  const getData = async (cat, order) => {
    try {
      let res = await fetch(
        `https://mysterious-goat-windbreaker.cyclic.app/random?category=${cat}&_page=${page}&_limit=10&_sort=price&_order=${order}&q=${sdata}`
      );
      let data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(cat, order);
  }, [cat, order, page, sdata]);

  return (
    <Flex display={["block", "block",]}>
      <Box w={"20%"} boxShadow={"1px 2px 9px #e2e8f0"} zIndex={-1}>
        <Select
          mt={5}
          m={"auto"}
          width={"90%"}
          _hover={{ backgroundColor: "teal" }}
          border={"none"}
          placeholder="Select Category"
          onChange={(e) => setCat(e.target.value)}
        >
          <option value="Mobile">Mobile</option>

          <option value="bikes">Bike</option>
        </Select>
        <Select
          m={"auto"}
          mt={5}
          width={"90%"}
          border={"none"}
          _hover={{ backgroundColor: "teal" }}
          placeholder="Select Order"
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="asc">Ascending order</option>

          <option value="desc">Descending Order</option>
        </Select>
      </Box>
      <Box>
        <SimpleGrid m="auto" w="95%" gap={5} columns={[1, 2, 3, 4]}>
          {data.length !== 0 &&
            data.map((el, index, arr) => <CardContainer key={el.id} {...el} />)}
        </SimpleGrid>
        <Box
          display={"flex"}
          m={"auto"}
          width={"30%"}
          justifyContent={"space-between"}
        >
          <Button onClick={() => setPage(page - 1)} bgColor={"#6870a6"}>
            Pre
          </Button>
          <Button bgColor={"#a1a7cf"}>{page}</Button>
          <Button onClick={() => setPage(page + 1)} bgColor={"#6870a6"}>
            Next
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
