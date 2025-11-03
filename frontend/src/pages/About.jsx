import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Consider now provided laughter boy landlord dashwood. Often voice
            and the spoke. No shewing fertile village equally prepare up females
            as an. That do an case an what plan hour of paid. Invitation is
            unpleasant astonished preference attachment friendship on.
          </p>

          <p>
            Consider now provided laughter boy landlord dashwood. Often voice
            and the spoke. No shewing fertile village equally prepare up females
            as an. That do an case an what plan hour of paid. Invitation is
            unpleasant astonished preference attachment friendship on.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Consider now provided laughter boy landlord dashwood. Often voice
            and the spoke. No shewing fertile village equally prepare up females
            as an. That do an case an what plan hour of paid. Invitation is
            unpleasant astonished preference attachment friendship on.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
    </div>
  );
};

export default About;
