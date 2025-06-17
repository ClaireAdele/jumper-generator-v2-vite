const toggleOptions = [
    {
        toggleOption: "pick-unit",
        buttonText: "Unit"
    },
    {
        toggleOption: "pick-jumper-shape",
        buttonText: "Contruction"
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
    {
        toggleOption: "review-data",
        buttonText: "Review Selection"
    }
];

const NavigationTabs = ({ toggleComponent, setToggleComponent }) => {
    
    const handleClickTab = (event) => {
        const selectedTab = event.target.name;
        event.target.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
        setToggleComponent(selectedTab);
    }

    const checkIfButtonIsSelected = (toggledComponent) => {
        return toggleComponent === toggledComponent;
    }

    return (
        <nav aria-label="jumper-data-form-navigation-tabs" id="jumper-data-form-navigation-tabs">
            <div role="tablist">
                {toggleOptions.map(({toggleOption, buttonText}) => { 
                    return <button key={toggleOption} role="tab" aria-selected={checkIfButtonIsSelected(toggleOption)} onClick={handleClickTab} name={toggleOption} className={checkIfButtonIsSelected(toggleOption) ? "selected-nav-tab" : "nav-tab" }>{buttonText}</button>
                })}
            </div>
        </nav>
    );
};

export default NavigationTabs;