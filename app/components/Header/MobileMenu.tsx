import { Box, Button, Drawer, Stack } from "@mui/material";
import Link from "next/link";
import { headerConfig } from "./headerConfig";

type MobileMenuProps = {
  open: boolean;
  close: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  open,
  close,
}) => {
  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Drawer
        anchor="right"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            width: "50%",
          },
        }}
        onClose={close}
      >
        <Stack p={4} gap={2}>
          {headerConfig.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                whiteSpace: "nowrap",
                fontWeight: "bold",
                textDecoration: "none",
                color: "inherit",
              }}
              onClick={close}
            >
              <Button variant="text">{item.name}</Button>
            </Link>
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
}

export default MobileMenu;
