import {
  Container,
  Box,
  Image,
  Text,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Appcontext } from "../Statemange";
export default function DetailsPage() {
  const { state, dispatch } = useContext(Appcontext);
  const [data, setdata] = useState(null);
  const { id } = useParams();
  const textstyle = {
    color: "black",
    fontSize: "200%",
    marginTop: "20px",
    backgroundColor: "white",
    h: "60px",
    m: "auto",
    w: "90%",
    border: "1px solid grey",
  };
  const getdata = async (id) => {
    await fetch(`https://mysterious-goat-windbreaker.cyclic.app/random/${id}`)
      .then((d) => d.json())
      .then((data) => {
        setdata(data);
        console.log(data);
      });
  };

  useEffect(() => {
    getdata(id);
  }, [id]);

  return (
    <Box mt="30px" bg={"#8793ad"} w={"100%"} >
      {data && data ? (
        <Box
          display={"flex"}
          flexDirection="column"
          justifyContent="center"
          alignItems={"center"}
          mt="20px"
        >
          <SimpleGrid
            w={"98%"}
            columns={[1, 1, 2, 2]}
            // border={"2px solid green"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Box w={"60%"} p={3}  objectFit={"fill"}>
              <Image src={data.image} />
            </Box>
            <Box w={"90%"} >
              <Text style={textstyle}> cash on delivery:- {data.cod}</Text>
              <Text style={textstyle}> cash on delivery:- {data.price}</Text>
              <Text style={textstyle}>{data.display || data.date}</Text>
              <Text style={textstyle}>Category:-{data.category}</Text>
              <Text style={textstyle}>{data.fuel || data.chipset}</Text>
              <Text style={textstyle}>{data.member_since}</Text>
              <Text style={textstyle}>{data.seller_name}</Text>
            </Box>
          </SimpleGrid>
          <Box></Box>
        </Box>
      ) : null}
    </Box>
  );
}
