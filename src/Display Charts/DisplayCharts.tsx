import { useState } from 'react'

import DisplayBarChart from './DisplayBarChart'
import DisplayAreaChart from './DisplayAreaChart'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'

type Template = {
    templateTitle : string;
    templateId: number;
    chart: string;
    row: string[];
    value: string[];
    templateData : [];
};


const DisplayCharts = () => {



    const templates1 = [
        {
            templateId: 0,
            templateTitle: 'Template 1',
            chart: 'barChart',
            row: ['regioncode'],
            value: [
                'quota', 'nsTotal'
            ],
            templateData: [
                {
                  "regioncode": "BT2",
                  "qouta": 23800,
                  "nsTotal": 21002
                },
                {
                  "regioncode": "CL1-1",
                  "qouta": 23100,
                  "nsTotal": 25832
                },
                {
                  "regioncode": "CVR",
                  "qouta": 24500,
                  "nsTotal": 19672
                },
                {
                  "regioncode": "IR",
                  "qouta": 23100,
                  "nsTotal": 11188
                },
                {
                  "regioncode": "MC3",
                  "qouta": 25200,
                  "nsTotal": 19228
                },
                {
                  "regioncode": "MC4",
                  "qouta": 26600,
                  "nsTotal": 20518
                },
                {
                  "regioncode": "MIMAROPA1",
                  "qouta": 24500,
                  "nsTotal": 20050
                },
                {
                  "regioncode": "MIMAROPA3",
                  "qouta": 14000,
                  "nsTotal": 9470
                },
                {
                  "regioncode": "MN1",
                  "qouta": 21700,
                  "nsTotal": 12980
                },
                {
                  "regioncode": "VER2",
                  "qouta": 20300,
                  "nsTotal": 11424
                },
                {
                  "regioncode": "CLBZ2",
                  "qouta": 28000,
                  "nsTotal": 38200
                },
                {
                  "regioncode": "CL1-2",
                  "qouta": 21700,
                  "nsTotal": 20008
                },
                {
                  "regioncode": "CL2-2",
                  "qouta": 16100,
                  "nsTotal": 13928
                },
                {
                  "regioncode": "NCT2-2",
                  "qouta": 21700,
                  "nsTotal": 28488
                },
                {
                  "regioncode": "VC1",
                  "qouta": 37800,
                  "nsTotal": 36756
                },
                {
                  "regioncode": "VC2",
                  "qouta": 30100,
                  "nsTotal": 24420
                },
                {
                  "regioncode": "VW2-1",
                  "qouta": 21000,
                  "nsTotal": 19106
                },
                {
                  "regioncode": "VW2-2",
                  "qouta": 14600,
                  "nsTotal": 11314
                },
                {
                  "regioncode": "CLBZ1",
                  "qouta": 33950,
                  "nsTotal": 34764
                },
                {
                  "regioncode": "NCT2-3",
                  "qouta": 30800,
                  "nsTotal": 36304
                },
                {
                  "regioncode": "BT1",
                  "qouta": 25900,
                  "nsTotal": 24102
                },
                {
                  "regioncode": "MC1",
                  "qouta": 34300,
                  "nsTotal": 32520
                },
                {
                  "regioncode": "MC2",
                  "qouta": 17500,
                  "nsTotal": 15662
                },
                {
                  "regioncode": "MW1",
                  "qouta": 14700,
                  "nsTotal": 11314
                },
                {
                  "regioncode": "NCT2-1",
                  "qouta": 28700,
                  "nsTotal": 30694
                },
                {
                  "regioncode": "NCT3-1",
                  "qouta": 34650,
                  "nsTotal": 44566
                },
                {
                  "regioncode": "VW1-2",
                  "qouta": 17550,
                  "nsTotal": 11452
                },
                {
                  "regioncode": "MIMAROPA2",
                  "qouta": 32200,
                  "nsTotal": 36104
                },
                {
                  "regioncode": "NCT1-1",
                  "qouta": 42000,
                  "nsTotal": 49848
                },
                {
                  "regioncode": "NCT1-2",
                  "qouta": 37100,
                  "nsTotal": 54998
                },
                {
                  "regioncode": "NCT1-3",
                  "qouta": 48300,
                  "nsTotal": 58414
                },
                {
                  "regioncode": "CL2-1",
                  "qouta": 20300,
                  "nsTotal": 20590
                },
                {
                  "regioncode": "MN2",
                  "qouta": 28000,
                  "nsTotal": 17604
                },
                {
                  "regioncode": "MW2",
                  "qouta": 32200,
                  "nsTotal": 20166
                },
                {
                  "regioncode": "NCT3-2",
                  "qouta": 36750,
                  "nsTotal": 42088
                },
                {
                  "regioncode": "VW1-1",
                  "qouta": 20300,
                  "nsTotal": 13636
                },
                {
                  "regioncode": "VER1",
                  "qouta": 21700,
                  "nsTotal": 13290
                },
                {
                  "regioncode": "OS",
                  "qouta": 0,
                  "nsTotal": 1946
                },
                {
                  "regioncode": "",
                  "qouta": 487575,
                  "nsTotal": 466823
                }
              ]
        },

        {
            templateId: 1,
            chart: 'areaChart',
            templateTitle: 'Template 2',
            row: ['territorycode'],
            value: [
                'quota', 'nsTotal'
            ],
          templateData : 
          [
            {
              "territorycode": "BT",
              "qouta": 74550,
              "nsTotal": 67656
            },
            {
              "territorycode": "CLT1",
              "qouta": 67200,
              "nsTotal": 68760
            },
            {
              "territorycode": "CVIT",
              "qouta": 71400,
              "nsTotal": 46290
            },
            {
              "territorycode": "MCT",
              "qouta": 155400,
              "nsTotal": 131892
            },
            {
              "territorycode": "MMRPT",
              "qouta": 106050,
              "nsTotal": 98436
            },
            {
              "territorycode": "MNT",
              "qouta": 74550,
              "nsTotal": 45876
            },
            {
              "territorycode": "VET",
              "qouta": 63000,
              "nsTotal": 37071
            },
            {
              "territorycode": "CLBZT",
              "qouta": 92925,
              "nsTotal": 109446
            },
            {
              "territorycode": "CLT2",
              "qouta": 54600,
              "nsTotal": 51777
            },
            {
              "territorycode": "NCT2",
              "qouta": 121800,
              "nsTotal": 143229
            },
            {
              "territorycode": "VCT",
              "qouta": 101850,
              "nsTotal": 91764
            },
            {
              "territorycode": "VWT2",
              "qouta": 53550,
              "nsTotal": 45630
            },
            {
              "territorycode": "MWT",
              "qouta": 70350,
              "nsTotal": 47220
            },
            {
              "territorycode": "NCT3",
              "qouta": 107100,
              "nsTotal": 129981
            },
            {
              "territorycode": "VWT1",
              "qouta": 56850,
              "nsTotal": 37632
            },
            {
              "territorycode": "NCT1",
              "qouta": 191100,
              "nsTotal": 244890
            },
            {
              "territorycode": "OS",
              "qouta": 0,
              "nsTotal": 2919
            }
          ]        },
        {
            templateId: 3,
            chart: 'areaChart',
            templateTitle: 'Template 3',
            row: ['motherbranchcode'],
            value: [
                'nsRegular', 'nsCollection'
            ],
            templateData : [
                {
                  "motherbranchcode": "VIRAC",
                  "nsRegular": 83,
                  "nsCollection": 2527500
                },
                {
                  "motherbranchcode": "CENBUL",
                  "nsRegular": 154,
                  "nsCollection": 5399340
                },
                {
                  "motherbranchcode": "APARRI",
                  "nsRegular": 20,
                  "nsCollection": 292135
                },
                {
                  "motherbranchcode": "CANDON",
                  "nsRegular": 31,
                  "nsCollection": 583590
                },
                {
                  "motherbranchcode": "GENSAN",
                  "nsRegular": 168,
                  "nsCollection": 4397810
                },
                {
                  "motherbranchcode": "PANABO",
                  "nsRegular": 253,
                  "nsCollection": 4354970
                },
                {
                  "motherbranchcode": "BONGAB",
                  "nsRegular": 125,
                  "nsCollection": 2002615
                },
                {
                  "motherbranchcode": "CRUZLA",
                  "nsRegular": 130,
                  "nsCollection": 3724440
                },
                {
                  "motherbranchcode": "MALAYB",
                  "nsRegular": 121,
                  "nsCollection": 2213770
                },
                {
                  "motherbranchcode": "BAYBAY",
                  "nsRegular": 62,
                  "nsCollection": 1729425
                },
                {
                  "motherbranchcode": "STOTOM",
                  "nsRegular": 178,
                  "nsCollection": 3084960
                },
                {
                  "motherbranchcode": "SANMIG",
                  "nsRegular": 73,
                  "nsCollection": 1728165
                },
                {
                  "motherbranchcode": "IBAZAM",
                  "nsRegular": 124,
                  "nsCollection": 2375870
                },
                {
                  "motherbranchcode": "URDANE",
                  "nsRegular": 186,
                  "nsCollection": 4334760
                },
                {
                  "motherbranchcode": "VALENC",
                  "nsRegular": 102,
                  "nsCollection": 2509650
                },
                {
                  "motherbranchcode": "QUEZAV",
                  "nsRegular": 750,
                  "nsCollection": 25824470
                },
                {
                  "motherbranchcode": "LAPU-L",
                  "nsRegular": 324,
                  "nsCollection": 11860225
                },
                {
                  "motherbranchcode": "CARCAR",
                  "nsRegular": 55,
                  "nsCollection": 4170235
                },
                {
                  "motherbranchcode": "TALIBO",
                  "nsRegular": 97,
                  "nsCollection": 1798046
                },
                {
                  "motherbranchcode": "MOLO",
                  "nsRegular": 323,
                  "nsCollection": 10433360
                },
                {
                  "motherbranchcode": "PASSI",
                  "nsRegular": 57,
                  "nsCollection": 995145
                },
                {
                  "motherbranchcode": "KALIBO",
                  "nsRegular": 250,
                  "nsCollection": 3983465
                },
                {
                  "motherbranchcode": "LEGASP",
                  "nsRegular": 271,
                  "nsCollection": 8254130
                },
                {
                  "motherbranchcode": "LOPEZ",
                  "nsRegular": 215,
                  "nsCollection": 3014980
                },
                {
                  "motherbranchcode": "BALANG",
                  "nsRegular": 186,
                  "nsCollection": 5773475
                },
                {
                  "motherbranchcode": "CALAPA",
                  "nsRegular": 151,
                  "nsCollection": 3601410
                },
                {
                  "motherbranchcode": "MUNTIN",
                  "nsRegular": 673,
                  "nsCollection": 20792110
                },
                {
                  "motherbranchcode": "MIAGAO",
                  "nsRegular": 61,
                  "nsCollection": 1154990
                },
                {
                  "motherbranchcode": "LABO",
                  "nsRegular": 106,
                  "nsCollection": 3546705
                },
                {
                  "motherbranchcode": "MASBAT",
                  "nsRegular": 94,
                  "nsCollection": 2348810
                },
                {
                  "motherbranchcode": "NASUGB",
                  "nsRegular": 360,
                  "nsCollection": 5161075
                },
                {
                  "motherbranchcode": "MALOLO",
                  "nsRegular": 136,
                  "nsCollection": 6702470
                },
                {
                  "motherbranchcode": "ALAMIN",
                  "nsRegular": 110,
                  "nsCollection": 1462010
                },
                {
                  "motherbranchcode": "DAVAO",
                  "nsRegular": 434,
                  "nsCollection": 8093965
                },
                {
                  "motherbranchcode": "KABACA",
                  "nsRegular": 171,
                  "nsCollection": 2000130
                },
                {
                  "motherbranchcode": "MALITA",
                  "nsRegular": 99,
                  "nsCollection": 1244655
                },
                {
                  "motherbranchcode": "INFANT",
                  "nsRegular": 115,
                  "nsCollection": 1993025
                },
                {
                  "motherbranchcode": "GINGOO",
                  "nsRegular": 103,
                  "nsCollection": 1518725
                },
                {
                  "motherbranchcode": "ILIGAN",
                  "nsRegular": 97,
                  "nsCollection": 5592417
                },
                {
                  "motherbranchcode": "KALOOK",
                  "nsRegular": 236,
                  "nsCollection": 9565395
                },
                {
                  "motherbranchcode": "BICUTA",
                  "nsRegular": 168,
                  "nsCollection": 9305720
                },
                {
                  "motherbranchcode": "ORMOC",
                  "nsRegular": 196,
                  "nsCollection": 3686930
                },
                {
                  "motherbranchcode": "ESCALA",
                  "nsRegular": 33,
                  "nsCollection": 1134265
                },
                {
                  "motherbranchcode": "DAET",
                  "nsRegular": 184,
                  "nsCollection": 3922275
                },
                {
                  "motherbranchcode": "LUCBAN",
                  "nsRegular": 255,
                  "nsCollection": 4415555
                },
                {
                  "motherbranchcode": "BATANG",
                  "nsRegular": 501,
                  "nsCollection": 12739605
                },
                {
                  "motherbranchcode": "ROSARI",
                  "nsRegular": 426,
                  "nsCollection": 7297215
                },
                {
                  "motherbranchcode": "LUBAO",
                  "nsRegular": 108,
                  "nsCollection": 3516065
                },
                {
                  "motherbranchcode": "MATINA",
                  "nsRegular": 215,
                  "nsCollection": 5293210
                },
                {
                  "motherbranchcode": "STAROS",
                  "nsRegular": 221,
                  "nsCollection": 7899750
                },
                {
                  "motherbranchcode": "CAGAYA",
                  "nsRegular": 255,
                  "nsCollection": 7027455
                },
                {
                  "motherbranchcode": "BINANG",
                  "nsRegular": 292,
                  "nsCollection": 6788625
                },
                {
                  "motherbranchcode": "SANGAN",
                  "nsRegular": 332,
                  "nsCollection": 12544580
                },
                {
                  "motherbranchcode": "ROOSEV",
                  "nsRegular": 213,
                  "nsCollection": 9669940
                },
                {
                  "motherbranchcode": "BACOWE",
                  "nsRegular": 363,
                  "nsCollection": 13961560
                },
                {
                  "motherbranchcode": "MAASIN",
                  "nsRegular": 100,
                  "nsCollection": 2217090
                },
                {
                  "motherbranchcode": "GUINOB",
                  "nsRegular": 118,
                  "nsCollection": 2512640
                },
                {
                  "motherbranchcode": "PANIQU",
                  "nsRegular": 248,
                  "nsCollection": 3132620
                },
                {
                  "motherbranchcode": "SNCARL",
                  "nsRegular": 126,
                  "nsCollection": 2166950
                },
                {
                  "motherbranchcode": "LA TRI",
                  "nsRegular": 101,
                  "nsCollection": 3903410
                },
                {
                  "motherbranchcode": "MAMBUR",
                  "nsRegular": 94,
                  "nsCollection": 1615080
                },
                {
                  "motherbranchcode": "CALAML",
                  "nsRegular": 522,
                  "nsCollection": 19992910
                },
                {
                  "motherbranchcode": "MANDAL",
                  "nsRegular": 331,
                  "nsCollection": 17851240
                },
                {
                  "motherbranchcode": "ROXAKA",
                  "nsRegular": 141,
                  "nsCollection": 2228780
                },
                {
                  "motherbranchcode": "BAGUIO",
                  "nsRegular": 158,
                  "nsCollection": 7107140
                },
                {
                  "motherbranchcode": "MARAMA",
                  "nsRegular": 88,
                  "nsCollection": 1226170
                },
                {
                  "motherbranchcode": "BUTUWE",
                  "nsRegular": 246,
                  "nsCollection": 4469295
                },
                {
                  "motherbranchcode": "OZAMIS",
                  "nsRegular": 39,
                  "nsCollection": 3586315
                },
                {
                  "motherbranchcode": "CAVITE",
                  "nsRegular": 282,
                  "nsCollection": 9746380
                },
                {
                  "motherbranchcode": "BACALI",
                  "nsRegular": 117,
                  "nsCollection": 4506600
                },
                {
                  "motherbranchcode": "TABACO",
                  "nsRegular": 109,
                  "nsCollection": 2256030
                },
                {
                  "motherbranchcode": "SAMPAL",
                  "nsRegular": 298,
                  "nsCollection": 10889905
                },
                {
                  "motherbranchcode": "GMA",
                  "nsRegular": 397,
                  "nsCollection": 12400640
                },
                {
                  "motherbranchcode": "BOGO",
                  "nsRegular": 143,
                  "nsCollection": 3427820
                },
                {
                  "motherbranchcode": "POLANG",
                  "nsRegular": 61,
                  "nsCollection": 2073430
                },
                {
                  "motherbranchcode": "LUPON",
                  "nsRegular": 18,
                  "nsCollection": 1425035
                },
                {
                  "motherbranchcode": "ROXAPA",
                  "nsRegular": 343,
                  "nsCollection": 7684360
                },
                {
                  "motherbranchcode": "SANFRA",
                  "nsRegular": 103,
                  "nsCollection": 1441580
                },
                {
                  "motherbranchcode": "TANDAG",
                  "nsRegular": 50,
                  "nsCollection": 1062050
                },
                {
                  "motherbranchcode": "LAGRO",
                  "nsRegular": 436,
                  "nsCollection": 24252825
                },
                {
                  "motherbranchcode": "HINIGA",
                  "nsRegular": 80,
                  "nsCollection": 1603575
                },
                {
                  "motherbranchcode": "NAGA",
                  "nsRegular": 337,
                  "nsCollection": 8860145
                },
                {
                  "motherbranchcode": "LIPA",
                  "nsRegular": 400,
                  "nsCollection": 7223900
                },
                {
                  "motherbranchcode": "ANGELE",
                  "nsRegular": 246,
                  "nsCollection": 5500770
                },
                {
                  "motherbranchcode": "DAGUPA",
                  "nsRegular": 160,
                  "nsCollection": 4376645
                },
                {
                  "motherbranchcode": "LINGAY",
                  "nsRegular": 92,
                  "nsCollection": 1827630
                },
                {
                  "motherbranchcode": "LAOAG",
                  "nsRegular": 31,
                  "nsCollection": 666590
                },
                {
                  "motherbranchcode": "SFLU",
                  "nsRegular": 53,
                  "nsCollection": 2880310
                },
                {
                  "motherbranchcode": "JOSEOM",
                  "nsRegular": 141,
                  "nsCollection": 2056975
                },
                {
                  "motherbranchcode": "TAGUIG",
                  "nsRegular": 544,
                  "nsCollection": 22136590
                },
                {
                  "motherbranchcode": "BACOOR",
                  "nsRegular": 275,
                  "nsCollection": 12568680
                },
                {
                  "motherbranchcode": "ALFONS",
                  "nsRegular": 172,
                  "nsCollection": 4401205
                },
                {
                  "motherbranchcode": "TAGBIL",
                  "nsRegular": 314,
                  "nsCollection": 9598705
                },
                {
                  "motherbranchcode": "TALISA",
                  "nsRegular": 300,
                  "nsCollection": 14178448
                },
                {
                  "motherbranchcode": "TOLEDO",
                  "nsRegular": 149,
                  "nsCollection": 5567330
                },
                {
                  "motherbranchcode": "JOSNUE",
                  "nsRegular": 237,
                  "nsCollection": 2560205
                },
                {
                  "motherbranchcode": "TAGUM",
                  "nsRegular": 400,
                  "nsCollection": 6990095
                },
                {
                  "motherbranchcode": "DIPOLO",
                  "nsRegular": 230,
                  "nsCollection": 3748655
                },
                {
                  "motherbranchcode": "CAINTA",
                  "nsRegular": 303,
                  "nsCollection": 6223950
                },
                {
                  "motherbranchcode": "KATIPU",
                  "nsRegular": 140,
                  "nsCollection": 6365035
                },
                {
                  "motherbranchcode": "SOGOD",
                  "nsRegular": 59,
                  "nsCollection": 1279460
                },
                {
                  "motherbranchcode": "KABANK",
                  "nsRegular": 107,
                  "nsCollection": 3321125
                },
                {
                  "motherbranchcode": "JOSEAN",
                  "nsRegular": 96,
                  "nsCollection": 2159350
                },
                {
                  "motherbranchcode": "CADIZ",
                  "nsRegular": 25,
                  "nsCollection": 453410
                },
                {
                  "motherbranchcode": "CAUAYA",
                  "nsRegular": 112,
                  "nsCollection": 2612675
                },
                {
                  "motherbranchcode": "CAGAYE",
                  "nsRegular": 183,
                  "nsCollection": 4455010
                },
                {
                  "motherbranchcode": "HO",
                  "nsRegular": 672,
                  "nsCollection": 37059440
                },
                {
                  "motherbranchcode": "TRECE",
                  "nsRegular": 267,
                  "nsCollection": 6946635
                },
                {
                  "motherbranchcode": "GALERA",
                  "nsRegular": 150,
                  "nsCollection": 3356635
                },
                {
                  "motherbranchcode": "MARIKI",
                  "nsRegular": 544,
                  "nsCollection": 17151220
                },
                {
                  "motherbranchcode": "CABANA",
                  "nsRegular": 131,
                  "nsCollection": 3373095
                },
                {
                  "motherbranchcode": "TALAVE",
                  "nsRegular": 180,
                  "nsCollection": 2586120
                },
                {
                  "motherbranchcode": "MIDSAY",
                  "nsRegular": 176,
                  "nsCollection": 3365090
                },
                {
                  "motherbranchcode": "FAIRV2",
                  "nsRegular": 276,
                  "nsCollection": 11869765
                },
                {
                  "motherbranchcode": "CARLNO",
                  "nsRegular": 96,
                  "nsCollection": 1279695
                },
                {
                  "motherbranchcode": "TUGUEG",
                  "nsRegular": 101,
                  "nsCollection": 2798635
                },
                {
                  "motherbranchcode": "PAGADI",
                  "nsRegular": 146,
                  "nsCollection": 2695570
                },
                {
                  "motherbranchcode": "LAS PI",
                  "nsRegular": 527,
                  "nsCollection": 22121980
                },
                {
                  "motherbranchcode": "PALOMP",
                  "nsRegular": 78,
                  "nsCollection": 1623940
                },
                {
                  "motherbranchcode": "IBAJAY",
                  "nsRegular": 30,
                  "nsCollection": 171795
                },
                {
                  "motherbranchcode": "ATIMON",
                  "nsRegular": 19,
                  "nsCollection": 2990750
                },
                {
                  "motherbranchcode": "STA.MA",
                  "nsRegular": 140,
                  "nsCollection": 4731910
                },
                {
                  "motherbranchcode": "CRUZZA",
                  "nsRegular": 221,
                  "nsCollection": 6225865
                },
                {
                  "motherbranchcode": "SOLANO",
                  "nsRegular": 194,
                  "nsCollection": 5285085
                },
                {
                  "motherbranchcode": "BUHANG",
                  "nsRegular": 216,
                  "nsCollection": 6406980
                },
                {
                  "motherbranchcode": "KIDAPA",
                  "nsRegular": 146,
                  "nsCollection": 2424470
                },
                {
                  "motherbranchcode": "CUBAO",
                  "nsRegular": 632,
                  "nsCollection": 16681790
                },
                {
                  "motherbranchcode": "LIBMAN",
                  "nsRegular": 69,
                  "nsCollection": 1585950
                },
                {
                  "motherbranchcode": "CANDEL",
                  "nsRegular": 232,
                  "nsCollection": 5038090
                },
                {
                  "motherbranchcode": "PINAMA",
                  "nsRegular": 139,
                  "nsCollection": 2147900
                },
                {
                  "motherbranchcode": "TANAY",
                  "nsRegular": 206,
                  "nsCollection": 4461485
                },
                {
                  "motherbranchcode": "BINANL",
                  "nsRegular": 198,
                  "nsCollection": 7902340
                },
                {
                  "motherbranchcode": "ANTIPO",
                  "nsRegular": 529,
                  "nsCollection": 13925325
                },
                {
                  "motherbranchcode": "COGEO",
                  "nsRegular": 287,
                  "nsCollection": 6031095
                },
                {
                  "motherbranchcode": "SANFER",
                  "nsRegular": 145,
                  "nsCollection": 4550890
                },
                {
                  "motherbranchcode": "NABUNT",
                  "nsRegular": 78,
                  "nsCollection": 2215055
                },
                {
                  "motherbranchcode": "NARRA",
                  "nsRegular": 62,
                  "nsCollection": 1856340
                },
                {
                  "motherbranchcode": "KALOO3",
                  "nsRegular": 240,
                  "nsCollection": 4978145
                },
                {
                  "motherbranchcode": "CEBUAY",
                  "nsRegular": 432,
                  "nsCollection": 19525705
                },
                {
                  "motherbranchcode": "DIFFUN",
                  "nsRegular": 48,
                  "nsCollection": 872150
                },
                {
                  "motherbranchcode": "TORIL",
                  "nsRegular": 449,
                  "nsCollection": 5845710
                },
                {
                  "motherbranchcode": "MAKATI",
                  "nsRegular": 243,
                  "nsCollection": 14097020
                },
                {
                  "motherbranchcode": "MACTAN",
                  "nsRegular": 182,
                  "nsCollection": 13021205
                },
                {
                  "motherbranchcode": "BORONG",
                  "nsRegular": 31,
                  "nsCollection": 541325
                },
                {
                  "motherbranchcode": "STA.ME",
                  "nsRegular": 169,
                  "nsCollection": 9528465
                },
                {
                  "motherbranchcode": "TANAUA",
                  "nsRegular": 360,
                  "nsCollection": 5705125
                },
                {
                  "motherbranchcode": "MEYCAU",
                  "nsRegular": 300,
                  "nsCollection": 11958340
                },
                {
                  "motherbranchcode": "MANGAG",
                  "nsRegular": 62,
                  "nsCollection": 1093975
                },
                {
                  "motherbranchcode": "PARANA",
                  "nsRegular": 413,
                  "nsCollection": 15244510
                },
                {
                  "motherbranchcode": "DUMAGU",
                  "nsRegular": 353,
                  "nsCollection": 7799195
                },
                {
                  "motherbranchcode": "TACURO",
                  "nsRegular": 206,
                  "nsCollection": 2855035
                },
                {
                  "motherbranchcode": "ODIONG",
                  "nsRegular": 16,
                  "nsCollection": 354355
                },
                {
                  "motherbranchcode": "COMMON",
                  "nsRegular": 244,
                  "nsCollection": 7823435
                },
                {
                  "motherbranchcode": "CALBAY",
                  "nsRegular": 74,
                  "nsCollection": 2027065
                },
                {
                  "motherbranchcode": "VICTOR",
                  "nsRegular": 99,
                  "nsCollection": 1659035
                },
                {
                  "motherbranchcode": "CATARM",
                  "nsRegular": 78,
                  "nsCollection": 1030350
                },
                {
                  "motherbranchcode": "GUMACA",
                  "nsRegular": 60,
                  "nsCollection": 1526895
                },
                {
                  "motherbranchcode": "CALINA",
                  "nsRegular": 229,
                  "nsCollection": 2781065
                },
                {
                  "motherbranchcode": "VALENZ",
                  "nsRegular": 358,
                  "nsCollection": 10450360
                },
                {
                  "motherbranchcode": "ERMITA",
                  "nsRegular": 269,
                  "nsCollection": 7475315
                },
                {
                  "motherbranchcode": "",
                  "nsRegular": 0,
                  "nsCollection": 2537425338
                },
                {
                  "motherbranchcode": "SANPAB",
                  "nsRegular": 151,
                  "nsCollection": 6042385
                },
                {
                  "motherbranchcode": "DANAO",
                  "nsRegular": 155,
                  "nsCollection": 4276340
                },
                {
                  "motherbranchcode": "CEBU",
                  "nsRegular": 280,
                  "nsCollection": 14544305
                },
                {
                  "motherbranchcode": "CATANA",
                  "nsRegular": 167,
                  "nsCollection": 2548920
                },
                {
                  "motherbranchcode": "KORONA",
                  "nsRegular": 147,
                  "nsCollection": 2826908
                },
                {
                  "motherbranchcode": "BUTUAN",
                  "nsRegular": 211,
                  "nsCollection": 3250625
                },
                {
                  "motherbranchcode": "SORSOG",
                  "nsRegular": 131,
                  "nsCollection": 3549730
                },
                {
                  "motherbranchcode": "NAVAL",
                  "nsRegular": 36,
                  "nsCollection": 447545
                },
                {
                  "motherbranchcode": "ZAMBOA",
                  "nsRegular": 113,
                  "nsCollection": 4576465
                },
                {
                  "motherbranchcode": "TACLOS",
                  "nsRegular": 111,
                  "nsCollection": 2416580
                },
                {
                  "motherbranchcode": "IRIGA",
                  "nsRegular": 177,
                  "nsCollection": 3191830
                },
                {
                  "motherbranchcode": "IMUS",
                  "nsRegular": 371,
                  "nsCollection": 14173935
                },
                {
                  "motherbranchcode": "SANPED",
                  "nsRegular": 288,
                  "nsCollection": 8585640
                },
                {
                  "motherbranchcode": "ABRA",
                  "nsRegular": 100,
                  "nsCollection": 1595755
                },
                {
                  "motherbranchcode": "SANJUA",
                  "nsRegular": 205,
                  "nsCollection": 9335755
                },
                {
                  "motherbranchcode": "BACOLO",
                  "nsRegular": 246,
                  "nsCollection": 10426255
                },
                {
                  "motherbranchcode": "ZAMBOE",
                  "nsRegular": 234,
                  "nsCollection": 5592620
                },
                {
                  "motherbranchcode": "CAMILI",
                  "nsRegular": 218,
                  "nsCollection": 3809445
                },
                {
                  "motherbranchcode": "VIGAN",
                  "nsRegular": 62,
                  "nsCollection": 1135690
                },
                {
                  "motherbranchcode": "TUBIGO",
                  "nsRegular": 55,
                  "nsCollection": 1599380
                },
                {
                  "motherbranchcode": "SIPOCO",
                  "nsRegular": 131,
                  "nsCollection": 2671270
                },
                {
                  "motherbranchcode": "GUADAL",
                  "nsRegular": 205,
                  "nsCollection": 7675085
                },
                {
                  "motherbranchcode": "DINALU",
                  "nsRegular": 120,
                  "nsCollection": 2518770
                },
                {
                  "motherbranchcode": "TARLAC",
                  "nsRegular": 276,
                  "nsCollection": 3501850
                },
                {
                  "motherbranchcode": "SURIGA",
                  "nsRegular": 267,
                  "nsCollection": 3699655
                },
                {
                  "motherbranchcode": "KAMUNI",
                  "nsRegular": 192,
                  "nsCollection": 7890005
                },
                {
                  "motherbranchcode": "BULAN",
                  "nsRegular": 27,
                  "nsCollection": 434015
                },
                {
                  "motherbranchcode": "GATTAR",
                  "nsRegular": 98,
                  "nsCollection": 1569525
                },
                {
                  "motherbranchcode": "GSCPIO",
                  "nsRegular": 193,
                  "nsCollection": 2907760
                },
                {
                  "motherbranchcode": "IPIL",
                  "nsRegular": 137,
                  "nsCollection": 2620000
                },
                {
                  "motherbranchcode": "MONTAL",
                  "nsRegular": 348,
                  "nsCollection": 10156050
                },
                {
                  "motherbranchcode": "KALOO2",
                  "nsRegular": 483,
                  "nsCollection": 14618560
                },
                {
                  "motherbranchcode": "SPMCQA",
                  "nsRegular": 671,
                  "nsCollection": 28671340
                },
                {
                  "motherbranchcode": "PASAY",
                  "nsRegular": 329,
                  "nsCollection": 13153040
                },
                {
                  "motherbranchcode": "TANJAY",
                  "nsRegular": 56,
                  "nsCollection": 1683825
                },
                {
                  "motherbranchcode": "DASMAR",
                  "nsRegular": 403,
                  "nsCollection": 16153205
                },
                {
                  "motherbranchcode": "TACLOB",
                  "nsRegular": 278,
                  "nsCollection": 7674260
                },
                {
                  "motherbranchcode": "SARA",
                  "nsRegular": 178,
                  "nsCollection": 2392190
                },
                {
                  "motherbranchcode": "JOSEPA",
                  "nsRegular": 106,
                  "nsCollection": 2323975
                },
                {
                  "motherbranchcode": "SANTIA",
                  "nsRegular": 148,
                  "nsCollection": 3322310
                },
                {
                  "motherbranchcode": "NOVALI",
                  "nsRegular": 783,
                  "nsCollection": 22936030
                },
                {
                  "motherbranchcode": "ESTORE",
                  "nsRegular": 0,
                  "nsCollection": 6593495
                },
                {
                  "motherbranchcode": "CATBAL",
                  "nsRegular": 76,
                  "nsCollection": 1251545
                },
                {
                  "motherbranchcode": "ILAGAN",
                  "nsRegular": 284,
                  "nsCollection": 5232165
                },
                {
                  "motherbranchcode": "CRUZMM",
                  "nsRegular": 374,
                  "nsCollection": 9582650
                },
                {
                  "motherbranchcode": "ILOILO",
                  "nsRegular": 271,
                  "nsCollection": 9183390
                },
                {
                  "motherbranchcode": "LUCENA",
                  "nsRegular": 385,
                  "nsCollection": 7251900
                },
                {
                  "motherbranchcode": "BOAC",
                  "nsRegular": 236,
                  "nsCollection": 2896335
                },
                {
                  "motherbranchcode": "MARIVE",
                  "nsRegular": 99,
                  "nsCollection": 1613245
                },
                {
                  "motherbranchcode": "DIGOS",
                  "nsRegular": 407,
                  "nsCollection": 5414465
                }
              ]
        },
        {
            templateId: 4,
            chart: 'areaChart',
            templateTitle: 'Template 4',
            row: ['territorycode'],
            value: [
                'quota', 'nsCollection'
            ],
            templateData : [
                {
                    "territorycode": "BT",
                    "qouta": 74550,
                    "nsCollection": 150175305
                },
                {
                    "territorycode": "CLT1",
                    "qouta": 67200,
                    "nsCollection": 187785525
                },
                {
                    "territorycode": "CVIT",
                    "qouta": 71400,
                    "nsCollection": 119571495
                },
                {
                    "territorycode": "MCT",
                    "qouta": 155400,
                    "nsCollection": 212527224
                },
                {
                    "territorycode": "MMRPT",
                    "qouta": 106050,
                    "nsCollection": 247425585
                },
                {
                    "territorycode": "MNT",
                    "qouta": 74550,
                    "nsCollection": 80821515
                },
                {
                    "territorycode": "VET",
                    "qouta": 63000,
                    "nsCollection": 77776545
                },
                {
                    "territorycode": "CLBZT",
                    "qouta": 92925,
                    "nsCollection": 212685915
                },
                {
                    "territorycode": "CLT2",
                    "qouta": 54600,
                    "nsCollection": 99393990
                },
                {
                    "territorycode": "NCT2",
                    "qouta": 121800,
                    "nsCollection": 494262000
                },
                {
                    "territorycode": "VCT",
                    "qouta": 101850,
                    "nsCollection": 310703232
                },
                {
                    "territorycode": "VWT2",
                    "qouta": 53550,
                    "nsCollection": 98107395
                },
                {
                    "territorycode": "MWT",
                    "qouta": 70350,
                    "nsCollection": 106318491
                },
                {
                    "territorycode": "NCT3",
                    "qouta": 107100,
                    "nsCollection": 450532470
                },
                {
                    "territorycode": "VWT1",
                    "qouta": 56850,
                    "nsCollection": 96623835
                },
                {
                    "territorycode": "NCT1",
                    "qouta": 191100,
                    "nsCollection": 841647000
                },
                {
                    "territorycode": "OS",
                    "qouta": 0,
                    "nsCollection": 19780485
                }
            ]

        },
    ]


    const [templates, setTemplates] = useState<Template[]>([]);

    // Key to store data in local storage
    const localStorageKey = 'templatesData';


 
    // Load data from local storage when the component mounts
    // useEffect(() => {
    //     const storedData = localStorage.getItem(localStorageKey);
    //     if (storedData) {
    //         const parsedData = JSON.parse(storedData);
    //         setTemplates(parsedData);

    //     }

     
    // }, []);

    console.log(templates1)

    // const { dynamicData } = reportBuilderStore()

    function TemplateComponent({ template }: any) {
        switch (template.chart) {
            case 'barChart':
                return <DisplayBarChart data={template.templateData}  />;
            case 'areaChart':
                return <DisplayAreaChart data={template.templateData} row={template.row} col={template.value}/>;
            default:
                return null; // Handle the case where the chart type is unknown
        }
    }

    return (


        <>
            <SimpleGrid

                templateColumns={{
                    base: '1fr',
                    md: '1fr',
                    lg: '1fr 1fr'

                }}
            >
               
                {templates1.map((template) => (
                    

                    <Box
                        marginTop={'40px'}
                        marginBottom={'50px'}
                        borderRadius={'20px'}
                        backgroundColor={'white'}
                        width={'1000px'}
                        minH={'350px'}
                        maxH={'350px'}

                        key={template.templateId}>
                            {JSON.stringify(template.row)}
                        <Heading
                            margin={'20px 100px'}

                            style={{ color: '#2d8659' }}
                        >{template.templateTitle}</Heading>
                         {/* {JSON.stringify(template.templateData)} */}
                        <TemplateComponent template={template} />
                    </Box>

                ))}
            </SimpleGrid>

        </>
    )
}

export default DisplayCharts
