import {
  Button,
  Container,
  Grid,
  GridItem,
  useConst,
  Skeleton,
  Box,
  Tabs,
  TabPanel,
  Tab,
  TabList,
  TabPanels,
  Progress,
  Stack,
  Checkbox,
  Flex,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import CardMapping from "./Cardmapping";

import { Appcontext } from "../Statemange";
import Footer from "../Footer";
import CardContainer from "./CardContainer";

export default function MainPage() {
  const { state, dispatch } = useContext(Appcontext);

  const [checkvalue, setCheckValue] = useState("");
  const [cat, setCat] = useState("Mobile");
  const [order,setOrder]=useState("asc")
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  


  const getData = async (cat,order) => {
    try {
      let res = await fetch(
        `https://mysterious-goat-windbreaker.cyclic.app/random?category=${cat}&_page=1&_limit=10&_sort=price&_order=${order}`
      );
      let data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

 

  useEffect(() => {
    getData(cat,order);
  }, [cat,order]);

  return (
    <>
      <Select
        placeholder="Select Category"
        onChange={(e) => setCat(e.target.value)}
      >
        <option value="Mobile">Mobile</option>

        <option value="bikes">Bike</option>
      </Select>
      <Select
        placeholder="Select Order"
        onChange={(e) => setOrder(e.target.value)}
      >
        <option value="asc">Ascending order</option>

        <option value="desc">Descending Order</option>
      </Select>
      <SimpleGrid m="auto" w="80%" gap={5} columns={[1,2,3,4]}>
    {data.length!==0&&data.map((el,index,arr)=><CardContainer  key={el.id} {...el}/>)}
      </SimpleGrid>
    </>
  );
}
