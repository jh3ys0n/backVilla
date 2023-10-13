
import { Dialog, DialogContent } from "@mui/material";
import UploadMedia from "../HomePages/UploadMedia";
import React, { useState } from "react";
const DialojMedia = () => {
    const [open, setOpen] = useState(true);

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
        >
            <DialogContent>
             <UploadMedia></UploadMedia>
            </DialogContent>
        </Dialog>
    );
};

export default DialojMedia;
