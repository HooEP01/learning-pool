"use client";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import NavItem from "./NavItem";
import { LinkItems } from "@/constant";
import { usePathname } from "next/navigation";
import { IconMenuDeep, IconX } from "@tabler/icons-react";
import CustomIcon from "../Custom/CustomIcon";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const pathname = usePathname();

  return (
    <>
      <Button
        onClick={onOpen}
        p="1"
        size="sm"
        leftIcon={<CustomIcon icon={IconMenuDeep} />}
      ></Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex justify={"space-between"}>
              <p>LearningPool</p>
              <Button onClick={onClose} p="1" size="sm">
                <CustomIcon icon={IconX} />
              </Button>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            {LinkItems.map((link) => (
              <NavItem
                key={link.name}
                icon={link.icon}
                href={link.href}
                pathname={pathname}
              >
                {link.name}
              </NavItem>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNav;
