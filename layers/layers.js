var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatellite_2 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_CSRT_KOTAINTAN_2004_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "CSRT_KOTAINTAN_2004",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CSRT_KOTAINTAN_2004_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11890023.536194, -683950.712131, 11890402.844975, -683675.180422]
                            })
                        });
var lyr_FOTOUDARA_KOTAINTAN_1993_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "FOTOUDARA_KOTAINTAN_1993",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FOTOUDARA_KOTAINTAN_1993_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11889754.391523, -684411.016253, 11890880.754350, -683487.758276]
                            })
                        });
var lyr_CSRT_BETINGREMAJA_2005_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "CSRT_BETINGREMAJA_2005",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CSRT_BETINGREMAJA_2005_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11902019.037619, -683131.604530, 11902549.682624, -682438.674752]
                            })
                        });
var lyr_FOTOUDARA_BETINGREMAJA_1993_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "FOTOUDARA_BETINGREMAJA_1993",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FOTOUDARA_BETINGREMAJA_1993_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11901597.506915, -683271.614291, 11902718.703902, -682319.401372]
                            })
                        });
var lyr_CSRT_PESINGGARDEN_SELATAN_2004_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "CSRT_PESINGGARDEN_SELATAN_2004",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CSRT_PESINGGARDEN_SELATAN_2004_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11883281.464817, -688778.198848, 11883803.774046, -687990.069023]
                            })
                        });
var lyr_CSRT_PESINGGARDEN_TENGAH_2004_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "CSRT_PESINGGARDEN_TENGAH_2004",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CSRT_PESINGGARDEN_TENGAH_2004_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11883507.553520, -688025.292389, 11884185.831448, -687264.729022]
                            })
                        });
var lyr_CSRT_BASMOL_KOTAINTAN_SALO_2004_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "CSRT_BASMOL_KOTAINTAN_SALO_2004",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CSRT_BASMOL_KOTAINTAN_SALO_2004_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11883821.777238, -687311.380276, 11884565.025816, -686815.956036]
                            })
                        });
var lyr_FOTOUDARABASMOLKOTAINTANSALOPESINGGARDEN1993_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "FOTOUDARA BASMOL, KOTA INTAN, SALO, PESING GARDEN 1993",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FOTOUDARABASMOLKOTAINTANSALOPESINGGARDEN1993_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11883130.208266, -689459.346779, 11884740.811975, -686581.376010]
                            })
                        });
var format_RDTR_12 = new ol.format.GeoJSON();
var features_RDTR_12 = format_RDTR_12.readFeatures(json_RDTR_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RDTR_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RDTR_12.addFeatures(features_RDTR_12);
var lyr_RDTR_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RDTR_12, 
                style: style_RDTR_12,
                interactive: true,
    title: 'RDTR<br />\
    <img src="styles/legend/RDTR_12_0.png" /> Badan Jalan<br />\
    <img src="styles/legend/RDTR_12_1.png" /> Perdagangan dan Jasa Skala SWP<br />\
    <img src="styles/legend/RDTR_12_2.png" /> Perumahan Kepadatan Sangat Tinggi<br />'
        });
var format_HAT_PERSIL_BPN_13 = new ol.format.GeoJSON();
var features_HAT_PERSIL_BPN_13 = format_HAT_PERSIL_BPN_13.readFeatures(json_HAT_PERSIL_BPN_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAT_PERSIL_BPN_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAT_PERSIL_BPN_13.addFeatures(features_HAT_PERSIL_BPN_13);
var lyr_HAT_PERSIL_BPN_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HAT_PERSIL_BPN_13, 
                style: style_HAT_PERSIL_BPN_13,
                interactive: true,
    title: 'HAT_PERSIL_BPN<br />\
    <img src="styles/legend/HAT_PERSIL_BPN_13_0.png" /> Hak Guna Bangunan<br />\
    <img src="styles/legend/HAT_PERSIL_BPN_13_1.png" /> Hak Milik<br />\
    <img src="styles/legend/HAT_PERSIL_BPN_13_2.png" /> Hak Pakai<br />\
    <img src="styles/legend/HAT_PERSIL_BPN_13_3.png" /> Hak Pengelolaan<br />\
    <img src="styles/legend/HAT_PERSIL_BPN_13_4.png" /> Hak Wakaf<br />'
        });
