var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_esparreguerapositiusambreferenciacadastral_1 = new ol.format.GeoJSON();
var features_esparreguerapositiusambreferenciacadastral_1 = format_esparreguerapositiusambreferenciacadastral_1.readFeatures(json_esparreguerapositiusambreferenciacadastral_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_esparreguerapositiusambreferenciacadastral_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_esparreguerapositiusambreferenciacadastral_1.addFeatures(features_esparreguerapositiusambreferenciacadastral_1);
var lyr_esparreguerapositiusambreferenciacadastral_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_esparreguerapositiusambreferenciacadastral_1, 
                style: style_esparreguerapositiusambreferenciacadastral_1,
                interactive: true,
                title: '<img src="styles/legend/esparreguerapositiusambreferenciacadastral_1.png" /> esparreguera positius amb referencia cadastral'
            });
var format_esparreguerapositiussensereferenciacadastral_2 = new ol.format.GeoJSON();
var features_esparreguerapositiussensereferenciacadastral_2 = format_esparreguerapositiussensereferenciacadastral_2.readFeatures(json_esparreguerapositiussensereferenciacadastral_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_esparreguerapositiussensereferenciacadastral_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_esparreguerapositiussensereferenciacadastral_2.addFeatures(features_esparreguerapositiussensereferenciacadastral_2);
var lyr_esparreguerapositiussensereferenciacadastral_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_esparreguerapositiussensereferenciacadastral_2, 
                style: style_esparreguerapositiussensereferenciacadastral_2,
                interactive: true,
                title: '<img src="styles/legend/esparreguerapositiussensereferenciacadastral_2.png" /> esparreguera positius sense referencia cadastral'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_esparreguerapositiusambreferenciacadastral_1.setVisible(true);lyr_esparreguerapositiussensereferenciacadastral_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_esparreguerapositiusambreferenciacadastral_1,lyr_esparreguerapositiussensereferenciacadastral_2];
lyr_esparreguerapositiusambreferenciacadastral_1.set('fieldAliases', {'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', 'layer': 'layer', 'path': 'path', });
lyr_esparreguerapositiussensereferenciacadastral_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_esparreguerapositiusambreferenciacadastral_1.set('fieldImages', {'gml_id': 'TextEdit', 'beginLifespanVersion': 'DateTime', 'conditionOfConstruction': 'TextEdit', 'beginning': 'DateTime', 'end': 'DateTime', 'endLifespanVersion': 'TextEdit', 'informationSystem': 'TextEdit', 'reference': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'horizontalGeometryEstimatedAccuracy': 'TextEdit', 'horizontalGeometryEstimatedAccuracy_uom': 'TextEdit', 'horizontalGeometryReference': 'TextEdit', 'referenceGeometry': 'CheckBox', 'currentUse': 'TextEdit', 'numberOfBuildingUnits': 'Range', 'numberOfDwellings': 'Range', 'numberOfFloorsAboveGround': 'TextEdit', 'documentLink': 'TextEdit', 'format': 'TextEdit', 'sourceStatus': 'TextEdit', 'officialAreaReference': 'TextEdit', 'value': 'Range', 'value_uom': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_esparreguerapositiussensereferenciacadastral_2.set('fieldImages', {'fid': 'Range', 'id': 'TextEdit', });
lyr_esparreguerapositiusambreferenciacadastral_1.set('fieldLabels', {'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_esparreguerapositiussensereferenciacadastral_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_esparreguerapositiussensereferenciacadastral_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});