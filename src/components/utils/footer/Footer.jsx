import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <footer className="bg-[#637A9F] py-[1em]">
      <h1 className="text-center font-semibold text-white text-2xl">
        Nico Hndz
      </h1>
      <div className="flex justify-center gap-x-[1em]">
        <a
          href="https://www.linkedin.com/in/nicohndz/"
          target="_blank"
          rel="noopener"
        >
          <IconButton size="large" color="warning">
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </a>
        <a href="https://github.com/NicoHndz" target="_blank" rel="noopener">
          <IconButton size="large" color="warning">
            <GitHubIcon fontSize="large" />
          </IconButton>
        </a>
      </div>
      <div className="flex justify-center gap-x-5">
        <p className="font-semibold text-white">nico.hndz.s@gmail.com</p>
        <p className="font-semibold text-white">+56 9 57504489</p>
      </div>
    </footer>
  );
}
