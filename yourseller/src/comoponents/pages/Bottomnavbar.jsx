import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    MenuItem,
    Grid,
    MenuDivider,
    GridItem,
    Menu,
    MenuButton,
    MenuList,
    Spacer,
    Avatar,
    Select,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    EmailIcon,
  } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
  
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
       
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Box>
            <Menu >
              <MenuButton
            
                transition="all 0.2s"
                _hover={{ bg: "gray.400" }}
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
              >
                All Catagorie <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <Grid h="auto" templateColumns="repeat(4, 1fr)" gap={3}>
                  <GridItem rowSpan={1} colSpan={1}     >
                    <MenuItem>olx auto(cars)</MenuItem>
                    <MenuDivider />
                    <Text as="b">Properties</Text>
                    <MenuDivider />
                    <MenuItem>For Sale House</MenuItem>
                    <MenuItem>For Rent</MenuItem>
                    <MenuItem>Land and Plot</MenuItem>
                    <MenuItem>Pg & Guest house</MenuItem>
                    <MenuItem>For Sale office</MenuItem>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <MenuDivider /> <Text as="b">Jobs</Text>
                    <MenuDivider />
                    <MenuItem>Data entery &backOfiice</MenuItem>
                    <MenuItem>Sales & Marketing</MenuItem>
                    <MenuItem>BPO & Tellecaller</MenuItem>
                    <MenuItem>Driver</MenuItem>
                    <MenuItem>Office assistance</MenuItem>
                    <MenuItem>Delivery collection</MenuItem>
                    <MenuItem>Teacher</MenuItem>
                    <MenuItem>Cook</MenuItem>
                    <MenuItem>Receptionist</MenuItem>
                    <MenuItem>Operator & Technician</MenuItem>
                    <MenuItem>IT Engineer & Devloper</MenuItem>
                    <MenuItem>Hotel & TravelExecutive</MenuItem>
                    <MenuItem>Accountant</MenuItem>
                    <MenuItem>Designer</MenuItem>
                    <MenuItem>OtherJobs</MenuItem>
                    <MenuDivider />
                    <Text as="b">Bikes</Text>
                    <MenuItem>MoterCycle</MenuItem>
                    <MenuItem>Scooter</MenuItem>
                    <MenuItem>SparePart</MenuItem>
                    <MenuItem>BiCycle</MenuItem>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <MenuDivider />
                    <Text as="b">Electronics & Applinces</Text>
                    <MenuDivider />
                    <MenuItem>Tv's Vidio -audio</MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem>Kitchen Other Applicens</MenuItem>
                    <MenuItem>Computer&Parts</MenuItem>
                    <MenuItem>Camera & Lenses</MenuItem>
                    <MenuItem>Games & Entertainment</MenuItem>
                    <MenuItem>Fridge</MenuItem>
                    <MenuItem>Computer Accesories</MenuItem>
                    <MenuItem>Hard Disk&Monitor </MenuItem>
                  </GridItem>
                  <GridItem colSpan={1} bg="tomato">
                    {" "}
                    <MenuDivider />
                    <Text as="b">Fashion</Text>
                    <MenuItem>Men</MenuItem>
                    <MenuItem>Women</MenuItem>
                    <MenuItem>Children</MenuItem>
                    <MenuDivider />
                    <Text as="b">Books,Sports& Hobbies</Text>
                    <MenuDivider />
                    <MenuItem>Books</MenuItem>
                    <MenuItem>Gym&Fitness</MenuItem>
                    <MenuItem>MusicalInstrument</MenuItem>
                    <MenuItem>SportsEquipment</MenuItem>
                    <MenuItem>OtherHobbies</MenuItem>
                    <MenuDivider />
                    <Text as="b">Pets</Text>
                    <MenuDivider />
                    <MenuItem>Fishes&Aquarium</MenuItem>
                    <MenuItem>Pet Food & Accesories</MenuItem>
                    <MenuItem>Dogs</MenuItem>
                    <MenuItem>Other Pets</MenuItem>
                    <MenuDivider />
                    <Text as="b">Servises</Text>
                    <MenuDivider />
                    <MenuItem>Electronics&Computer</MenuItem>
                    <MenuItem>Education Classes</MenuItem>
                    <MenuItem>Drivers&Taxi</MenuItem>
                    <MenuItem>Health & Beauty</MenuItem>
                  </GridItem>
                </Grid>
              </MenuList>
            </Menu>
            </Box>
  
            <Flex display={{ base: 'none', md: 'flex' }}w={"100%"} >
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
              <Link to={"/login"}>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Log In
            </Button>
            </Link>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4} 
      w={"90%"}
      ml={5}
      >
        
     <Flex  w={"100%"} justifyContent={"space-between"}>
       <Box>
          <Text as="b" m="auto" _hover={{ bg: "gray.400" }} mt="10px">
            <Link to="/cars">Cars</Link>
          </Text>
       </Box>
         <Box>
         <Text as="b" m="auto" _hover={{ bg: "gray.400" }} mt="10px">
            <Link to="/bike">Motar Cylcle</Link>
          </Text>
         </Box>
         <Box>
          <Text as="b" m="auto" _hover={{ bg: "gray.400" }} mt="10px">
            <Link to="/mobile">Mobile Phone</Link>
          </Text>
         </Box>
          <Box>
          <Text as="b" m="auto" _hover={{ bg: "gray.400" }} mt="10px">
            Sale:House&appartment
          </Text>
          </Box>
         <Box>
         <Text as="b" m="auto" _hover={{ bg: "gray.400" }} mt="10px">
            Olx(renew)Mobile
          </Text>
         </Box>
          <Box>
          <Text as="b" m="auto" _hover={{ bg: "gray.400" }} mt="10px">
            Scooter
          </Text>
          </Box>
         <Box>
         <Text as="b" m="auto" _hover={{ bg: "gray.400" }} mt="10px">
            rent(house&appartment)
          </Text>
         </Box>
        </Flex>
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
           
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
 
  
  const NAV_ITEMS = [
    {
      label: 'Inspiration',
     
    },
    {
      label: 'Find Work',
     
    },
    {
      label: 'Learn Design',
      href: '#',
    },
    {
      label: 'Hire Designers',
      href: '#',
    },
  ];