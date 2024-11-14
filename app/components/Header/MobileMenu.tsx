import { Box, Button, Drawer, Stack } from "@mui/material";
import Link from "next/link";
import { ROUTES_VALUES } from "./routes";

type MobileMenuProps = {
  open: boolean;
  close: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ open, close }) => {
  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Drawer
        anchor="right"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            width: "50%"
          }
        }}
        onClose={close}
      >
        <Stack p={4} gap={2}>
          {ROUTES_VALUES.map(item => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                whiteSpace: "nowrap",
                fontWeight: "bold",
                textDecoration: "none",
                color: "inherit"
              }}
              onClick={close}
            >
              <Button variant="text">{item.label}</Button>
            </Link>
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;
