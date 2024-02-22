import React from "react";

const SectionOne = () => {
  return (
    <div>
      <h1>Section One</h1>
      <p>This is the first section of the page.</p>
    </div>
  );
};

const SectionTwo = () => {
  return (
    <div>
      <h1>Section Two</h1>
      <p>This is the second section of the page.</p>
    </div>
  );
};

const PageWithMultipleSections = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default PageWithMultipleSections;