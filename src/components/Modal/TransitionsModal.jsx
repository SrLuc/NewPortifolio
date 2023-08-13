import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ItemWork from "../UIelements/ItemWork";
import {
  PrimaryButton,
  SecondaryButton,
  TernaryButton,
} from "../UIelements/Buttons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const TransitionsModal = ({ name, html_url, description, language }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <ItemWork title={name.toLowerCase()} />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {description}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <section className="flex flex-col">
                <p>
                  Language Most Used: <strong>{language}</strong>
                </p>
                <a href={html_url} className="py-2 ">
                  <p className="text-[#191E29] font-bold text-lg hover:text-[#C0FF00]">Go to repository</p>
                </a>
              </section>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
