import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./value.css";
import data from "../../../utils/accordion";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="/value.png" alt="Value Illustration" />
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={["0"]}
          >
            {data.map((item, index) => (
              <AccordionItem
                className="accordion-item"
                key={item.id || index}
                uuid={item.id || index.toString()}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordion-button">
                    <AccordionItemState>
                      {({ expanded }) => (
                        <>
                          <div className="flexCenter icon">{item.icon}</div>
                          <span className="primaryText">{item.heading}</span>
                          <div className="flexCenter icon">
                            <MdOutlineArrowDropDown size={20} />
                          </div>
                        </>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>{item.content}</p>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
