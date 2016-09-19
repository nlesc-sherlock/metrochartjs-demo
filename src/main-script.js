


var chart,
    datasetNames,
    randomIndex,
    showDataSet,
    options;

datasetNames = [
    "tintin",
    "metrolines"
];

randomIndex = Math.floor(Math.random() * datasetNames.length);
showDataSet = datasetNames[randomIndex];

switch (showDataSet) {
    case "metrolines": {
            options = {
                enableTimeAxis: false,
                charge: -5,
                linkStrength: 0.5,
                linkDistance: 50,
                gravity: 0.0005,
                colors: [
                    {name: "green", hexcode: "#008000"},
                    {name: "orange", hexcode: "#FF8000"},
                    {name: "red", hexcode: "#FF0000"},
                    {name: "yellow", hexcode: "#FFFF00"}
                ],
                stationShapeRadius: 5
            };
            chart = new metrochart.MetroChart("metrochart", window.location.href + "/data/metrolines.json", options);
        }
        break;
    case "tintin": {
            options = {
                charge: 0,
                linkStrength: 0.0
            };
            chart = new metrochart.MetroChart("metrochart", window.location.href + "/data/tintin-the-black-island.json", options);
        }
}
