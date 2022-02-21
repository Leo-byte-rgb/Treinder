import { useNavigate } from "react-router-dom";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

export const Card = ({ name, description, phone, email, city, photo }) => {
  return (
    <Center py={6}>
      <Box
        maxW={"360px"}
        minH={"400px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={photo}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"} textOverflow="ellipsis">
          {name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {email}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
          textOverflow="ellipsis"
          maxH="150px"
        >
          {description}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #{city}
          </Badge>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <a
            style={{ width: "100%" }}
            href={` https://api.whatsapp.com/send?phone=55${phone}`}
            target="_blank"
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Contato
            </Button>
          </a>
        </Stack>
      </Box>
    </Center>
  );
};
