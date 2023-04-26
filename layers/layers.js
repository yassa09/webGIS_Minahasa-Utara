var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_0.png" /> Airmadidi<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_1.png" /> Bunaken<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_2.png" /> Dimembe<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_3.png" /> Kalawat<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_4.png" /> Kauditan<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_5.png" /> Kema<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_6.png" /> Likupang Barat<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_7.png" /> Likupang Selatan<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_8.png" /> Likupang Timur<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_9.png" /> Mapanget<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_10.png" /> Matuari<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_11.png" /> Paal Dua<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_12.png" /> Ranowulu<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_13.png" /> Talawaan<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_14.png" /> Tombariri<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_15.png" /> Tombulu<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_16.png" /> Wori<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_17.png" /> <br />'
        });
var format_AGRIKEBUN_AR_50K_2 = new ol.format.GeoJSON();
var features_AGRIKEBUN_AR_50K_2 = format_AGRIKEBUN_AR_50K_2.readFeatures(json_AGRIKEBUN_AR_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRIKEBUN_AR_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIKEBUN_AR_50K_2.addFeatures(features_AGRIKEBUN_AR_50K_2);
var lyr_AGRIKEBUN_AR_50K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGRIKEBUN_AR_50K_2, 
                style: style_AGRIKEBUN_AR_50K_2,
                interactive: true,
                title: '<img src="styles/legend/AGRIKEBUN_AR_50K_2.png" /> AGRIKEBUN_AR_50K'
            });
var format_GARISRPANTAI_LN_50K_3 = new ol.format.GeoJSON();
var features_GARISRPANTAI_LN_50K_3 = format_GARISRPANTAI_LN_50K_3.readFeatures(json_GARISRPANTAI_LN_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARISRPANTAI_LN_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARISRPANTAI_LN_50K_3.addFeatures(features_GARISRPANTAI_LN_50K_3);
var lyr_GARISRPANTAI_LN_50K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GARISRPANTAI_LN_50K_3, 
                style: style_GARISRPANTAI_LN_50K_3,
                interactive: true,
                title: '<img src="styles/legend/GARISRPANTAI_LN_50K_3.png" /> GARISRPANTAI_LN_50K'
            });
var format_PEMUKIMAN_AR_50K_4 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_4 = format_PEMUKIMAN_AR_50K_4.readFeatures(json_PEMUKIMAN_AR_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_4.addFeatures(features_PEMUKIMAN_AR_50K_4);
var lyr_PEMUKIMAN_AR_50K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_4, 
                style: style_PEMUKIMAN_AR_50K_4,
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_4.png" /> PEMUKIMAN_AR_50K'
            });
var format_SUNGAI_AR_50K_5 = new ol.format.GeoJSON();
var features_SUNGAI_AR_50K_5 = format_SUNGAI_AR_50K_5.readFeatures(json_SUNGAI_AR_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_50K_5.addFeatures(features_SUNGAI_AR_50K_5);
var lyr_SUNGAI_AR_50K_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_AR_50K_5, 
                style: style_SUNGAI_AR_50K_5,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_50K_5.png" /> SUNGAI_AR_50K'
            });
var format_RumahSakitMINUT_6 = new ol.format.GeoJSON();
var features_RumahSakitMINUT_6 = format_RumahSakitMINUT_6.readFeatures(json_RumahSakitMINUT_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakitMINUT_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakitMINUT_6.addFeatures(features_RumahSakitMINUT_6);
var lyr_RumahSakitMINUT_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahSakitMINUT_6, 
                style: style_RumahSakitMINUT_6,
                interactive: true,
                title: '<img src="styles/legend/RumahSakitMINUT_6.png" /> Rumah Sakit MINUT'
            });
var format_SPBU_PT_50K_7 = new ol.format.GeoJSON();
var features_SPBU_PT_50K_7 = format_SPBU_PT_50K_7.readFeatures(json_SPBU_PT_50K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPBU_PT_50K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPBU_PT_50K_7.addFeatures(features_SPBU_PT_50K_7);
var lyr_SPBU_PT_50K_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SPBU_PT_50K_7, 
                style: style_SPBU_PT_50K_7,
                interactive: true,
                title: '<img src="styles/legend/SPBU_PT_50K_7.png" /> SPBU_PT_50K'
            });
