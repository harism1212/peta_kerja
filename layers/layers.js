var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_integrasi_kecamatan_tamsar_simply_1 = new ol.format.GeoJSON();
var features_integrasi_kecamatan_tamsar_simply_1 = format_integrasi_kecamatan_tamsar_simply_1.readFeatures(json_integrasi_kecamatan_tamsar_simply_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_integrasi_kecamatan_tamsar_simply_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_integrasi_kecamatan_tamsar_simply_1.addFeatures(features_integrasi_kecamatan_tamsar_simply_1);
var lyr_integrasi_kecamatan_tamsar_simply_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_integrasi_kecamatan_tamsar_simply_1, 
                style: style_integrasi_kecamatan_tamsar_simply_1,
                popuplayertitle: "integrasi_kecamatan_tamsar_simply",
                interactive: true,
                title: '<img src="styles/legend/integrasi_kecamatan_tamsar_simply_1.png" /> integrasi_kecamatan_tamsar_simply'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_integrasi_kecamatan_tamsar_simply_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_integrasi_kecamatan_tamsar_simply_1];
lyr_integrasi_kecamatan_tamsar_simply_1.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'OBJECTID': 'OBJECTID', 'NOP': 'NOP', 'NAMA_WP': 'NAMA_WP', 'ALAMAT_OP': 'ALAMAT_OP', 'KAV_NO_OP': 'KAV_NO_OP', 'RW': 'RW', 'RT': 'RT', 'KELURAHAN': 'KELURAHAN', 'URL_FOTO': 'URL_FOTO', });
lyr_integrasi_kecamatan_tamsar_simply_1.set('fieldImages', {'fid': 'TextEdit', 'cat': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOP': 'TextEdit', 'NAMA_WP': 'TextEdit', 'ALAMAT_OP': 'TextEdit', 'KAV_NO_OP': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', 'KELURAHAN': 'TextEdit', 'URL_FOTO': 'TextEdit', });
lyr_integrasi_kecamatan_tamsar_simply_1.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'OBJECTID': 'no label', 'NOP': 'inline label - visible with data', 'NAMA_WP': 'inline label - visible with data', 'ALAMAT_OP': 'inline label - visible with data', 'KAV_NO_OP': 'inline label - visible with data', 'RW': 'inline label - visible with data', 'RT': 'inline label - visible with data', 'KELURAHAN': 'inline label - visible with data', 'URL_FOTO': 'inline label - visible with data', });
lyr_integrasi_kecamatan_tamsar_simply_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});