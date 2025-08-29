import { useContext, useEffect, useRef } from "react";
import { FinalJumperDataContext } from "../../../contexts/FinalJumperDataContext";
import { checkAllFieldsSelected } from "../../../services-and-util-functions/utils";

const toggleOptions = [
    {
        toggleOption: "pick-unit",
        buttonText: "Unit"
    },
    {
        toggleOption: "pick-jumper-shape",
        buttonText: "Construction"
    },
    {
        toggleOption: "pick-neckline-shape",
        buttonText: "Neckline"
    },
    {
        toggleOption: "pick-fit",
        buttonText: "Desired Fit"
    },
    {
        toggleOption: "measurements-entry",
        buttonText: "Enter Measurements"
    },
];

const NavigationTabs = ({ toggleComponent, setToggleComponent }) => {
    const tabRefs = useRef({});
    const { finalJumperData } = useContext(FinalJumperDataContext);
    
    const handleClickTab = (event) => {
        const selectedTab = event.target.name;
        event.target.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
        setToggleComponent(selectedTab);
    }

    useEffect(() => {
        const selectedButton = tabRefs.current[toggleComponent];

        if (selectedButton) {
          selectedButton.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
          });
        }
      }, [toggleComponent]);

    const checkIfButtonIsSelected = (toggledComponent) => {
        return toggleComponent === toggledComponent;
    }

    return (
        <nav aria-label="jumper-data-form-navigation-tabs" id="jumper-data-form-navigation-tabs">
            <div role="tablist">
                {toggleOptions.map(({ toggleOption, buttonText }) => {
                    return <button ref={(el) => tabRefs.current[toggleOption] = el} key={toggleOption} role="tab" aria-selected={checkIfButtonIsSelected(toggleOption)} onClick={handleClickTab} name={toggleOption} className={checkIfButtonIsSelected(toggleOption) ? "selected-nav-tab" : "nav-tab"}>{buttonText}</button>
                })}
                {checkAllFieldsSelected(finalJumperData) &&
                    <button ref={(el) => tabRefs.current["review-data"] = el} key={"review-data"} role="tab" aria-selected={checkIfButtonIsSelected("review-data")} onClick={handleClickTab} name={"review-data"} className={checkIfButtonIsSelected("review-data") ? "selected-nav-tab" : "nav-tab"}>Review Selection</button>
                }
            </div>
        </nav>
    );
};

export default NavigationTabs;