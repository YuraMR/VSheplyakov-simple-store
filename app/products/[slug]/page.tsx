import { notFound } from "next/navigation";
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  CardMedia,
  Stack,
  Box
} from "@mui/material";
import AdCarousel from "@/app/components/Recommendation/AdCarousel";
import { getProduct, getProducts } from "@/app/lib/data/products";
import BuyNowButton from "@/app/components/BuyNowButton/BuyNowButton";
import { Product } from "@/app/utils/types";
import React from "react";

type Params = { slug: string };

const ProductDetailedPage = async ({ params }: { params: Params }) => {
  try {
    const { slug } = await params;
    const products = (await getProducts()) as Product[];
    const product = (await getProduct(slug)) as Product;

    if (!product) {
      notFound();
    }

    return (
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Stack alignItems={"center"}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  borderRadius: 2
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h2" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              ${product.price}
            </Typography>
            <List>
              {product.description.split(",").map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemText
                    primary={
                      <Typography variant="body1" color="text.secondary">
                        • {item}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
            {/* //todo add color picker!! */}
            {/* <Stack>
              <Typography variant="h6" gutterBottom>
                choose color
              </Typography>
              <Stack direction="row" gap={2}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    bgcolor: "black",
                  }}
                />
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    bgcolor: "lightGray",
                  }}
                />
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    bgcolor: "pink",
                  }}
                />
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    bgcolor: "blue",
                  }}
                />
              </Stack>
            </Stack> */}
            <Box mt={2}>
              <BuyNowButton product={product} />
            </Box>
          </Grid>
        </Grid>
        <AdCarousel products={products} />
      </Container>
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default ProductDetailedPage;
