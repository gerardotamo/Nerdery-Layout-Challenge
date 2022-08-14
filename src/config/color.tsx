const GreenColor = {
    greenPrimaryColor: "#4AC29D"
}
const OrangeColor = {
    orangePrimaryColor: "#FF9F00",
    orangeSecondaryColor: "#FFB233",
    shadowOrangePrimaryColor: "#FFD999"
    
}
const BlueColor = {
    bluePrimaryColor: "#689FF8"
}

const RedColor ={ 
    redPrimaryColor: "#FF6860"
}

const BaseColor = {
    ...GreenColor,
    ...OrangeColor,
    ...BlueColor,
    ...RedColor,
    primaryColor: "#343951",
    whiteColor: "#FFFFFF",
    grayColor: "#C4C4C4",
    inactiveGrayColor: "#858A9D",
    inactiveSecondaryGrayColor: "#9D9FAF",
    secondaryGrayColor: "#BEC0C8",
    accentGrayColor: "#BCBECA",
    fieldColor: "#F5F6FC",
    dividerFieldColor: "#E0E7F1",
    dividerPrimaryColor: "#464C61"

    
}

export {BaseColor}