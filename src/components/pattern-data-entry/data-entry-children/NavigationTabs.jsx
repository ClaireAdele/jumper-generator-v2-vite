
const NavigationTabs = ({ toggleComponent, setToggleComponent }) => {
    
    const handleClickTab = (event) => {
        setToggleComponent(event.target.name);
    }

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
                {toggleOptions.map((option) => { 
                    return <button role="tab" aria-selected={checkIfButtonIsSelected(option.toggleOption)} onClick={handleClickTab} name={option.toggleOption} className={checkIfButtonIsSelected(option.toggleOption) ? "selected-nav-tab" : "nav-tab" }>{option.buttonText}</button>
                })}
            </div>
        </nav>
    );
};

export default NavigationTabs;