var size = 0;
var placement = 'point';
function categories_RDTR_12(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Badan Jalan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(235,30,30,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perdagangan dan Jasa Skala SWP':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,165,165,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perumahan Kepadatan Sangat Tinggi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,190,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_RDTR_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NAMOBJ");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("KODSZN_1") !== null) {
        labelText = String(feature.get("KODSZN_1"));
    }
    
var style = categories_RDTR_12(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
