import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

export default function BasicModal({
  isOpen,
  setOpen,
  onClose,
  name,
  githublink,
  instagramlink,
  linkedinlink,
  facebooklink,
  xlink,
  gmail,
}) {
  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setOpen(true)}
      >
        {`More Details`}
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={isOpen}
        onClose={onClose}
        className="w-900 h-500"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h3"
            textColor="inherit"
            fontWeight="bold"
            mb={1}
            sx={{ fontFamily: "'Poppins', sans-serif", textAlign: "center" }}
          >
            {name}
          </Typography>
          <Typography
            id="modal-desc"
            textColor="text.tertiary"
            sx={{ textAlign: "center" }}
          >
            <a
              href={githublink}
              style={{ textDecoration: "none", color: "#333" }}
            >
              <GitHubIcon
                sx={{ fontSize: 24, color: "#333", marginRight: 5 }}
              />{" "}
              GitHub
            </a>
          </Typography>
          <Typography
            id="modal-desc"
            textColor="text.tertiary"
            sx={{ textAlign: "center" }}
          >
            <a
              href={instagramlink}
              style={{ textDecoration: "none", color: "#833ab4" }}
            >
              <InstagramIcon
                sx={{ fontSize: 24, color: "#833ab4", marginRight: 5 }}
              />{" "}
              Instagram
            </a>
          </Typography>
          <Typography
            id="modal-desc"
            textColor="text.tertiary"
            sx={{ textAlign: "center" }}
          >
            <a
              href={linkedinlink}
              style={{ textDecoration: "none", color: "#0e76a8" }}
            >
              <LinkedInIcon
                sx={{ fontSize: 24, color: "#0e76a8", marginRight: 5 }}
              />{" "}
              LinkedIn
            </a>
          </Typography>
          <Typography
            id="modal-desc"
            textColor="text.tertiary"
            sx={{ textAlign: "center" }}
          >
            <a
              href={facebooklink}
              style={{ textDecoration: "none", color: "#3b5998" }}
            >
              <FacebookIcon
                sx={{ fontSize: 24, color: "#3b5998", marginRight: 5 }}
              />{" "}
              Facebook
            </a>
          </Typography>
          <Typography
            id="modal-desc"
            textColor="text.tertiary"
            sx={{ textAlign: "center" }}
          >
            <a
              href={xlink}
              style={{ textDecoration: "none", color: "#1DA1F2" }}
            >
              <TwitterIcon
                sx={{ fontSize: 24, color: "#1DA1F2", marginRight: 5 }}
              />{" "}
              Twitter
            </a>
          </Typography>
          <Typography
            id="modal-desc"
            textColor="text.tertiary"
            sx={{ textAlign: "center" }}
          >
            <a
              href={`mailto:${gmail}`}
              style={{ textDecoration: "none", color: "#EA4335" }}
            >
              <EmailIcon
                sx={{ fontSize: 24, color: "#EA4335", marginRight: 5 }}
              />{" "}
              Gmail
            </a>
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
