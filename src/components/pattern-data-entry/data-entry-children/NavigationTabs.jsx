import { useRef } from "react";

const NavigationTabs = ({ toggleComponent, setToggleComponent }) => {
    const tabref = useRef();
    
    const handleClickTab = (event) => {
        const selectedTab = event.target.name;
        tabref.current = event.target
        tabref.current.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
        setToggleComponent(selectedTab);
    }

    console.log(tabref)

    const checkIfButtonIsSelected = (toggledComponent) => {
        return toggleComponent === toggledComponent;
    }

    const toggleOptions = [
        {
            toggleOption: "pick-unit",
            buttonText: "Pick Unit"
        },
        {
            toggleOption: "pick-shape",
            buttonText: "Pick Shape"
        },
        {
            toggleOption: "pick-fit",
            buttonText: "Pick Desired Fit"
        },
        {
            toggleOption: "measurements-entry",
            buttonText: "Enter Measurements"
        },
        {
            toggleOption: "review-data",
            buttonText: "Review Selection"
        }
    ];


    return (
        <nav aria-label="jumper-data-form-navigation-tabs" id="jumper-data-form-navigation-tabs">
            <div role="tablist">
                {toggleOptions.map(({toggleOption, buttonText}) => { 
                    return <button key={toggleOption} ref={tabref} role="tab" aria-selected={checkIfButtonIsSelected(toggleOption)} onClick={handleClickTab} name={toggleOption} className={checkIfButtonIsSelected(toggleOption) ? "selected-nav-tab" : "nav-tab" }>{buttonText}</button>
                })}
            </div>
        </nav>
    );
};

export default NavigationTabs;