var format_INVENTANAH2023_14 = new ol.format.GeoJSON();
var features_INVENTANAH2023_14 = format_INVENTANAH2023_14.readFeatures(json_INVENTANAH2023_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INVENTANAH2023_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INVENTANAH2023_14.addFeatures(features_INVENTANAH2023_14);
var lyr_INVENTANAH2023_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INVENTANAH2023_14, 
                style: style_INVENTANAH2023_14,
                interactive: true,
                title: '<img src="styles/legend/INVENTANAH2023_14.png" /> INVEN TANAH 2023'
            });
var format_15_KAMPUNG_KEPGUB979_15 = new ol.format.GeoJSON();
var features_15_KAMPUNG_KEPGUB979_15 = format_15_KAMPUNG_KEPGUB979_15.readFeatures(json_15_KAMPUNG_KEPGUB979_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15_KAMPUNG_KEPGUB979_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15_KAMPUNG_KEPGUB979_15.addFeatures(features_15_KAMPUNG_KEPGUB979_15);
var lyr_15_KAMPUNG_KEPGUB979_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_15_KAMPUNG_KEPGUB979_15, 
                style: style_15_KAMPUNG_KEPGUB979_15,
                interactive: true,
                title: '<img src="styles/legend/15_KAMPUNG_KEPGUB979_15.png" /> 15_KAMPUNG_KEPGUB979'
            });
var format_BATASKAMPUNGPRIORITASINVEN2023_16 = new ol.format.GeoJSON();
var features_BATASKAMPUNGPRIORITASINVEN2023_16 = format_BATASKAMPUNGPRIORITASINVEN2023_16.readFeatures(json_BATASKAMPUNGPRIORITASINVEN2023_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASKAMPUNGPRIORITASINVEN2023_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASKAMPUNGPRIORITASINVEN2023_16.addFeatures(features_BATASKAMPUNGPRIORITASINVEN2023_16);
var lyr_BATASKAMPUNGPRIORITASINVEN2023_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATASKAMPUNGPRIORITASINVEN2023_16, 
                style: style_BATASKAMPUNGPRIORITASINVEN2023_16,
                interactive: true,
                title: '<img src="styles/legend/BATASKAMPUNGPRIORITASINVEN2023_16.png" /> BATAS KAMPUNG PRIORITAS INVEN 2023'
            });
var format_BATAS_KELURAHAN_DKI_17 = new ol.format.GeoJSON();
var features_BATAS_KELURAHAN_DKI_17 = format_BATAS_KELURAHAN_DKI_17.readFeatures(json_BATAS_KELURAHAN_DKI_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_KELURAHAN_DKI_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_KELURAHAN_DKI_17.addFeatures(features_BATAS_KELURAHAN_DKI_17);
var lyr_BATAS_KELURAHAN_DKI_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATAS_KELURAHAN_DKI_17, 
                style: style_BATAS_KELURAHAN_DKI_17,
                interactive: true,
                title: '<img src="styles/legend/BATAS_KELURAHAN_DKI_17.png" /> BATAS_KELURAHAN_DKI'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(false);lyr_ESRISatellite_2.setVisible(false);lyr_GoogleSatellite_3.setVisible(false);lyr_CSRT_KOTAINTAN_2004_4.setVisible(false);lyr_FOTOUDARA_KOTAINTAN_1993_5.setVisible(false);lyr_CSRT_BETINGREMAJA_2005_6.setVisible(false);lyr_FOTOUDARA_BETINGREMAJA_1993_7.setVisible(false);lyr_CSRT_PESINGGARDEN_SELATAN_2004_8.setVisible(false);lyr_CSRT_PESINGGARDEN_TENGAH_2004_9.setVisible(false);lyr_CSRT_BASMOL_KOTAINTAN_SALO_2004_10.setVisible(false);lyr_FOTOUDARABASMOLKOTAINTANSALOPESINGGARDEN1993_11.setVisible(false);lyr_RDTR_12.setVisible(false);lyr_HAT_PERSIL_BPN_13.setVisible(false);lyr_INVENTANAH2023_14.setVisible(false);lyr_15_KAMPUNG_KEPGUB979_15.setVisible(false);lyr_BATASKAMPUNGPRIORITASINVEN2023_16.setVisible(true);lyr_BATAS_KELURAHAN_DKI_17.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleHybrid_1,lyr_ESRISatellite_2,lyr_GoogleSatellite_3,lyr_CSRT_KOTAINTAN_2004_4,lyr_FOTOUDARA_KOTAINTAN_1993_5,lyr_CSRT_BETINGREMAJA_2005_6,lyr_FOTOUDARA_BETINGREMAJA_1993_7,lyr_CSRT_PESINGGARDEN_SELATAN_2004_8,lyr_CSRT_PESINGGARDEN_TENGAH_2004_9,lyr_CSRT_BASMOL_KOTAINTAN_SALO_2004_10,lyr_FOTOUDARABASMOLKOTAINTANSALOPESINGGARDEN1993_11,lyr_RDTR_12,lyr_HAT_PERSIL_BPN_13,lyr_INVENTANAH2023_14,lyr_15_KAMPUNG_KEPGUB979_15,lyr_BATASKAMPUNGPRIORITASINVEN2023_16,lyr_BATAS_KELURAHAN_DKI_17];
