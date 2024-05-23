/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { FacebookFill } from "../../icons/FacebookFill";
import { InstagramFill } from "../../icons/InstagramFill";
import { Twitter } from "../../icons/Twitter";

export const TeamGrid = ({ className }) => {
  return (
    <div className={`w-[733px] h-[333px] ${className}`}>
      <div className="relative w-[712px] h-[269px] top-[64px] left-[21px]">
        <img
          className="absolute w-[87px] h-[90px] top-[179px] left-[625px]"
          alt="Group"
          src="/img/group-1000004102.png"
        />
        <div className="absolute w-[648px] h-[242px] top-0 left-0">
          <div className="inline-flex flex-col items-start gap-[20px] absolute top-0 left-[283px]">
            <div className="inline-flex flex-col items-start gap-[14px] relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                <div className="relative w-[137px] mt-[-1.00px] font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-darkdark text-[length:var(--body-large-semibold-font-size)] tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] [font-style:var(--body-large-semibold-font-style)]">
                  Laurie Waller
                </div>
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
                  Software Engineer
                </div>
              </div>
              <p className="relative w-[365px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                Laurie is a full stack engineer at Olio Apps with a background in publishing and editing. Of her many
                passions for development, she enjoys figuring out problems and being a lifelong learner.
              </p>
            </div>
            <div className="inline-flex items-start gap-[14px] relative flex-[0_0_auto]">
              <div className="relative w-[32px] h-[32px] bg-[url(/static/img/back.svg)] bg-[100%_100%]">
                <FacebookFill className="!absolute !w-[16px] !h-[16px] !top-[8px] !left-[8px]" />
              </div>
              <div className="relative w-[32px] h-[32px] bg-[url(/static/img/back-1.svg)] bg-[100%_100%]">
                <Twitter className="!absolute !w-[16px] !h-[16px] !top-[8px] !left-[8px]" />
              </div>
              <div className="relative w-[32px] h-[32px] bg-[url(/static/img/xmlid-30.svg)] bg-[100%_100%]">
                <InstagramFill className="!absolute !w-[16px] !h-[16px] !top-[8px] !left-[8px]" />
              </div>
            </div>
          </div>
          <img
            className="absolute w-[256px] h-[229px] top-[14px] left-0 object-cover"
            alt="Image"
            src="/img/image-1.png"
          />
        </div>
      </div>
    </div>
  );
};
