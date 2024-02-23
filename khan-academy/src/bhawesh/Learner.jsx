import { Button, Input,  } from "@chakra-ui/react";
import { useState } from "react";
import { Navigate, useNavigate, } from "react-router-dom";

export const Learner = () => {
    const [sign, setSign] = useState(false);
  
    const navigate = useNavigate();
    const handleSignIn = () => {
       navigate('/signUp2');
    };
  return (
    <>
      <div>
        <h2>What is your date of birth?</h2>
        <Input 
            onChange={()=>setSign(true)}
          placeholder="Select Date and Time"
          backgroundColor={"lightgray"}
          color={"black"}
          size="md"
          type="date"
        />
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
        {sign? 
            
      <Button onClick={handleSignIn} colorScheme='linkedin'>Continue</Button>
      :""
        }
      </div>
    </>
  );
};
