var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Administrasi_Kec_Bogor_1 = new ol.format.GeoJSON();
var features_Administrasi_Kec_Bogor_1 = format_Administrasi_Kec_Bogor_1.readFeatures(json_Administrasi_Kec_Bogor_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrasi_Kec_Bogor_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrasi_Kec_Bogor_1.addFeatures(features_Administrasi_Kec_Bogor_1);
var lyr_Administrasi_Kec_Bogor_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administrasi_Kec_Bogor_1, 
                style: style_Administrasi_Kec_Bogor_1,
                popuplayertitle: "Administrasi_Kec_Bogor",
                interactive: false,
                    title: '<img src="styles/legend/Administrasi_Kec_Bogor_1.png" /> Administrasi_Kec_Bogor'
                });
var format_Kec_Tanah_Sereal_2 = new ol.format.GeoJSON();
var features_Kec_Tanah_Sereal_2 = format_Kec_Tanah_Sereal_2.readFeatures(json_Kec_Tanah_Sereal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kec_Tanah_Sereal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kec_Tanah_Sereal_2.addFeatures(features_Kec_Tanah_Sereal_2);
var lyr_Kec_Tanah_Sereal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kec_Tanah_Sereal_2, 
                style: style_Kec_Tanah_Sereal_2,
                popuplayertitle: "Kec_Tanah_Sereal",
                interactive: false,
                    title: '<img src="styles/legend/Kec_Tanah_Sereal_2.png" /> Kec_Tanah_Sereal'
                });
var format_Batas_Admin_Kel_Kota_Bogor_3 = new ol.format.GeoJSON();
var features_Batas_Admin_Kel_Kota_Bogor_3 = format_Batas_Admin_Kel_Kota_Bogor_3.readFeatures(json_Batas_Admin_Kel_Kota_Bogor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Admin_Kel_Kota_Bogor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Admin_Kel_Kota_Bogor_3.addFeatures(features_Batas_Admin_Kel_Kota_Bogor_3);
var lyr_Batas_Admin_Kel_Kota_Bogor_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Admin_Kel_Kota_Bogor_3, 
                style: style_Batas_Admin_Kel_Kota_Bogor_3,
                popuplayertitle: "Batas_Admin_Kel_Kota_Bogor",
                interactive: false,
                    title: '<img src="styles/legend/Batas_Admin_Kel_Kota_Bogor_3.png" /> Batas_Admin_Kel_Kota_Bogor'
                });
var format_Batas_Admin_Kec_Kota_Bogor_4 = new ol.format.GeoJSON();
var features_Batas_Admin_Kec_Kota_Bogor_4 = format_Batas_Admin_Kec_Kota_Bogor_4.readFeatures(json_Batas_Admin_Kec_Kota_Bogor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Admin_Kec_Kota_Bogor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Admin_Kec_Kota_Bogor_4.addFeatures(features_Batas_Admin_Kec_Kota_Bogor_4);
var lyr_Batas_Admin_Kec_Kota_Bogor_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Admin_Kec_Kota_Bogor_4, 
                style: style_Batas_Admin_Kec_Kota_Bogor_4,
                popuplayertitle: "Batas_Admin_Kec_Kota_Bogor",
                interactive: false,
                    title: '<img src="styles/legend/Batas_Admin_Kec_Kota_Bogor_4.png" /> Batas_Admin_Kec_Kota_Bogor'
                });
var format_Titik_SMP_Kec_Tanah_Sereal_5 = new ol.format.GeoJSON();
var features_Titik_SMP_Kec_Tanah_Sereal_5 = format_Titik_SMP_Kec_Tanah_Sereal_5.readFeatures(json_Titik_SMP_Kec_Tanah_Sereal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_SMP_Kec_Tanah_Sereal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_SMP_Kec_Tanah_Sereal_5.addFeatures(features_Titik_SMP_Kec_Tanah_Sereal_5);cluster_Titik_SMP_Kec_Tanah_Sereal_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Titik_SMP_Kec_Tanah_Sereal_5
});
var lyr_Titik_SMP_Kec_Tanah_Sereal_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Titik_SMP_Kec_Tanah_Sereal_5, 
                style: style_Titik_SMP_Kec_Tanah_Sereal_5,
                popuplayertitle: "Titik_SMP_Kec_Tanah_Sereal",
                interactive: true,
                    title: '<img src="styles/legend/Titik_SMP_Kec_Tanah_Sereal_5.png" /> Titik_SMP_Kec_Tanah_Sereal'
                });

