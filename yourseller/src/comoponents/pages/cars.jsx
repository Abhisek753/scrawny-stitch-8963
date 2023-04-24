import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Appcontext } from "../Statemange";
import {
  Box,
  Grid,
  GridTemplate,
  Image,
  Text,
  SkeletonCircle,
  Skeleton,
  SkeletonText,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";
import { Searchcontext } from "./Searchcontext";

export default function Cars() {
  const { state, dispatch } = useContext(Appcontext);
  const [page, setPage] = useState(1);
  const {sdata}= useContext(Searchcontext)


  async function GetCars() {
    return fetch(`https://mysterious-goat-windbreaker.cyclic.app/random?_page=${page}&_limit=10&category=Car&q=${sdata}`).then((res) =>res.json());
  }

  useEffect(() => {
    dispatch({ type: "start" });
    GetCars()
      .then((res) => {
        dispatch({ type: "cardata", payload: res });

        dispatch({ type: "finish" });
      })
      .catch((error) => {
        dispatch({ type: "loginfail" });
      });
  }, [page]);

  return (
    <Box>
      {state.isloading ? (
        <Skeleton startColor="green.500" endColor="black.500" height="20px" />
      ) : (
        <SimpleGrid columns={[1,1,2,4]} gap={6} bg="gray.100">
          {state.cardata &&
            state.cardata.map((elm) => (
              // <Box key={elm.id}>
              //   <Image src={elm.image} width="300px" h="300px"></Image>
              //   <Text>{elm.category}</Text>
              //   <Text>{elm.price}</Text>
              //   <Link to={`/${elm.id}`}>More Details</Link>
              // </Box>
              <CardContainer {...elm}/>

            ))}
        </SimpleGrid>
      )}
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
  );
}
