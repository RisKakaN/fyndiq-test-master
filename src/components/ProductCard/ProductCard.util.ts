var dayNames = [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
];

export const getFormattedDate = (dateString: string) => {
    var date = new Date(dateString);

    return `${dayNames[date.getDay()]}, ${date.getDate()} ${date.toLocaleString(
        "sv-SE",
        { month: "short" }
    )}`;
};