lyr_OpenStreetMap_0.setVisible(true);lyr_Administrasi_Kec_Bogor_1.setVisible(true);lyr_Kec_Tanah_Sereal_2.setVisible(true);lyr_Batas_Admin_Kel_Kota_Bogor_3.setVisible(true);lyr_Batas_Admin_Kec_Kota_Bogor_4.setVisible(true);lyr_Titik_SMP_Kec_Tanah_Sereal_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Administrasi_Kec_Bogor_1,lyr_Kec_Tanah_Sereal_2,lyr_Batas_Admin_Kel_Kota_Bogor_3,lyr_Batas_Admin_Kec_Kota_Bogor_4,lyr_Titik_SMP_Kec_Tanah_Sereal_5];
lyr_Administrasi_Kec_Bogor_1.set('fieldAliases', {'FID_Admini': 'FID_Admini', 'Id': 'Id', 'FID_Admi_1': 'FID_Admi_1', 'OBJECTID': 'OBJECTID', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'luas': 'luas', });
lyr_Kec_Tanah_Sereal_2.set('fieldAliases', {'FID_Admini': 'FID_Admini', 'Id': 'Id', 'FID_Admi_1': 'FID_Admi_1', 'OBJECTID': 'OBJECTID', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'luas': 'luas', });
lyr_Batas_Admin_Kel_Kota_Bogor_3.set('fieldAliases', {'Nama': 'Nama', });
lyr_Batas_Admin_Kec_Kota_Bogor_4.set('fieldAliases', {'Nama': 'Nama', });
lyr_Titik_SMP_Kec_Tanah_Sereal_5.set('fieldAliases', {'Name': 'Name', 'Status': 'Status', 'PD': 'PD', 'Guru': 'Guru', 'Kelas': 'Kelas', 'Lab': 'Lab', 'Perpus': 'Perpus', 'Latitude': 'Latitude', 'Longtitude': 'Longtitude', 'Alamat': 'Alamat', 'Gambar': 'Gambar', });
lyr_Administrasi_Kec_Bogor_1.set('fieldImages', {'FID_Admini': 'Range', 'Id': 'Range', 'FID_Admi_1': 'Range', 'OBJECTID': 'Range', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'luas': 'TextEdit', });
lyr_Kec_Tanah_Sereal_2.set('fieldImages', {'FID_Admini': 'Range', 'Id': 'Range', 'FID_Admi_1': 'Range', 'OBJECTID': 'Range', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'luas': 'TextEdit', });
lyr_Batas_Admin_Kel_Kota_Bogor_3.set('fieldImages', {'Nama': 'TextEdit', });
lyr_Batas_Admin_Kec_Kota_Bogor_4.set('fieldImages', {'Nama': '', });
lyr_Titik_SMP_Kec_Tanah_Sereal_5.set('fieldImages', {'Name': 'TextEdit', 'Status': 'TextEdit', 'PD': 'Range', 'Guru': 'Range', 'Kelas': 'Range', 'Lab': 'Range', 'Perpus': 'Range', 'Latitude': 'TextEdit', 'Longtitude': 'TextEdit', 'Alamat': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_Administrasi_Kec_Bogor_1.set('fieldLabels', {'FID_Admini': 'no label', 'Id': 'no label', 'FID_Admi_1': 'no label', 'OBJECTID': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'luas': 'no label', });
lyr_Kec_Tanah_Sereal_2.set('fieldLabels', {'FID_Admini': 'no label', 'Id': 'no label', 'FID_Admi_1': 'no label', 'OBJECTID': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'luas': 'no label', });
lyr_Batas_Admin_Kel_Kota_Bogor_3.set('fieldLabels', {'Nama': 'no label', });
lyr_Batas_Admin_Kec_Kota_Bogor_4.set('fieldLabels', {'Nama': 'no label', });
lyr_Titik_SMP_Kec_Tanah_Sereal_5.set('fieldLabels', {'Name': 'inline label - always visible', 'Status': 'inline label - always visible', 'PD': 'inline label - always visible', 'Guru': 'inline label - always visible', 'Kelas': 'inline label - always visible', 'Lab': 'inline label - always visible', 'Perpus': 'inline label - always visible', 'Latitude': 'header label - visible with data', 'Longtitude': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Gambar': 'inline label - always visible', });
lyr_Titik_SMP_Kec_Tanah_Sereal_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});