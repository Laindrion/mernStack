import { Box, Container, VStack, Heading, useColorModeValue, Input } from "@chakra-ui/react";
import { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  return (
    <Container maxW={"container.sms"}>
      <VStack
        spacing={8}>
        <Heading as={"h1"} size={"2x1"} textAlign={"center"}>
          Create New Prdouct
        </Heading>

        <Box
          w={"full"} bg={useColorModeValue("white", "gray.800")}
          p={6} rounded={"lg"} shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholde="Product Name"
              name="name"
              value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />

            <Input
              placeholde="Price"
              name="price"
              type="number"
              value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />

            <Input
              placeholde="Image URL"
              name="image"
              value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
          </VStack>
        </Box>
      </VStack>
    </Container >
  )
}

export default CreatePage