import {
  Grid,
  Avatar,
  Box,
  Container,
  Flex,
  Spacer,
  Text,
  Wrap,
  WrapItemm,
  Stack,
  Select,
  WrapItem,
  Option,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  GridItem,
  MenuDivider,
  Heading,
} from "@chakra-ui/react";
import { EmailIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Link, Navigate } from "react-router-dom";
import { Appcontext } from "./Statemange";
import { useContext } from "react";
import {Searchcontext} from "./pages/Searchcontext";

export default function Navbar() {
  // const [sname,setSname]=useState("")
  const {  loginstate, setloginstate } = useContext(Appcontext);
   const {sdata,setSdata}= useContext(Searchcontext)
  const handelChange = (e) => {
   const val=e.target.value;
   console.log(val)
   setSdata(val)
  };
  console.log(sdata)
  
  return (
    <>
      <Box w={[]} h="100px" bg="#E2E8F0" >
        <Box w="90%" h="40px" pt="20px" m="auto">
          <Flex gap="10px">
            <Link to="/">
              {" "}
              <Avatar
                w="80px"
                h="50px"
                mr="50px"
                src="https://i.ibb.co/fN9Ns4S/LOGOC5.jpg"
              ></Avatar>
            </Link>
            
           
            <Input bg="white" pl="10px" onChange={handelChange} placeholder="Search" />
            <Spacer />
            <Select bg="teal" placeholder="English"></Select>
            <Spacer />
            <Avatar
              pl="5px"
              src="data:image/png;base64,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"
            />

            <Avatar
              w="40px"
              h="40px"
              pl="5px"
              src="data:image/png;base64,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"
            />

            <Spacer />

            <Button pl="60px" leftIcon={<EmailIcon />} variant="solid">
              Sell
            </Button>
            <Spacer />
            {loginstate == false ? true : null}
            <Spacer />
            <Spacer />
            {loginstate ? (
              <Button mr="10px" onClick={() => setloginstate(false)}>
                LogOut
              </Button>
            ) : (
              <Button>
                {" "}
                <Link to="/login">Login</Link>
              </Button>
            )}
            <Spacer />
          </Flex>
        </Box>
      </Box>
      <Box border="1px solid grey" mt="2px" bg="grey"></Box>

     
    </>
  );
}
