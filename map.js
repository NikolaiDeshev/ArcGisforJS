require([  "esri/config","esri/WebMap", "esri/views/MapView" ],
    function (esriConfig, WebMap, MapView) {
        esriConfig.apiKey = "AAPK18de79411ec34c1d91324b64adfb025cZ2kco7lrwaw8dKzeb_Ms4HBfalIgYEgA642Ral-CZZPEt4guLgsj6jErVcXhhj1B";

        const webmap = new WebMap({
            portalItem: {
                id: "232b4d297d054b2a831a3ce629ac8495"
            }
        });
        const view = new MapView({
            container: "viewDiv",
            map: webmap
        })

    })