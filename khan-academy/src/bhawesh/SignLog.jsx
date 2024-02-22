import { useState } from "react";
import { Button, LightMode, Stack } from "@chakra-ui/react";
import "./SL.css";
import { Learner } from "./Learner";

export const SignLog = () => {
  const [learner, setLearner] = useState(true);
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
                  colorScheme= {learner? "teal":"gray"}
                  variant="solid"
                  onClick={handleLearner}
                >
                  Learner
                </Button>
                <Button
                  colorScheme={teacher? "teal":"gray"}
                  variant="solid"
                  onClick={handleTeacher}
                >
                  Teacher
                </Button>
                <Button
                  colorScheme={parents? "teal":"gray"}
                  variant="solid"
                  onClick={handleParent}
                >
                  Parent
                </Button>
              </Stack>
            </div>
            <Learner />
          </div>
        </div>
      </div>
    </>
  );
};
