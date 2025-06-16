
const NavigationTabs = ({ toggleComponent, setToggleComponent }) => {
    
    const handleClickTab = (event) => {
        setToggleComponent(event.target.name);
    }

    return (
        <nav aria-label="jumper-data-form-navigation-tabs" id="jumper-data-form-navigation-tabs">
            <div role="tablist">
                <button role="tab" aria-selected={ toggleComponent === "pick-unit" ? true : false } onClick={handleClickTab} name="pick-unit">Pick Unit</button>
                <button role="tab" aria-selected={ toggleComponent === "pick-shape" ? true : false }  onClick={handleClickTab} name="pick-shape">Pick Shape</button>
                <button role="tab" aria-selected={ toggleComponent === "pick-fit" ? true : false } onClick={handleClickTab} name="pick-fit">Pick Desired Fit</button>
                <button role="tab" aria-selected={ toggleComponent === "measurements-entry" ? true : false } onClick={handleClickTab} name="measurements-entry">Enter Measurements</button>
                <button role="tab" aria-selected={ toggleComponent === "review-data" ? true : false } onClick={handleClickTab} name="review-data">Review Selection</button>
            </div>
        </nav>
    );
};

export default NavigationTabs;