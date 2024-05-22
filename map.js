require([
    "esri/config", "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapGallery"
],
    function (esriConfig, WebMap, MapView, Home, LayerList, BasemapGallery) {
        esriConfig.apiKey = "AAPK18de79411ec34c1d91324b64adfb025cZ2kco7lrwaw8dKzeb_Ms4HBfalIgYEgA642Ral-CZZPEt4guLgsj6jErVcXhhj1B";

        const webmap = new WebMap({
            portalItem: {
                id: "232b4d297d054b2a831a3ce629ac8495"
            }
        });
        const view = new MapView({
            container: "viewDiv",
            map: webmap
        });

        const homeBtn = new Home({

            view

        });

        view.ui.add(homeBtn, "top-left");

        const layerList = new LayerList({
            view,
        });
        view.ui.add("layer-list-btn","top-right");
        view.ui.add(layerList, "top-right");
        view.ui.add("basemap-gallery-btn", "top-right");

        const basemapGallery = new BasemapGallery({
            view
        })

        view.ui.add(basemapGallery, "top-right");

        document.getElementById("layer-list-btn").addEventListener("click", function() {
            toggleButton("layerList");


            layerListEl.style.setProperty("display", currentProp == "none" ? "block" : "none");
        })
        document.getElementById("basemap-gallery-btn").addEventListener("click", function(){
            toggleButton("gallery");

        });
        function toggleButton(element) {
            if(element == "layerList") {
                const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
                const currentProp = layerListEl.style.getPropertyValue("display");
                layerListEl.style.setProperty("display", currentProp == "none" ? "block" : "none");  
            } else if(element == "gallery") {
                const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
                const currentPropGallery = galleryEl.style.getPropertyValue("display");
                galleryEl.style.setProperty("display", currentPropGallery == "none" ? "block" : "none");  
            }
            



        }

    });