"use client";

import {Grid, Typography} from "@mui/material";
import {motion} from "framer-motion";
import DeviceSessionsCard from "../../../components/security/DeviceSessionsCard";
import LoginHistoryCard from "../../../components/security/LoginHistoryCard";
import SecurityActionsCard from "../../../components/security/SecurityActionsCard";
import TwoFactorCard from "../../../components/security/TwoFactorCard";
import {pageTransition} from "../../../lib/motion";

export default function SecurityPage() {
    return (
        <motion.div {...pageTransition}>
            <Typography variant="h2" mb={4}>
                Security
            </Typography>

            <Grid container spacing={3}>
                <Grid sx={{xs: 12, md: 6}}>
                    <TwoFactorCard/>
                </Grid>

                <Grid sx={{xs: 12, md: 6}}>
                    <DeviceSessionsCard/>
                </Grid>

                <Grid sx={{xs: 12}}>
                    <LoginHistoryCard/>
                </Grid>

                <Grid sx={{xs: 12}}>
                    <SecurityActionsCard/>
                </Grid>
            </Grid>
        </motion.div>
    );
}