lyr_RDTR_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'KODEWP': 'KODEWP', 'KODSWP': 'KODSWP', 'KODBLK': 'KODBLK', 'KODSBL': 'KODSBL', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'KKOP_1': 'KKOP_1', 'LP2B_2': 'LP2B_2', 'KRB_03': 'KRB_03', 'TOD_04': 'TOD_04', 'TEB_05': 'TEB_05', 'PUSLIT': 'PUSLIT', 'CAGBUD': 'CAGBUD', 'RESAIR': 'RESAIR', 'KSMPDN': 'KSMPDN', 'HANKAM': 'HANKAM', 'KKARST': 'KKARST', 'PTBGMB': 'PTBGMB', 'MGRSAT': 'MGRSAT', 'RDBUMI': 'RDBUMI', 'TPZ_00': 'TPZ_00', 'REMARK': 'REMARK', 'LUASHA': 'LUASHA', 'KODUNK': 'KODUNK', 'KDB': 'KDB', 'KLB': 'KLB', 'KTB': 'KTB', 'KDH': 'KDH', 'KODSZNTEXT': 'KODSZNTEXT', 'BST': 'BST', 'IZN': 'IZN', 'TBS': 'TBS', 'TBT': 'TBT', 'KODZON_1': 'KODZON_1', 'NAMZON_1': 'NAMZON_1', 'KODSZN_1': 'KODSZN_1', 'NAMSZN_1': 'NAMSZN_1', 'TBT_1': 'TBT_1', 'IZN_1': 'IZN_1', 'BST_1': 'BST_1', 'STATUS': 'STATUS', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_HAT_PERSIL_BPN_13.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'PERSILID': 'PERSILID', 'KODEWILAYA': 'KODEWILAYA', 'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROPINSI': 'PROPINSI', 'NIB': 'NIB', 'LUAS': 'LUAS', 'TIPEHAK': 'TIPEHAK', 'TIPEPRODUK': 'TIPEPRODUK', });
lyr_INVENTANAH2023_14.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ALAMAT_PEN': 'ALAMAT_PEN', 'RT': 'RT', 'RW': 'RW', 'KELURAHAN': 'KELURAHAN', 'KECAMATAN': 'KECAMATAN', 'WILAYAH': 'WILAYAH', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Penguasa': 'Nama yang menguasai fisik bidang tanah', 'Pemilik': 'Nama yang memiliki bidang tanah', 'W_Pajak': 'Nama tercantum SPPT', 'Pmby_Pajak': 'Periode pembayaran SPPT', 'Foto_SPPT': 'Foto SPPT', 'Foto_HAT': 'Foto bukti kepemilikan (girik, verponding, eigendom dll)', 'Foto_obyek': 'Foto lokasi tanah', 'sewa_milik': 'Keterangan sewa/milik', 'lok_buktanah': 'Keterangan lokasi pada buku tanah kelurahan', 'cek_BPN': 'keterangan pengecekan data BPN di Jakarta1', 'cek_SIPPT': 'Keterangan pengecekan SIPPT/IPPR atau tidak', 'cek_RDTR': 'keterangan pengecekan tata ruang', 'cek_utilits': 'keterangan pengecekan terkena rencana jalan/sungai/trase lainnya', 'sengketa': 'Konfirmasi ada info sengketa/tidak dari lurah', 'Foto_butanah': 'Foto keterangan buku tanah', 'Ha_klaim': 'Luas berdasarkan klaim pemilik', 'Ha_SPPT': 'Luas berdasarkan SPPT', 'Ha_Stanah': 'Luas berdasarkan surat tanah', 'Sertifikat': 'Pernah proses sertifikat/belum', 'Alasan1': 'Alasan belum bersertifikat (pemilik)', 'Lama_tinggal': 'Berapa lama telah menempati (jika sewa)', 'lama_milik': 'Berapa lama telah memiliki (jika milik)', 'D_peroleh': 'Dasar perolehan ?', });
lyr_15_KAMPUNG_KEPGUB979_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Kampung': 'Kampung', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BATASKAMPUNGPRIORITASINVEN2023_16.set('fieldAliases', {'Kampung': 'Kampung', 'WADMRT': 'WADMRT', 'WADMRW': 'WADMRW', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'LABEL': 'LABEL', 'KAMPUNG_AL': 'KAMPUNG_AL', });
lyr_BATAS_KELURAHAN_DKI_17.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', });
lyr_RDTR_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'KODEWP': 'TextEdit', 'KODSWP': 'TextEdit', 'KODBLK': 'TextEdit', 'KODSBL': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'KKOP_1': 'TextEdit', 'LP2B_2': 'TextEdit', 'KRB_03': 'TextEdit', 'TOD_04': 'TextEdit', 'TEB_05': 'TextEdit', 'PUSLIT': 'TextEdit', 'CAGBUD': 'TextEdit', 'RESAIR': 'TextEdit', 'KSMPDN': 'TextEdit', 'HANKAM': 'TextEdit', 'KKARST': 'TextEdit', 'PTBGMB': 'TextEdit', 'MGRSAT': 'TextEdit', 'RDBUMI': 'TextEdit', 'TPZ_00': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'KODUNK': 'TextEdit', 'KDB': 'TextEdit', 'KLB': 'TextEdit', 'KTB': 'TextEdit', 'KDH': 'TextEdit', 'KODSZNTEXT': 'TextEdit', 'BST': 'TextEdit', 'IZN': 'TextEdit', 'TBS': 'TextEdit', 'TBT': 'TextEdit', 'KODZON_1': 'TextEdit', 'NAMZON_1': 'TextEdit', 'KODSZN_1': 'TextEdit', 'NAMSZN_1': 'TextEdit', 'TBT_1': 'TextEdit', 'IZN_1': 'TextEdit', 'BST_1': 'TextEdit', 'STATUS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HAT_PERSIL_BPN_13.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'PERSILID': 'TextEdit', 'KODEWILAYA': 'TextEdit', 'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROPINSI': 'TextEdit', 'NIB': 'TextEdit', 'LUAS': 'TextEdit', 'TIPEHAK': 'TextEdit', 'TIPEPRODUK': 'TextEdit', });
lyr_INVENTANAH2023_14.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'ALAMAT_PEN': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', 'KELURAHAN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'WILAYAH': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Penguasa': 'TextEdit', 'Pemilik': 'TextEdit', 'W_Pajak': 'TextEdit', 'Pmby_Pajak': 'Range', 'Foto_SPPT': 'ExternalResource', 'Foto_HAT': 'ExternalResource', 'Foto_obyek': 'ExternalResource', 'sewa_milik': 'TextEdit', 'lok_buktanah': 'TextEdit', 'cek_BPN': 'TextEdit', 'cek_SIPPT': 'TextEdit', 'cek_RDTR': 'TextEdit', 'cek_utilits': 'TextEdit', 'sengketa': 'TextEdit', 'Foto_butanah': 'TextEdit', 'Ha_klaim': 'TextEdit', 'Ha_SPPT': 'TextEdit', 'Ha_Stanah': 'TextEdit', 'Sertifikat': 'TextEdit', 'Alasan1': 'TextEdit', 'Lama_tinggal': 'Range', 'lama_milik': 'Range', 'D_peroleh': 'TextEdit', });
lyr_15_KAMPUNG_KEPGUB979_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'Kampung': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BATASKAMPUNGPRIORITASINVEN2023_16.set('fieldImages', {'Kampung': 'TextEdit', 'WADMRT': 'TextEdit', 'WADMRW': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'LABEL': 'TextEdit', 'KAMPUNG_AL': 'TextEdit', });
lyr_BATAS_KELURAHAN_DKI_17.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_RDTR_12.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'KODEWP': 'inline label', 'KODSWP': 'inline label', 'KODBLK': 'inline label', 'KODSBL': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'KKOP_1': 'inline label', 'LP2B_2': 'inline label', 'KRB_03': 'inline label', 'TOD_04': 'inline label', 'TEB_05': 'inline label', 'PUSLIT': 'inline label', 'CAGBUD': 'inline label', 'RESAIR': 'inline label', 'KSMPDN': 'inline label', 'HANKAM': 'inline label', 'KKARST': 'inline label', 'PTBGMB': 'inline label', 'MGRSAT': 'inline label', 'RDBUMI': 'inline label', 'TPZ_00': 'inline label', 'REMARK': 'inline label', 'LUASHA': 'inline label', 'KODUNK': 'inline label', 'KDB': 'inline label', 'KLB': 'inline label', 'KTB': 'inline label', 'KDH': 'inline label', 'KODSZNTEXT': 'inline label', 'BST': 'inline label', 'IZN': 'inline label', 'TBS': 'inline label', 'TBT': 'inline label', 'KODZON_1': 'inline label', 'NAMZON_1': 'inline label', 'KODSZN_1': 'inline label', 'NAMSZN_1': 'inline label', 'TBT_1': 'inline label', 'IZN_1': 'inline label', 'BST_1': 'inline label', 'STATUS': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Le_1': 'inline label', 'Shape_Area': 'inline label', });
lyr_HAT_PERSIL_BPN_13.set('fieldLabels', {'OBJECTID_1': 'inline label', 'OBJECTID': 'inline label', 'PERSILID': 'inline label', 'KODEWILAYA': 'inline label', 'DESA': 'inline label', 'KECAMATAN': 'inline label', 'KABUPATEN': 'inline label', 'PROPINSI': 'inline label', 'NIB': 'inline label', 'LUAS': 'inline label', 'TIPEHAK': 'inline label', 'TIPEPRODUK': 'inline label', });
lyr_INVENTANAH2023_14.set('fieldLabels', {'OBJECTID_1': 'inline label', 'OBJECTID': 'inline label', 'ALAMAT_PEN': 'inline label', 'RT': 'inline label', 'RW': 'inline label', 'KELURAHAN': 'inline label', 'KECAMATAN': 'inline label', 'WILAYAH': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Length': 'inline label', 'Shape_Area': 'inline label', 'Penguasa': 'inline label', 'Pemilik': 'inline label', 'W_Pajak': 'inline label', 'Pmby_Pajak': 'inline label', 'Foto_SPPT': 'inline label', 'Foto_HAT': 'inline label', 'Foto_obyek': 'inline label', 'sewa_milik': 'inline label', 'lok_buktanah': 'inline label', 'cek_BPN': 'inline label', 'cek_SIPPT': 'inline label', 'cek_RDTR': 'inline label', 'cek_utilits': 'inline label', 'sengketa': 'inline label', 'Foto_butanah': 'inline label', 'Ha_klaim': 'inline label', 'Ha_SPPT': 'inline label', 'Ha_Stanah': 'inline label', 'Sertifikat': 'inline label', 'Alasan1': 'inline label', 'Lama_tinggal': 'inline label', 'lama_milik': 'inline label', 'D_peroleh': 'inline label', });
lyr_15_KAMPUNG_KEPGUB979_15.set('fieldLabels', {'OBJECTID': 'inline label', 'Kampung': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_BATASKAMPUNGPRIORITASINVEN2023_16.set('fieldLabels', {'Kampung': 'inline label', 'WADMRT': 'inline label', 'WADMRW': 'inline label', 'WADMKD': 'inline label', 'WADMKC': 'inline label', 'WADMKK': 'inline label', 'LABEL': 'inline label', 'KAMPUNG_AL': 'inline label', });
lyr_BATAS_KELURAHAN_DKI_17.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKD': 'inline label', 'WADMKK': 'inline label', });
lyr_BATAS_KELURAHAN_DKI_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});