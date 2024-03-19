import { useState } from "react";

import {  Button,ButtonGroup,Dialog,DialogContent,DialogTitle} from "@mui/material"

const AwardsForm = ({ onClose }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  const [openAwardsDialog, setOpenAwardsDialog] = useState(false);
const [openPublicationsDialog, setOpenPublicationsDialog] = useState(false);
   
    return (
      <div>
            <Dialog open={true} onSubmit={handleSubmit}> 
      <DialogTitle sx={{backgroundColor: '#C2A85E'}}>Add Awards & Publications</DialogTitle>
      <DialogContent>
     <ButtonGroup variant="text" aria-label="Basic button group">
       <Button onClick={setOpenAwardsDialog(true)}>Awards</Button>
       <Button onClick={setOpenPublicationsDialog(true)}>Publications</Button>
      </ButtonGroup>
    </DialogContent>
    <Dialog open={openAwardsDialog} onClose={() => setOpenAwardsDialog(false)}>
  <DialogTitle>Awards</DialogTitle>
  <DialogContent>
    {/* Add content related to Awards here */}
  </DialogContent>
</Dialog>

<Dialog open={openPublicationsDialog} onClose={() => setOpenPublicationsDialog(false)}>
  <DialogTitle>Publications</DialogTitle>
  <DialogContent>
    {/* Add content related to Publications here */}
  </DialogContent>
</Dialog>

    </Dialog>

    
  </div>
      
     
    );
  };

  export default AwardsForm;