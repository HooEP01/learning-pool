import { Box, SkeletonText } from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Box padding="6" boxShadow="lg" w="full">
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  );
};

export default CardSkeleton;
