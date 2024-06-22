import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { Icon } from "@tabler/icons-react";
import CustomIcon from "../Custom/CustomIcon";

interface NavItemProps extends FlexProps {
  icon: Icon;
  children: string;
  href: string;
  pathname: string;
}

const NavItem = ({ icon, children, href, pathname, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href={href}
      w="full"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="2"
        gap="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "teal.400",
          color: "black",
        }}
        bg={pathname === href ? "teal.400" : "transparent"}
        color={pathname === href ? "black" : ""}
        {...rest}
      >
        {icon && <CustomIcon icon={icon} />}
        {children}
      </Flex>
    </Box>
  );
};

export default NavItem;
