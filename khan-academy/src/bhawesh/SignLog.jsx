import { useState } from "react";
import { Button, Stack } from "@chakra-ui/react";
import "./SL.css";

export const SignLog = () => {
  const [learner, setLearner] = useState(false);
  const [teacher, setTeacher] = useState(false);
  const [parents, setParent] = useState(false);

  function handleLearner() {
    setLearner(true);
    setParent(false);
    setTeacher(false);
  }
  function handleParent() {
    setLearner(false);
    setParent(true);
    setTeacher(false);
  }
  function handleTeacher() {
    setLearner(false);
    setParent(false);
    setTeacher(true);
  }

  return (
    <>
      <div className="SignLog">
        <div className="SL-left"></div>
        <div className="SL-right">
          <div className="SL-card">
            <h1>Sign up</h1>
            <p>Join Khan Academy as a</p>
            <div>
              <Stack direction="row" spacing={4} align="center">
                <Button
                  colorScheme="teal"
                  variant="solid"
                  onClick={handleLearner}
                >
                  Learner
                </Button>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  onClick={handleTeacher}
                >
                  Teacher
                </Button>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  onClick={handleParent}
                >
                  Parent
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
