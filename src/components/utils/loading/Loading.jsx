import { Skeleton, Stack } from "@mui/material";

export default function Loading() {
    return(
        <Stack
        component={"main"}
        spacing={1}
        height="100vh"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    )
}