var format_KANTORAIRMINUM_PT_50K_8 = new ol.format.GeoJSON();
var features_KANTORAIRMINUM_PT_50K_8 = format_KANTORAIRMINUM_PT_50K_8.readFeatures(json_KANTORAIRMINUM_PT_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KANTORAIRMINUM_PT_50K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANTORAIRMINUM_PT_50K_8.addFeatures(features_KANTORAIRMINUM_PT_50K_8);
var lyr_KANTORAIRMINUM_PT_50K_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KANTORAIRMINUM_PT_50K_8, 
                style: style_KANTORAIRMINUM_PT_50K_8,
                interactive: true,
                title: '<img src="styles/legend/KANTORAIRMINUM_PT_50K_8.png" /> KANTORAIRMINUM_PT_50K'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_AGRIKEBUN_AR_50K_2.setVisible(true);lyr_GARISRPANTAI_LN_50K_3.setVisible(true);lyr_PEMUKIMAN_AR_50K_4.setVisible(true);lyr_SUNGAI_AR_50K_5.setVisible(true);lyr_RumahSakitMINUT_6.setVisible(true);lyr_SPBU_PT_50K_7.setVisible(true);lyr_KANTORAIRMINUM_PT_50K_8.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_AGRIKEBUN_AR_50K_2,lyr_GARISRPANTAI_LN_50K_3,lyr_PEMUKIMAN_AR_50K_4,lyr_SUNGAI_AR_50K_5,lyr_RumahSakitMINUT_6,lyr_SPBU_PT_50K_7,lyr_KANTORAIRMINUM_PT_50K_8];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRIKEBUN_AR_50K_2.set('fieldAliases', {'keterangan': 'keterangan', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_GARISRPANTAI_LN_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'DTMVER': 'DTMVER', 'KARGPN': 'KARGPN', 'FCODE': 'FCODE', 'KODGPN': 'KODGPN', 'TIPGPN': 'TIPGPN', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMUKIMAN_AR_50K_4.set('fieldAliases', {'keterangan': 'keterangan', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_AR_50K_5.set('fieldAliases', {'keterangan': 'keterangan', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RumahSakitMINUT_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jalan': 'Jalan', 'Kecamatan': 'Kecamatan', });
lyr_SPBU_PT_50K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KANTORAIRMINUM_PT_50K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AGRIKEBUN_AR_50K_2.set('fieldImages', {'keterangan': '', 'JNSKBN': 'TextEdit', 'FCODE': 'TextEdit', 'PUDATE': 'DateTime', 'AQDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_GARISRPANTAI_LN_50K_3.set('fieldImages', {'NAMOBJ': '', 'DTMVER': '', 'KARGPN': '', 'FCODE': '', 'KODGPN': '', 'TIPGPN': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_PEMUKIMAN_AR_50K_4.set('fieldImages', {'keterangan': '', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SUNGAI_AR_50K_5.set('fieldImages', {'keterangan': '', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RumahSakitMINUT_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jalan': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_SPBU_PT_50K_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_KANTORAIRMINUM_PT_50K_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRIKEBUN_AR_50K_2.set('fieldLabels', {'keterangan': 'header label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_GARISRPANTAI_LN_50K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'DTMVER': 'no label', 'KARGPN': 'no label', 'FCODE': 'no label', 'KODGPN': 'no label', 'TIPGPN': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PEMUKIMAN_AR_50K_4.set('fieldLabels', {'keterangan': 'header label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_AR_50K_5.set('fieldLabels', {'keterangan': 'header label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RumahSakitMINUT_6.set('fieldLabels', {'id': 'no label', 'Nama': 'header label', 'Jalan': 'no label', 'Kecamatan': 'no label', });
lyr_SPBU_PT_50K_7.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KANTORAIRMINUM_PT_50K_8.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KANTORAIRMINUM_PT_50K_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});