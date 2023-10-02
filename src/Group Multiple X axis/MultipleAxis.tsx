import { SimpleGrid, Heading, Box } from '@chakra-ui/react'

import React from 'react'
import MultipleAxisBarChart from './MultipleAxisBarChart';


const data = [
    {
        "TERRITORY CODE": "BT",
        "NS REGULAR": 27
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "",
        "NS REGULAR": 2141
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 2141
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT1",
        "NS REGULAR": 69
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT1",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1139
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT1",
        "MOTHER BRANCHCODE": "DAET",
        "NS REGULAR": 184
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT1",
        "MOTHER BRANCHCODE": "IRIGA",
        "NS REGULAR": 177
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT1",
        "MOTHER BRANCHCODE": "JOSEPA",
        "NS REGULAR": 106
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT1",
        "MOTHER BRANCHCODE": "LABO",
        "NS REGULAR": 106
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT1",
        "MOTHER BRANCHCODE": "LIBMAN",
        "NS REGULAR": 69
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT1",
        "MOTHER BRANCHCODE": "NAGA",
        "NS REGULAR": 337
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT1",
        "MOTHER BRANCHCODE": "SIPOCO",
        "NS REGULAR": 131
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT2",
        "NS REGULAR": 27
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT2",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 950
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT2",
        "MOTHER BRANCHCODE": "BULAN",
        "NS REGULAR": 27
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT2",
        "MOTHER BRANCHCODE": "GUINOB",
        "NS REGULAR": 118
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT2",
        "MOTHER BRANCHCODE": "LEGASP",
        "NS REGULAR": 271
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT2",
        "MOTHER BRANCHCODE": "MASBAT",
        "NS REGULAR": 94
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT2",
        "MOTHER BRANCHCODE": "POLANG",
        "NS REGULAR": 61
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT2",
        "MOTHER BRANCHCODE": "SORSOG",
        "NS REGULAR": 131
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT2",
        "MOTHER BRANCHCODE": "TABACO",
        "NS REGULAR": 109
    },
    {
        "TERRITORY CODE": "BT",
        "REGION CODE": "BT2",
        "MOTHER BRANCHCODE": "VIRAC",
        "NS REGULAR": 83
    },
    {
        "TERRITORY CODE": "CLBZT",
        "NS REGULAR": 19
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "",
        "NS REGULAR": 4026
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 4026
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ1",
        "NS REGULAR": 19
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ1",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1799
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ1",
        "MOTHER BRANCHCODE": "ATIMON",
        "NS REGULAR": 19
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ1",
        "MOTHER BRANCHCODE": "BOAC",
        "NS REGULAR": 236
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ1",
        "MOTHER BRANCHCODE": "CANDEL",
        "NS REGULAR": 232
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ1",
        "MOTHER BRANCHCODE": "CATANA",
        "NS REGULAR": 167
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ1",
        "MOTHER BRANCHCODE": "GUMACA",
        "NS REGULAR": 60
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ1",
        "MOTHER BRANCHCODE": "LOPEZ",
        "NS REGULAR": 215
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ1",
        "MOTHER BRANCHCODE": "LUCBAN",
        "NS REGULAR": 255
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ1",
        "MOTHER BRANCHCODE": "LUCENA",
        "NS REGULAR": 385
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ2",
        "NS REGULAR": 178
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ2",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 2227
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ2",
        "MOTHER BRANCHCODE": "BATANG",
        "NS REGULAR": 501
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ2",
        "MOTHER BRANCHCODE": "LIPA",
        "NS REGULAR": 400
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ2",
        "MOTHER BRANCHCODE": "NASUGB",
        "NS REGULAR": 360
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ2",
        "MOTHER BRANCHCODE": "ROSARI",
        "NS REGULAR": 426
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ2",
        "MOTHER BRANCHCODE": "STOTOM",
        "NS REGULAR": 178
    },
    {
        "TERRITORY CODE": "CLBZT",
        "REGION CODE": "CLBZ2",
        "MOTHER BRANCHCODE": "TANAUA",
        "NS REGULAR": 360
    },
    {
        "TERRITORY CODE": "CLT1",
        "NS REGULAR": 73
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "",
        "NS REGULAR": 2143
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 2143
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-1",
        "NS REGULAR": 73
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-1",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1285
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-1",
        "MOTHER BRANCHCODE": "ANGELE",
        "NS REGULAR": 246
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-1",
        "MOTHER BRANCHCODE": "CENBUL",
        "NS REGULAR": 154
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-1",
        "MOTHER BRANCHCODE": "MALOLO",
        "NS REGULAR": 136
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-1",
        "MOTHER BRANCHCODE": "MEYCAU",
        "NS REGULAR": 300
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-1",
        "MOTHER BRANCHCODE": "SANFER",
        "NS REGULAR": 145
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-1",
        "MOTHER BRANCHCODE": "SANMIG",
        "NS REGULAR": 73
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-1",
        "MOTHER BRANCHCODE": "STA.MA",
        "NS REGULAR": 140
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-2",
        "NS REGULAR": 99
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-2",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 858
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-2",
        "MOTHER BRANCHCODE": "BALANG",
        "NS REGULAR": 186
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-2",
        "MOTHER BRANCHCODE": "CRUZZA",
        "NS REGULAR": 221
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-2",
        "MOTHER BRANCHCODE": "DINALU",
        "NS REGULAR": 120
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-2",
        "MOTHER BRANCHCODE": "IBAZAM",
        "NS REGULAR": 124
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-2",
        "MOTHER BRANCHCODE": "LUBAO",
        "NS REGULAR": 108
    },
    {
        "TERRITORY CODE": "CLT1",
        "REGION CODE": "CL1-2",
        "MOTHER BRANCHCODE": "MARIVE",
        "NS REGULAR": 99
    },
    {
        "TERRITORY CODE": "CLT2",
        "NS REGULAR": 92
    },
    {
        "TERRITORY CODE": "CLT2",
        "REGION CODE": "",
        "NS REGULAR": 2100
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 2100
    },
    {
        "TERRITORY CODE": "CLT2",
        "REGION CODE": "CL2-1",
        "NS REGULAR": 131
    },
    {
        "TERRITORY CODE": "CLT2",
        "REGION CODE": "CL2-1",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1343
    },
    {
        "TERRITORY CODE": "CLT2",
        "REGION CODE": "CL2-1",
        "MOTHER BRANCHCODE": "CABANA",
        "NS REGULAR": 131
    },
    {
        "TERRITORY CODE": "CLT2",
        "REGION CODE": "CL2-1",
        "MOTHER BRANCHCODE": "CAMILI",
        "NS REGULAR": 218
    },
    {
        "TERRITORY CODE": "CLT2",
        "REGION CODE": "CL2-1",
        "MOTHER BRANCHCODE": "JOSNUE",
        "NS REGULAR": 237
    },
    {
        "TERRITORY CODE": "CLT2",
        "REGION CODE": "CL2-1",
        "MOTHER BRANCHCODE": "PANIQU",
        "NS REGULAR": 248
    },
    {
        "TERRITORY CODE": "CLT2",
        "REGION CODE": "CL2-1",
        "MOTHER BRANCHCODE": "TALAVE",
        "NS REGULAR": 180
    },
    {
        "TERRITORY CODE": "CLT2",
        "REGION CODE": "CL2-1",
        "MOTHER BRANCHCODE": "TARLAC",
        "NS REGULAR": 276
    },
    {
        "TERRITORY CODE": "CLT2",
        "REGION CODE": "CL2-2",
        "NS REGULAR": 92
    },
    {
        "TERRITORY CODE": "CLT2",
        "REGION CODE": "CL2-2",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 751
    },
    {
        "TERRITORY CODE": "CLT2",
        "REGION CODE": "CL2-2",
        "MOTHER BRANCHCODE": "ALAMIN",
        "NS REGULAR": 110
    },
    {
        "TERRITORY CODE": "CLT2",
        "REGION CODE": "CL2-2",
        "MOTHER BRANCHCODE": "DAGUPA",
        "NS REGULAR": 160
    },
    {
        "TERRITORY CODE": "CLT2",
        "REGION CODE": "CL2-2",
        "MOTHER BRANCHCODE": "LINGAY",
        "NS REGULAR": 92
    },
    {
        "TERRITORY CODE": "CLT2",
        "REGION CODE": "CL2-2",
        "MOTHER BRANCHCODE": "SNCARL",
        "NS REGULAR": 126
    },
    {
        "TERRITORY CODE": "CLT2",
        "REGION CODE": "CL2-2",
        "MOTHER BRANCHCODE": "URDANE",
        "NS REGULAR": 186
    },
    {
        "TERRITORY CODE": "CVIT",
        "NS REGULAR": 20
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "",
        "NS REGULAR": 1668
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1668
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "CVR",
        "NS REGULAR": 20
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "CVR",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1074
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "CVR",
        "MOTHER BRANCHCODE": "APARRI",
        "NS REGULAR": 20
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "CVR",
        "MOTHER BRANCHCODE": "CAUAYA",
        "NS REGULAR": 112
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "CVR",
        "MOTHER BRANCHCODE": "DIFFUN",
        "NS REGULAR": 48
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "CVR",
        "MOTHER BRANCHCODE": "GATTAR",
        "NS REGULAR": 98
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "CVR",
        "MOTHER BRANCHCODE": "ILAGAN",
        "NS REGULAR": 284
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "CVR",
        "MOTHER BRANCHCODE": "SANTIA",
        "NS REGULAR": 148
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "CVR",
        "MOTHER BRANCHCODE": "SOLANO",
        "NS REGULAR": 194
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "CVR",
        "MOTHER BRANCHCODE": "TUGUEG",
        "NS REGULAR": 101
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "IR",
        "NS REGULAR": 31
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "IR",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 544
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "IR",
        "MOTHER BRANCHCODE": "ABRA",
        "NS REGULAR": 100
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "IR",
        "MOTHER BRANCHCODE": "BAGUIO",
        "NS REGULAR": 158
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "IR",
        "MOTHER BRANCHCODE": "CANDON",
        "NS REGULAR": 31
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "IR",
        "MOTHER BRANCHCODE": "LA TRI",
        "NS REGULAR": 101
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "IR",
        "MOTHER BRANCHCODE": "LAOAG",
        "NS REGULAR": 31
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "IR",
        "MOTHER BRANCHCODE": "SFLU",
        "NS REGULAR": 53
    },
    {
        "TERRITORY CODE": "CVIT",
        "REGION CODE": "IR",
        "MOTHER BRANCHCODE": "VIGAN",
        "NS REGULAR": 62
    },
    {
        "TERRITORY CODE": "MCT",
        "NS REGULAR": 18
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "",
        "NS REGULAR": 4443
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 4443
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC1",
        "NS REGULAR": 215
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC1",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1644
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC1",
        "MOTHER BRANCHCODE": "BUHANG",
        "NS REGULAR": 216
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC1",
        "MOTHER BRANCHCODE": "CALINA",
        "NS REGULAR": 229
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC1",
        "MOTHER BRANCHCODE": "DAVAO",
        "NS REGULAR": 434
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC1",
        "MOTHER BRANCHCODE": "MATINA",
        "NS REGULAR": 215
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC1",
        "MOTHER BRANCHCODE": "TORIL",
        "NS REGULAR": 449
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC2",
        "NS REGULAR": 99
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC2",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 835
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC2",
        "MOTHER BRANCHCODE": "DIGOS",
        "NS REGULAR": 407
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC2",
        "MOTHER BRANCHCODE": "KABACA",
        "NS REGULAR": 171
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC2",
        "MOTHER BRANCHCODE": "KIDAPA",
        "NS REGULAR": 146
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC2",
        "MOTHER BRANCHCODE": "MALITA",
        "NS REGULAR": 99
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC3",
        "NS REGULAR": 147
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC3",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 934
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC3",
        "MOTHER BRANCHCODE": "GENSAN",
        "NS REGULAR": 168
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC3",
        "MOTHER BRANCHCODE": "GSCPIO",
        "NS REGULAR": 193
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC3",
        "MOTHER BRANCHCODE": "KORONA",
        "NS REGULAR": 147
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC3",
        "MOTHER BRANCHCODE": "MIDSAY",
        "NS REGULAR": 176
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC3",
        "MOTHER BRANCHCODE": "TACURO",
        "NS REGULAR": 206
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC4",
        "NS REGULAR": 18
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC4",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 925
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC4",
        "MOTHER BRANCHCODE": "LUPON",
        "NS REGULAR": 18
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC4",
        "MOTHER BRANCHCODE": "NABUNT",
        "NS REGULAR": 78
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC4",
        "MOTHER BRANCHCODE": "PANABO",
        "NS REGULAR": 253
    },
    {
        "TERRITORY CODE": "MCT",
        "REGION CODE": "MC4",
        "MOTHER BRANCHCODE": "TAGUM",
        "NS REGULAR": 400
    },
    {
        "TERRITORY CODE": "MMRPT",
        "NS REGULAR": 16
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "",
        "NS REGULAR": 2994
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 2994
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA1",
        "NS REGULAR": 94
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA1",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 934
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA1",
        "MOTHER BRANCHCODE": "BONGAB",
        "NS REGULAR": 125
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA1",
        "MOTHER BRANCHCODE": "CALAPA",
        "NS REGULAR": 151
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA1",
        "MOTHER BRANCHCODE": "GALERA",
        "NS REGULAR": 150
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA1",
        "MOTHER BRANCHCODE": "JOSEOM",
        "NS REGULAR": 141
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA1",
        "MOTHER BRANCHCODE": "MAMBUR",
        "NS REGULAR": 94
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA1",
        "MOTHER BRANCHCODE": "PINAMA",
        "NS REGULAR": 139
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA1",
        "MOTHER BRANCHCODE": "VICTOR",
        "NS REGULAR": 99
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA2",
        "NS REGULAR": 62
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA2",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1638
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA2",
        "MOTHER BRANCHCODE": "BINANL",
        "NS REGULAR": 198
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA2",
        "MOTHER BRANCHCODE": "CALAML",
        "NS REGULAR": 522
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA2",
        "MOTHER BRANCHCODE": "NARRA",
        "NS REGULAR": 62
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA2",
        "MOTHER BRANCHCODE": "ROXAPA",
        "NS REGULAR": 343
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA2",
        "MOTHER BRANCHCODE": "SANPED",
        "NS REGULAR": 288
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA2",
        "MOTHER BRANCHCODE": "STAROS",
        "NS REGULAR": 221
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA3",
        "NS REGULAR": 16
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA3",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 422
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA3",
        "MOTHER BRANCHCODE": "CRUZLA",
        "NS REGULAR": 130
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA3",
        "MOTHER BRANCHCODE": "INFANT",
        "NS REGULAR": 115
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA3",
        "MOTHER BRANCHCODE": "ODIONG",
        "NS REGULAR": 16
    },
    {
        "TERRITORY CODE": "MMRPT",
        "REGION CODE": "MIMAROPA3",
        "MOTHER BRANCHCODE": "SANPAB",
        "NS REGULAR": 151
    },
    {
        "TERRITORY CODE": "MNT",
        "NS REGULAR": 50
    },
    {
        "TERRITORY CODE": "MNT",
        "REGION CODE": "",
        "NS REGULAR": 1618
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1618
    },
    {
        "TERRITORY CODE": "MNT",
        "REGION CODE": "MN1",
        "NS REGULAR": 88
    },
    {
        "TERRITORY CODE": "MNT",
        "REGION CODE": "MN1",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 646
    },
    {
        "TERRITORY CODE": "MNT",
        "REGION CODE": "MN1",
        "MOTHER BRANCHCODE": "CAGAYE",
        "NS REGULAR": 183
    },
    {
        "TERRITORY CODE": "MNT",
        "REGION CODE": "MN1",
        "MOTHER BRANCHCODE": "GINGOO",
        "NS REGULAR": 103
    },
    {
        "TERRITORY CODE": "MNT",
        "REGION CODE": "MN1",
        "MOTHER BRANCHCODE": "MALAYB",
        "NS REGULAR": 121
    },
    {
        "TERRITORY CODE": "MNT",
        "REGION CODE": "MN1",
        "MOTHER BRANCHCODE": "MARAMA",
        "NS REGULAR": 88
    },
    {
        "TERRITORY CODE": "MNT",
        "REGION CODE": "MN1",
        "MOTHER BRANCHCODE": "VALENC",
        "NS REGULAR": 102
    },
    {
        "TERRITORY CODE": "MNT",
        "REGION CODE": "MN2",
        "NS REGULAR": 50
    },
    {
        "TERRITORY CODE": "MNT",
        "REGION CODE": "MN2",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 972
    },
    {
        "TERRITORY CODE": "MNT",
        "REGION CODE": "MN2",
        "MOTHER BRANCHCODE": "BUTUAN",
        "NS REGULAR": 211
    },
    {
        "TERRITORY CODE": "MNT",
        "REGION CODE": "MN2",
        "MOTHER BRANCHCODE": "BUTUWE",
        "NS REGULAR": 246
    },
    {
        "TERRITORY CODE": "MNT",
        "REGION CODE": "MN2",
        "MOTHER BRANCHCODE": "MANGAG",
        "NS REGULAR": 62
    },
    {
        "TERRITORY CODE": "MNT",
        "REGION CODE": "MN2",
        "MOTHER BRANCHCODE": "SANFRA",
        "NS REGULAR": 103
    },
    {
        "TERRITORY CODE": "MNT",
        "REGION CODE": "MN2",
        "MOTHER BRANCHCODE": "SURIGA",
        "NS REGULAR": 267
    },
    {
        "TERRITORY CODE": "MNT",
        "REGION CODE": "MN2",
        "MOTHER BRANCHCODE": "TANDAG",
        "NS REGULAR": 50
    },
    {
        "TERRITORY CODE": "MWT",
        "NS REGULAR": 39
    },
    {
        "TERRITORY CODE": "MWT",
        "REGION CODE": "",
        "NS REGULAR": 1687
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1687
    },
    {
        "TERRITORY CODE": "MWT",
        "REGION CODE": "MW1",
        "NS REGULAR": 97
    },
    {
        "TERRITORY CODE": "MWT",
        "REGION CODE": "MW1",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 592
    },
    {
        "TERRITORY CODE": "MWT",
        "REGION CODE": "MW1",
        "MOTHER BRANCHCODE": "CAGAYA",
        "NS REGULAR": 255
    },
    {
        "TERRITORY CODE": "MWT",
        "REGION CODE": "MW1",
        "MOTHER BRANCHCODE": "ILIGAN",
        "NS REGULAR": 97
    },
    {
        "TERRITORY CODE": "MWT",
        "REGION CODE": "MW2",
        "NS REGULAR": 39
    },
    {
        "TERRITORY CODE": "MWT",
        "REGION CODE": "MW2",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1093
    },
    {
        "TERRITORY CODE": "MWT",
        "REGION CODE": "MW2",
        "MOTHER BRANCHCODE": "DIPOLO",
        "NS REGULAR": 230
    },
    {
        "TERRITORY CODE": "MWT",
        "REGION CODE": "MW2",
        "MOTHER BRANCHCODE": "IPIL",
        "NS REGULAR": 137
    },
    {
        "TERRITORY CODE": "MWT",
        "REGION CODE": "MW2",
        "MOTHER BRANCHCODE": "OZAMIS",
        "NS REGULAR": 39
    },
    {
        "TERRITORY CODE": "MWT",
        "REGION CODE": "MW2",
        "MOTHER BRANCHCODE": "PAGADI",
        "NS REGULAR": 146
    },
    {
        "TERRITORY CODE": "MWT",
        "REGION CODE": "MW2",
        "MOTHER BRANCHCODE": "ZAMBOA",
        "NS REGULAR": 113
    },
    {
        "TERRITORY CODE": "MWT",
        "REGION CODE": "MW2",
        "MOTHER BRANCHCODE": "ZAMBOE",
        "NS REGULAR": 234
    },
    {
        "TERRITORY CODE": "NCT1",
        "NS REGULAR": 140
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "",
        "NS REGULAR": 8387
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 8387
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-1",
        "NS REGULAR": 140
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-1",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 2700
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-1",
        "MOTHER BRANCHCODE": "ANTIPO",
        "NS REGULAR": 529
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-1",
        "MOTHER BRANCHCODE": "BINANG",
        "NS REGULAR": 292
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-1",
        "MOTHER BRANCHCODE": "CAINTA",
        "NS REGULAR": 303
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-1",
        "MOTHER BRANCHCODE": "COGEO",
        "NS REGULAR": 287
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-1",
        "MOTHER BRANCHCODE": "KATIPU",
        "NS REGULAR": 140
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-1",
        "MOTHER BRANCHCODE": "MARIKI",
        "NS REGULAR": 544
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-1",
        "MOTHER BRANCHCODE": "MONTAL",
        "NS REGULAR": 348
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-1",
        "MOTHER BRANCHCODE": "TANAY",
        "NS REGULAR": 206
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-2",
        "NS REGULAR": 240
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-2",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 2775
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-2",
        "MOTHER BRANCHCODE": "KALOO2",
        "NS REGULAR": 483
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-2",
        "MOTHER BRANCHCODE": "KALOO3",
        "NS REGULAR": 240
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-2",
        "MOTHER BRANCHCODE": "LAGRO",
        "NS REGULAR": 436
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-2",
        "MOTHER BRANCHCODE": "NOVALI",
        "NS REGULAR": 783
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-2",
        "MOTHER BRANCHCODE": "SANGAN",
        "NS REGULAR": 332
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-2",
        "MOTHER BRANCHCODE": "VALENZ",
        "NS REGULAR": 358
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-3",
        "NS REGULAR": 192
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-3",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 2912
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-3",
        "MOTHER BRANCHCODE": "COMMON",
        "NS REGULAR": 244
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-3",
        "MOTHER BRANCHCODE": "CUBAO",
        "NS REGULAR": 632
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-3",
        "MOTHER BRANCHCODE": "FAIRV2",
        "NS REGULAR": 276
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-3",
        "MOTHER BRANCHCODE": "HO",
        "NS REGULAR": 672
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-3",
        "MOTHER BRANCHCODE": "KAMUNI",
        "NS REGULAR": 192
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-3",
        "MOTHER BRANCHCODE": "ROOSEV",
        "NS REGULAR": 213
    },
    {
        "TERRITORY CODE": "NCT1",
        "REGION CODE": "NCT1-3",
        "MOTHER BRANCHCODE": "SPMCQA",
        "NS REGULAR": 671
    },
    {
        "TERRITORY CODE": "NCT2",
        "NS REGULAR": 169
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "",
        "NS REGULAR": 4326
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 4326
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-1",
        "NS REGULAR": 205
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-1",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1408
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-1",
        "MOTHER BRANCHCODE": "CRUZMM",
        "NS REGULAR": 374
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-1",
        "MOTHER BRANCHCODE": "ERMITA",
        "NS REGULAR": 269
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-1",
        "MOTHER BRANCHCODE": "KALOOK",
        "NS REGULAR": 236
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-1",
        "MOTHER BRANCHCODE": "SAMPAL",
        "NS REGULAR": 298
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-1",
        "MOTHER BRANCHCODE": "SANJUA",
        "NS REGULAR": 205
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-2",
        "NS REGULAR": 169
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-2",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1253
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-2",
        "MOTHER BRANCHCODE": "MANDAL",
        "NS REGULAR": 331
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-2",
        "MOTHER BRANCHCODE": "QUEZAV",
        "NS REGULAR": 750
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-2",
        "MOTHER BRANCHCODE": "STA.ME",
        "NS REGULAR": 169
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-3",
        "NS REGULAR": 205
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-3",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1665
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-3",
        "MOTHER BRANCHCODE": "GUADAL",
        "NS REGULAR": 205
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-3",
        "MOTHER BRANCHCODE": "MAKATI",
        "NS REGULAR": 243
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-3",
        "MOTHER BRANCHCODE": "MUNTIN",
        "NS REGULAR": 673
    },
    {
        "TERRITORY CODE": "NCT2",
        "REGION CODE": "NCT2-3",
        "MOTHER BRANCHCODE": "TAGUIG",
        "NS REGULAR": 544
    },
    {
        "TERRITORY CODE": "NCT3",
        "NS REGULAR": 168
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "",
        "NS REGULAR": 4095
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 4095
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "NCT3-1",
        "NS REGULAR": 168
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "NCT3-1",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 2183
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "NCT3-1",
        "MOTHER BRANCHCODE": "BACOOR",
        "NS REGULAR": 275
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "NCT3-1",
        "MOTHER BRANCHCODE": "BACOWE",
        "NS REGULAR": 363
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "NCT3-1",
        "MOTHER BRANCHCODE": "BICUTA",
        "NS REGULAR": 168
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "NCT3-1",
        "MOTHER BRANCHCODE": "LAS PI",
        "NS REGULAR": 527
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "NCT3-1",
        "MOTHER BRANCHCODE": "PARANA",
        "NS REGULAR": 413
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "NCT3-1",
        "MOTHER BRANCHCODE": "PASAY",
        "NS REGULAR": 329
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "NCT3-2",
        "NS REGULAR": 172
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "NCT3-2",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1892
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "NCT3-2",
        "MOTHER BRANCHCODE": "ALFONS",
        "NS REGULAR": 172
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "NCT3-2",
        "MOTHER BRANCHCODE": "CAVITE",
        "NS REGULAR": 282
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "NCT3-2",
        "MOTHER BRANCHCODE": "DASMAR",
        "NS REGULAR": 403
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "NCT3-2",
        "MOTHER BRANCHCODE": "GMA",
        "NS REGULAR": 397
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "NCT3-2",
        "MOTHER BRANCHCODE": "IMUS",
        "NS REGULAR": 371
    },
    {
        "TERRITORY CODE": "NCT3",
        "REGION CODE": "NCT3-2",
        "MOTHER BRANCHCODE": "TRECE",
        "NS REGULAR": 267
    },
    {
        "TERRITORY CODE": "OS",
        "NS REGULAR": 0
    },
    {
        "TERRITORY CODE": "OS",
        "REGION CODE": "",
        "NS REGULAR": 0
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 0
    },
    {
        "TERRITORY CODE": "OS",
        "REGION CODE": "OS",
        "NS REGULAR": 0
    },
    {
        "TERRITORY CODE": "OS",
        "REGION CODE": "OS",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 0
    },
    {
        "TERRITORY CODE": "OS",
        "REGION CODE": "OS",
        "MOTHER BRANCHCODE": "ESTORE",
        "NS REGULAR": 0
    },
    {
        "TERRITORY CODE": "VCT",
        "NS REGULAR": 55
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "",
        "NS REGULAR": 2680
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 2680
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "VC1",
        "NS REGULAR": 143
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "VC1",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1529
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "VC1",
        "MOTHER BRANCHCODE": "BOGO",
        "NS REGULAR": 143
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "VC1",
        "MOTHER BRANCHCODE": "CEBU",
        "NS REGULAR": 280
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "VC1",
        "MOTHER BRANCHCODE": "CEBUAY",
        "NS REGULAR": 432
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "VC1",
        "MOTHER BRANCHCODE": "DANAO",
        "NS REGULAR": 155
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "VC1",
        "MOTHER BRANCHCODE": "LAPU-L",
        "NS REGULAR": 324
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "VC1",
        "MOTHER BRANCHCODE": "MACTAN",
        "NS REGULAR": 182
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "VC2",
        "NS REGULAR": 55
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "VC2",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1126
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "VC2",
        "MOTHER BRANCHCODE": "CARCAR",
        "NS REGULAR": 55
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "VC2",
        "MOTHER BRANCHCODE": "TAGBIL",
        "NS REGULAR": 314
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "VC2",
        "MOTHER BRANCHCODE": "TALIBO",
        "NS REGULAR": 97
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "VC2",
        "MOTHER BRANCHCODE": "TALISA",
        "NS REGULAR": 300
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "VC2",
        "MOTHER BRANCHCODE": "TOLEDO",
        "NS REGULAR": 149
    },
    {
        "TERRITORY CODE": "VCT",
        "REGION CODE": "VC2",
        "MOTHER BRANCHCODE": "TUBIGO",
        "NS REGULAR": 55
    },
    {
        "TERRITORY CODE": "VET",
        "NS REGULAR": 31
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "",
        "NS REGULAR": 1230
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1230
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "VER1",
        "NS REGULAR": 31
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "VER1",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 653
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "VER1",
        "MOTHER BRANCHCODE": "BORONG",
        "NS REGULAR": 31
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "VER1",
        "MOTHER BRANCHCODE": "CALBAY",
        "NS REGULAR": 74
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "VER1",
        "MOTHER BRANCHCODE": "CATARM",
        "NS REGULAR": 78
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "VER1",
        "MOTHER BRANCHCODE": "CATBAL",
        "NS REGULAR": 76
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "VER1",
        "MOTHER BRANCHCODE": "TACLOB",
        "NS REGULAR": 278
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "VER1",
        "MOTHER BRANCHCODE": "TACLOS",
        "NS REGULAR": 111
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "VER2",
        "NS REGULAR": 36
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "VER2",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 577
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "VER2",
        "MOTHER BRANCHCODE": "BAYBAY",
        "NS REGULAR": 62
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "VER2",
        "MOTHER BRANCHCODE": "MAASIN",
        "NS REGULAR": 100
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "VER2",
        "MOTHER BRANCHCODE": "NAVAL",
        "NS REGULAR": 36
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "VER2",
        "MOTHER BRANCHCODE": "ORMOC",
        "NS REGULAR": 196
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "VER2",
        "MOTHER BRANCHCODE": "PALOMP",
        "NS REGULAR": 78
    },
    {
        "TERRITORY CODE": "VET",
        "REGION CODE": "VER2",
        "MOTHER BRANCHCODE": "SOGOD",
        "NS REGULAR": 59
    },
    {
        "TERRITORY CODE": "VWT1",
        "NS REGULAR": 25
    },
    {
        "TERRITORY CODE": "VWT1",
        "REGION CODE": "",
        "NS REGULAR": 1173
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1173
    },
    {
        "TERRITORY CODE": "VWT1",
        "REGION CODE": "VW1-1",
        "NS REGULAR": 80
    },
    {
        "TERRITORY CODE": "VWT1",
        "REGION CODE": "VW1-1",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 555
    },
    {
        "TERRITORY CODE": "VWT1",
        "REGION CODE": "VW1-1",
        "MOTHER BRANCHCODE": "BACALI",
        "NS REGULAR": 117
    },
    {
        "TERRITORY CODE": "VWT1",
        "REGION CODE": "VW1-1",
        "MOTHER BRANCHCODE": "BACOLO",
        "NS REGULAR": 246
    },
    {
        "TERRITORY CODE": "VWT1",
        "REGION CODE": "VW1-1",
        "MOTHER BRANCHCODE": "HINIGA",
        "NS REGULAR": 80
    },
    {
        "TERRITORY CODE": "VWT1",
        "REGION CODE": "VW1-1",
        "MOTHER BRANCHCODE": "KABANK",
        "NS REGULAR": 107
    },
    {
        "TERRITORY CODE": "VWT1",
        "REGION CODE": "VW1-2",
        "NS REGULAR": 25
    },
    {
        "TERRITORY CODE": "VWT1",
        "REGION CODE": "VW1-2",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 599
    },
    {
        "TERRITORY CODE": "VWT1",
        "REGION CODE": "VW1-2",
        "MOTHER BRANCHCODE": "CADIZ",
        "NS REGULAR": 25
    },
    {
        "TERRITORY CODE": "VWT1",
        "REGION CODE": "VW1-2",
        "MOTHER BRANCHCODE": "CARLNO",
        "NS REGULAR": 96
    },
    {
        "TERRITORY CODE": "VWT1",
        "REGION CODE": "VW1-2",
        "MOTHER BRANCHCODE": "DUMAGU",
        "NS REGULAR": 353
    },
    {
        "TERRITORY CODE": "VWT1",
        "REGION CODE": "VW1-2",
        "MOTHER BRANCHCODE": "ESCALA",
        "NS REGULAR": 33
    },
    {
        "TERRITORY CODE": "VWT1",
        "REGION CODE": "VW1-2",
        "MOTHER BRANCHCODE": "TANJAY",
        "NS REGULAR": 56
    },
    {
        "TERRITORY CODE": "VWT2",
        "NS REGULAR": 30
    },
    {
        "TERRITORY CODE": "VWT2",
        "REGION CODE": "",
        "NS REGULAR": 1448
    },
    {
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 1448
    },
    {
        "TERRITORY CODE": "VWT2",
        "REGION CODE": "VW2-1",
        "NS REGULAR": 57
    },
    {
        "TERRITORY CODE": "VWT2",
        "REGION CODE": "VW2-1",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 823
    },
    {
        "TERRITORY CODE": "VWT2",
        "REGION CODE": "VW2-1",
        "MOTHER BRANCHCODE": "ILOILO",
        "NS REGULAR": 271
    },
    {
        "TERRITORY CODE": "VWT2",
        "REGION CODE": "VW2-1",
        "MOTHER BRANCHCODE": "JOSEAN",
        "NS REGULAR": 96
    },
    {
        "TERRITORY CODE": "VWT2",
        "REGION CODE": "VW2-1",
        "MOTHER BRANCHCODE": "MIAGAO",
        "NS REGULAR": 61
    },
    {
        "TERRITORY CODE": "VWT2",
        "REGION CODE": "VW2-1",
        "MOTHER BRANCHCODE": "MOLO",
        "NS REGULAR": 323
    },
    {
        "TERRITORY CODE": "VWT2",
        "REGION CODE": "VW2-1",
        "MOTHER BRANCHCODE": "PASSI",
        "NS REGULAR": 57
    },
    {
        "TERRITORY CODE": "VWT2",
        "REGION CODE": "VW2-2",
        "NS REGULAR": 30
    },
    {
        "TERRITORY CODE": "VWT2",
        "REGION CODE": "VW2-2",
        "MOTHER BRANCHCODE": "",
        "NS REGULAR": 625
    },
    {
        "TERRITORY CODE": "VWT2",
        "REGION CODE": "VW2-2",
        "MOTHER BRANCHCODE": "IBAJAY",
        "NS REGULAR": 30
    },
    {
        "TERRITORY CODE": "VWT2",
        "REGION CODE": "VW2-2",
        "MOTHER BRANCHCODE": "KALIBO",
        "NS REGULAR": 250
    },
    {
        "TERRITORY CODE": "VWT2",
        "REGION CODE": "VW2-2",
        "MOTHER BRANCHCODE": "ROXAKA",
        "NS REGULAR": 141
    },
    {
        "TERRITORY CODE": "VWT2",
        "REGION CODE": "VW2-2",
        "MOTHER BRANCHCODE": "SARA",
        "NS REGULAR": 178
    }
]

const templates1 = [
    {
        templateId: 0,
        templateTitle: 'Template 1',
        chart: 'barChart',
        row: ['TERRITORY CODE', "REGION CODE", "MOTHER BRANCHCODE" ],
        value: [
            'NS REGULAR', 'NS SOMETHING'
        ],
        templateData: [
            {
                "TERRITORY CODE": "BT",
                "NS REGULAR": 27
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "",
                "NS REGULAR": 2141
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 2141
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT1",
                "NS REGULAR": 69
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT1",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1139
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT1",
                "MOTHER BRANCHCODE": "DAET",
                "NS REGULAR": 184
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT1",
                "MOTHER BRANCHCODE": "IRIGA",
                "NS REGULAR": 177
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT1",
                "MOTHER BRANCHCODE": "JOSEPA",
                "NS REGULAR": 106
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT1",
                "MOTHER BRANCHCODE": "LABO",
                "NS REGULAR": 106
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT1",
                "MOTHER BRANCHCODE": "LIBMAN",
                "NS REGULAR": 69
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT1",
                "MOTHER BRANCHCODE": "NAGA",
                "NS REGULAR": 337
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT1",
                "MOTHER BRANCHCODE": "SIPOCO",
                "NS REGULAR": 131
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT2",
                "NS REGULAR": 27
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT2",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 950
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT2",
                "MOTHER BRANCHCODE": "BULAN",
                "NS REGULAR": 27
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT2",
                "MOTHER BRANCHCODE": "GUINOB",
                "NS REGULAR": 118
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT2",
                "MOTHER BRANCHCODE": "LEGASP",
                "NS REGULAR": 271
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT2",
                "MOTHER BRANCHCODE": "MASBAT",
                "NS REGULAR": 94
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT2",
                "MOTHER BRANCHCODE": "POLANG",
                "NS REGULAR": 61
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT2",
                "MOTHER BRANCHCODE": "SORSOG",
                "NS REGULAR": 131
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT2",
                "MOTHER BRANCHCODE": "TABACO",
                "NS REGULAR": 109
            },
            {
                "TERRITORY CODE": "BT",
                "REGION CODE": "BT2",
                "MOTHER BRANCHCODE": "VIRAC",
                "NS REGULAR": 83
            },
            {
                "TERRITORY CODE": "CLBZT",
                "NS REGULAR": 19
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "",
                "NS REGULAR": 4026
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 4026
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ1",
                "NS REGULAR": 19
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ1",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1799
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ1",
                "MOTHER BRANCHCODE": "ATIMON",
                "NS REGULAR": 19
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ1",
                "MOTHER BRANCHCODE": "BOAC",
                "NS REGULAR": 236
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ1",
                "MOTHER BRANCHCODE": "CANDEL",
                "NS REGULAR": 232
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ1",
                "MOTHER BRANCHCODE": "CATANA",
                "NS REGULAR": 167
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ1",
                "MOTHER BRANCHCODE": "GUMACA",
                "NS REGULAR": 60
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ1",
                "MOTHER BRANCHCODE": "LOPEZ",
                "NS REGULAR": 215
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ1",
                "MOTHER BRANCHCODE": "LUCBAN",
                "NS REGULAR": 255
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ1",
                "MOTHER BRANCHCODE": "LUCENA",
                "NS REGULAR": 385
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ2",
                "NS REGULAR": 178
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ2",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 2227
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ2",
                "MOTHER BRANCHCODE": "BATANG",
                "NS REGULAR": 501
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ2",
                "MOTHER BRANCHCODE": "LIPA",
                "NS REGULAR": 400
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ2",
                "MOTHER BRANCHCODE": "NASUGB",
                "NS REGULAR": 360
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ2",
                "MOTHER BRANCHCODE": "ROSARI",
                "NS REGULAR": 426
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ2",
                "MOTHER BRANCHCODE": "STOTOM",
                "NS REGULAR": 178
            },
            {
                "TERRITORY CODE": "CLBZT",
                "REGION CODE": "CLBZ2",
                "MOTHER BRANCHCODE": "TANAUA",
                "NS REGULAR": 360
            },
            {
                "TERRITORY CODE": "CLT1",
                "NS REGULAR": 73
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "",
                "NS REGULAR": 2143
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 2143
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-1",
                "NS REGULAR": 73
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-1",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1285
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-1",
                "MOTHER BRANCHCODE": "ANGELE",
                "NS REGULAR": 246
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-1",
                "MOTHER BRANCHCODE": "CENBUL",
                "NS REGULAR": 154
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-1",
                "MOTHER BRANCHCODE": "MALOLO",
                "NS REGULAR": 136
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-1",
                "MOTHER BRANCHCODE": "MEYCAU",
                "NS REGULAR": 300
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-1",
                "MOTHER BRANCHCODE": "SANFER",
                "NS REGULAR": 145
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-1",
                "MOTHER BRANCHCODE": "SANMIG",
                "NS REGULAR": 73
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-1",
                "MOTHER BRANCHCODE": "STA.MA",
                "NS REGULAR": 140
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-2",
                "NS REGULAR": 99
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-2",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 858
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-2",
                "MOTHER BRANCHCODE": "BALANG",
                "NS REGULAR": 186
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-2",
                "MOTHER BRANCHCODE": "CRUZZA",
                "NS REGULAR": 221
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-2",
                "MOTHER BRANCHCODE": "DINALU",
                "NS REGULAR": 120
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-2",
                "MOTHER BRANCHCODE": "IBAZAM",
                "NS REGULAR": 124
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-2",
                "MOTHER BRANCHCODE": "LUBAO",
                "NS REGULAR": 108
            },
            {
                "TERRITORY CODE": "CLT1",
                "REGION CODE": "CL1-2",
                "MOTHER BRANCHCODE": "MARIVE",
                "NS REGULAR": 99
            },
            {
                "TERRITORY CODE": "CLT2",
                "NS REGULAR": 92
            },
            {
                "TERRITORY CODE": "CLT2",
                "REGION CODE": "",
                "NS REGULAR": 2100
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 2100
            },
            {
                "TERRITORY CODE": "CLT2",
                "REGION CODE": "CL2-1",
                "NS REGULAR": 131
            },
            {
                "TERRITORY CODE": "CLT2",
                "REGION CODE": "CL2-1",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1343
            },
            {
                "TERRITORY CODE": "CLT2",
                "REGION CODE": "CL2-1",
                "MOTHER BRANCHCODE": "CABANA",
                "NS REGULAR": 131
            },
            {
                "TERRITORY CODE": "CLT2",
                "REGION CODE": "CL2-1",
                "MOTHER BRANCHCODE": "CAMILI",
                "NS REGULAR": 218
            },
            {
                "TERRITORY CODE": "CLT2",
                "REGION CODE": "CL2-1",
                "MOTHER BRANCHCODE": "JOSNUE",
                "NS REGULAR": 237
            },
            {
                "TERRITORY CODE": "CLT2",
                "REGION CODE": "CL2-1",
                "MOTHER BRANCHCODE": "PANIQU",
                "NS REGULAR": 248
            },
            {
                "TERRITORY CODE": "CLT2",
                "REGION CODE": "CL2-1",
                "MOTHER BRANCHCODE": "TALAVE",
                "NS REGULAR": 180
            },
            {
                "TERRITORY CODE": "CLT2",
                "REGION CODE": "CL2-1",
                "MOTHER BRANCHCODE": "TARLAC",
                "NS REGULAR": 276
            },
            {
                "TERRITORY CODE": "CLT2",
                "REGION CODE": "CL2-2",
                "NS REGULAR": 92
            },
            {
                "TERRITORY CODE": "CLT2",
                "REGION CODE": "CL2-2",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 751
            },
            {
                "TERRITORY CODE": "CLT2",
                "REGION CODE": "CL2-2",
                "MOTHER BRANCHCODE": "ALAMIN",
                "NS REGULAR": 110
            },
            {
                "TERRITORY CODE": "CLT2",
                "REGION CODE": "CL2-2",
                "MOTHER BRANCHCODE": "DAGUPA",
                "NS REGULAR": 160
            },
            {
                "TERRITORY CODE": "CLT2",
                "REGION CODE": "CL2-2",
                "MOTHER BRANCHCODE": "LINGAY",
                "NS REGULAR": 92
            },
            {
                "TERRITORY CODE": "CLT2",
                "REGION CODE": "CL2-2",
                "MOTHER BRANCHCODE": "SNCARL",
                "NS REGULAR": 126
            },
            {
                "TERRITORY CODE": "CLT2",
                "REGION CODE": "CL2-2",
                "MOTHER BRANCHCODE": "URDANE",
                "NS REGULAR": 186
            },
            {
                "TERRITORY CODE": "CVIT",
                "NS REGULAR": 20
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "",
                "NS REGULAR": 1668
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1668
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "CVR",
                "NS REGULAR": 20
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "CVR",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1074
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "CVR",
                "MOTHER BRANCHCODE": "APARRI",
                "NS REGULAR": 20
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "CVR",
                "MOTHER BRANCHCODE": "CAUAYA",
                "NS REGULAR": 112
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "CVR",
                "MOTHER BRANCHCODE": "DIFFUN",
                "NS REGULAR": 48
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "CVR",
                "MOTHER BRANCHCODE": "GATTAR",
                "NS REGULAR": 98
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "CVR",
                "MOTHER BRANCHCODE": "ILAGAN",
                "NS REGULAR": 284
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "CVR",
                "MOTHER BRANCHCODE": "SANTIA",
                "NS REGULAR": 148
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "CVR",
                "MOTHER BRANCHCODE": "SOLANO",
                "NS REGULAR": 194
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "CVR",
                "MOTHER BRANCHCODE": "TUGUEG",
                "NS REGULAR": 101
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "IR",
                "NS REGULAR": 31
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "IR",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 544
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "IR",
                "MOTHER BRANCHCODE": "ABRA",
                "NS REGULAR": 100
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "IR",
                "MOTHER BRANCHCODE": "BAGUIO",
                "NS REGULAR": 158
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "IR",
                "MOTHER BRANCHCODE": "CANDON",
                "NS REGULAR": 31
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "IR",
                "MOTHER BRANCHCODE": "LA TRI",
                "NS REGULAR": 101
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "IR",
                "MOTHER BRANCHCODE": "LAOAG",
                "NS REGULAR": 31
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "IR",
                "MOTHER BRANCHCODE": "SFLU",
                "NS REGULAR": 53
            },
            {
                "TERRITORY CODE": "CVIT",
                "REGION CODE": "IR",
                "MOTHER BRANCHCODE": "VIGAN",
                "NS REGULAR": 62
            },
            {
                "TERRITORY CODE": "MCT",
                "NS REGULAR": 18
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "",
                "NS REGULAR": 4443
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 4443
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC1",
                "NS REGULAR": 215
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC1",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1644
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC1",
                "MOTHER BRANCHCODE": "BUHANG",
                "NS REGULAR": 216
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC1",
                "MOTHER BRANCHCODE": "CALINA",
                "NS REGULAR": 229
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC1",
                "MOTHER BRANCHCODE": "DAVAO",
                "NS REGULAR": 434
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC1",
                "MOTHER BRANCHCODE": "MATINA",
                "NS REGULAR": 215
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC1",
                "MOTHER BRANCHCODE": "TORIL",
                "NS REGULAR": 449
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC2",
                "NS REGULAR": 99
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC2",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 835
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC2",
                "MOTHER BRANCHCODE": "DIGOS",
                "NS REGULAR": 407
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC2",
                "MOTHER BRANCHCODE": "KABACA",
                "NS REGULAR": 171
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC2",
                "MOTHER BRANCHCODE": "KIDAPA",
                "NS REGULAR": 146
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC2",
                "MOTHER BRANCHCODE": "MALITA",
                "NS REGULAR": 99
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC3",
                "NS REGULAR": 147
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC3",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 934
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC3",
                "MOTHER BRANCHCODE": "GENSAN",
                "NS REGULAR": 168
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC3",
                "MOTHER BRANCHCODE": "GSCPIO",
                "NS REGULAR": 193
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC3",
                "MOTHER BRANCHCODE": "KORONA",
                "NS REGULAR": 147
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC3",
                "MOTHER BRANCHCODE": "MIDSAY",
                "NS REGULAR": 176
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC3",
                "MOTHER BRANCHCODE": "TACURO",
                "NS REGULAR": 206
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC4",
                "NS REGULAR": 18
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC4",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 925
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC4",
                "MOTHER BRANCHCODE": "LUPON",
                "NS REGULAR": 18
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC4",
                "MOTHER BRANCHCODE": "NABUNT",
                "NS REGULAR": 78
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC4",
                "MOTHER BRANCHCODE": "PANABO",
                "NS REGULAR": 253
            },
            {
                "TERRITORY CODE": "MCT",
                "REGION CODE": "MC4",
                "MOTHER BRANCHCODE": "TAGUM",
                "NS REGULAR": 400
            },
            {
                "TERRITORY CODE": "MMRPT",
                "NS REGULAR": 16
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "",
                "NS REGULAR": 2994
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 2994
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA1",
                "NS REGULAR": 94
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA1",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 934
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA1",
                "MOTHER BRANCHCODE": "BONGAB",
                "NS REGULAR": 125
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA1",
                "MOTHER BRANCHCODE": "CALAPA",
                "NS REGULAR": 151
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA1",
                "MOTHER BRANCHCODE": "GALERA",
                "NS REGULAR": 150
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA1",
                "MOTHER BRANCHCODE": "JOSEOM",
                "NS REGULAR": 141
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA1",
                "MOTHER BRANCHCODE": "MAMBUR",
                "NS REGULAR": 94
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA1",
                "MOTHER BRANCHCODE": "PINAMA",
                "NS REGULAR": 139
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA1",
                "MOTHER BRANCHCODE": "VICTOR",
                "NS REGULAR": 99
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA2",
                "NS REGULAR": 62
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA2",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1638
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA2",
                "MOTHER BRANCHCODE": "BINANL",
                "NS REGULAR": 198
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA2",
                "MOTHER BRANCHCODE": "CALAML",
                "NS REGULAR": 522
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA2",
                "MOTHER BRANCHCODE": "NARRA",
                "NS REGULAR": 62
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA2",
                "MOTHER BRANCHCODE": "ROXAPA",
                "NS REGULAR": 343
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA2",
                "MOTHER BRANCHCODE": "SANPED",
                "NS REGULAR": 288
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA2",
                "MOTHER BRANCHCODE": "STAROS",
                "NS REGULAR": 221
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA3",
                "NS REGULAR": 16
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA3",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 422
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA3",
                "MOTHER BRANCHCODE": "CRUZLA",
                "NS REGULAR": 130
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA3",
                "MOTHER BRANCHCODE": "INFANT",
                "NS REGULAR": 115
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA3",
                "MOTHER BRANCHCODE": "ODIONG",
                "NS REGULAR": 16
            },
            {
                "TERRITORY CODE": "MMRPT",
                "REGION CODE": "MIMAROPA3",
                "MOTHER BRANCHCODE": "SANPAB",
                "NS REGULAR": 151
            },
            {
                "TERRITORY CODE": "MNT",
                "NS REGULAR": 50
            },
            {
                "TERRITORY CODE": "MNT",
                "REGION CODE": "",
                "NS REGULAR": 1618
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1618
            },
            {
                "TERRITORY CODE": "MNT",
                "REGION CODE": "MN1",
                "NS REGULAR": 88
            },
            {
                "TERRITORY CODE": "MNT",
                "REGION CODE": "MN1",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 646
            },
            {
                "TERRITORY CODE": "MNT",
                "REGION CODE": "MN1",
                "MOTHER BRANCHCODE": "CAGAYE",
                "NS REGULAR": 183
            },
            {
                "TERRITORY CODE": "MNT",
                "REGION CODE": "MN1",
                "MOTHER BRANCHCODE": "GINGOO",
                "NS REGULAR": 103
            },
            {
                "TERRITORY CODE": "MNT",
                "REGION CODE": "MN1",
                "MOTHER BRANCHCODE": "MALAYB",
                "NS REGULAR": 121
            },
            {
                "TERRITORY CODE": "MNT",
                "REGION CODE": "MN1",
                "MOTHER BRANCHCODE": "MARAMA",
                "NS REGULAR": 88
            },
            {
                "TERRITORY CODE": "MNT",
                "REGION CODE": "MN1",
                "MOTHER BRANCHCODE": "VALENC",
                "NS REGULAR": 102
            },
            {
                "TERRITORY CODE": "MNT",
                "REGION CODE": "MN2",
                "NS REGULAR": 50
            },
            {
                "TERRITORY CODE": "MNT",
                "REGION CODE": "MN2",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 972
            },
            {
                "TERRITORY CODE": "MNT",
                "REGION CODE": "MN2",
                "MOTHER BRANCHCODE": "BUTUAN",
                "NS REGULAR": 211
            },
            {
                "TERRITORY CODE": "MNT",
                "REGION CODE": "MN2",
                "MOTHER BRANCHCODE": "BUTUWE",
                "NS REGULAR": 246
            },
            {
                "TERRITORY CODE": "MNT",
                "REGION CODE": "MN2",
                "MOTHER BRANCHCODE": "MANGAG",
                "NS REGULAR": 62
            },
            {
                "TERRITORY CODE": "MNT",
                "REGION CODE": "MN2",
                "MOTHER BRANCHCODE": "SANFRA",
                "NS REGULAR": 103
            },
            {
                "TERRITORY CODE": "MNT",
                "REGION CODE": "MN2",
                "MOTHER BRANCHCODE": "SURIGA",
                "NS REGULAR": 267
            },
            {
                "TERRITORY CODE": "MNT",
                "REGION CODE": "MN2",
                "MOTHER BRANCHCODE": "TANDAG",
                "NS REGULAR": 50
            },
            {
                "TERRITORY CODE": "MWT",
                "NS REGULAR": 39
            },
            {
                "TERRITORY CODE": "MWT",
                "REGION CODE": "",
                "NS REGULAR": 1687
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1687
            },
            {
                "TERRITORY CODE": "MWT",
                "REGION CODE": "MW1",
                "NS REGULAR": 97
            },
            {
                "TERRITORY CODE": "MWT",
                "REGION CODE": "MW1",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 592
            },
            {
                "TERRITORY CODE": "MWT",
                "REGION CODE": "MW1",
                "MOTHER BRANCHCODE": "CAGAYA",
                "NS REGULAR": 255
            },
            {
                "TERRITORY CODE": "MWT",
                "REGION CODE": "MW1",
                "MOTHER BRANCHCODE": "ILIGAN",
                "NS REGULAR": 97
            },
            {
                "TERRITORY CODE": "MWT",
                "REGION CODE": "MW2",
                "NS REGULAR": 39
            },
            {
                "TERRITORY CODE": "MWT",
                "REGION CODE": "MW2",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1093
            },
            {
                "TERRITORY CODE": "MWT",
                "REGION CODE": "MW2",
                "MOTHER BRANCHCODE": "DIPOLO",
                "NS REGULAR": 230
            },
            {
                "TERRITORY CODE": "MWT",
                "REGION CODE": "MW2",
                "MOTHER BRANCHCODE": "IPIL",
                "NS REGULAR": 137
            },
            {
                "TERRITORY CODE": "MWT",
                "REGION CODE": "MW2",
                "MOTHER BRANCHCODE": "OZAMIS",
                "NS REGULAR": 39
            },
            {
                "TERRITORY CODE": "MWT",
                "REGION CODE": "MW2",
                "MOTHER BRANCHCODE": "PAGADI",
                "NS REGULAR": 146
            },
            {
                "TERRITORY CODE": "MWT",
                "REGION CODE": "MW2",
                "MOTHER BRANCHCODE": "ZAMBOA",
                "NS REGULAR": 113
            },
            {
                "TERRITORY CODE": "MWT",
                "REGION CODE": "MW2",
                "MOTHER BRANCHCODE": "ZAMBOE",
                "NS REGULAR": 234
            },
            {
                "TERRITORY CODE": "NCT1",
                "NS REGULAR": 140
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "",
                "NS REGULAR": 8387
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 8387
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-1",
                "NS REGULAR": 140
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-1",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 2700
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-1",
                "MOTHER BRANCHCODE": "ANTIPO",
                "NS REGULAR": 529
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-1",
                "MOTHER BRANCHCODE": "BINANG",
                "NS REGULAR": 292
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-1",
                "MOTHER BRANCHCODE": "CAINTA",
                "NS REGULAR": 303
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-1",
                "MOTHER BRANCHCODE": "COGEO",
                "NS REGULAR": 287
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-1",
                "MOTHER BRANCHCODE": "KATIPU",
                "NS REGULAR": 140
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-1",
                "MOTHER BRANCHCODE": "MARIKI",
                "NS REGULAR": 544
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-1",
                "MOTHER BRANCHCODE": "MONTAL",
                "NS REGULAR": 348
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-1",
                "MOTHER BRANCHCODE": "TANAY",
                "NS REGULAR": 206
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-2",
                "NS REGULAR": 240
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-2",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 2775
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-2",
                "MOTHER BRANCHCODE": "KALOO2",
                "NS REGULAR": 483
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-2",
                "MOTHER BRANCHCODE": "KALOO3",
                "NS REGULAR": 240
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-2",
                "MOTHER BRANCHCODE": "LAGRO",
                "NS REGULAR": 436
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-2",
                "MOTHER BRANCHCODE": "NOVALI",
                "NS REGULAR": 783
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-2",
                "MOTHER BRANCHCODE": "SANGAN",
                "NS REGULAR": 332
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-2",
                "MOTHER BRANCHCODE": "VALENZ",
                "NS REGULAR": 358
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-3",
                "NS REGULAR": 192
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-3",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 2912
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-3",
                "MOTHER BRANCHCODE": "COMMON",
                "NS REGULAR": 244
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-3",
                "MOTHER BRANCHCODE": "CUBAO",
                "NS REGULAR": 632
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-3",
                "MOTHER BRANCHCODE": "FAIRV2",
                "NS REGULAR": 276
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-3",
                "MOTHER BRANCHCODE": "HO",
                "NS REGULAR": 672
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-3",
                "MOTHER BRANCHCODE": "KAMUNI",
                "NS REGULAR": 192
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-3",
                "MOTHER BRANCHCODE": "ROOSEV",
                "NS REGULAR": 213
            },
            {
                "TERRITORY CODE": "NCT1",
                "REGION CODE": "NCT1-3",
                "MOTHER BRANCHCODE": "SPMCQA",
                "NS REGULAR": 671
            },
            {
                "TERRITORY CODE": "NCT2",
                "NS REGULAR": 169
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "",
                "NS REGULAR": 4326
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 4326
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-1",
                "NS REGULAR": 205
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-1",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1408
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-1",
                "MOTHER BRANCHCODE": "CRUZMM",
                "NS REGULAR": 374
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-1",
                "MOTHER BRANCHCODE": "ERMITA",
                "NS REGULAR": 269
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-1",
                "MOTHER BRANCHCODE": "KALOOK",
                "NS REGULAR": 236
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-1",
                "MOTHER BRANCHCODE": "SAMPAL",
                "NS REGULAR": 298
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-1",
                "MOTHER BRANCHCODE": "SANJUA",
                "NS REGULAR": 205
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-2",
                "NS REGULAR": 169
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-2",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1253
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-2",
                "MOTHER BRANCHCODE": "MANDAL",
                "NS REGULAR": 331
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-2",
                "MOTHER BRANCHCODE": "QUEZAV",
                "NS REGULAR": 750
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-2",
                "MOTHER BRANCHCODE": "STA.ME",
                "NS REGULAR": 169
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-3",
                "NS REGULAR": 205
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-3",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1665
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-3",
                "MOTHER BRANCHCODE": "GUADAL",
                "NS REGULAR": 205
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-3",
                "MOTHER BRANCHCODE": "MAKATI",
                "NS REGULAR": 243
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-3",
                "MOTHER BRANCHCODE": "MUNTIN",
                "NS REGULAR": 673
            },
            {
                "TERRITORY CODE": "NCT2",
                "REGION CODE": "NCT2-3",
                "MOTHER BRANCHCODE": "TAGUIG",
                "NS REGULAR": 544
            },
            {
                "TERRITORY CODE": "NCT3",
                "NS REGULAR": 168
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "",
                "NS REGULAR": 4095
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 4095
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "NCT3-1",
                "NS REGULAR": 168
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "NCT3-1",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 2183
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "NCT3-1",
                "MOTHER BRANCHCODE": "BACOOR",
                "NS REGULAR": 275
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "NCT3-1",
                "MOTHER BRANCHCODE": "BACOWE",
                "NS REGULAR": 363
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "NCT3-1",
                "MOTHER BRANCHCODE": "BICUTA",
                "NS REGULAR": 168
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "NCT3-1",
                "MOTHER BRANCHCODE": "LAS PI",
                "NS REGULAR": 527
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "NCT3-1",
                "MOTHER BRANCHCODE": "PARANA",
                "NS REGULAR": 413
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "NCT3-1",
                "MOTHER BRANCHCODE": "PASAY",
                "NS REGULAR": 329
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "NCT3-2",
                "NS REGULAR": 172
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "NCT3-2",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1892
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "NCT3-2",
                "MOTHER BRANCHCODE": "ALFONS",
                "NS REGULAR": 172
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "NCT3-2",
                "MOTHER BRANCHCODE": "CAVITE",
                "NS REGULAR": 282
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "NCT3-2",
                "MOTHER BRANCHCODE": "DASMAR",
                "NS REGULAR": 403
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "NCT3-2",
                "MOTHER BRANCHCODE": "GMA",
                "NS REGULAR": 397
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "NCT3-2",
                "MOTHER BRANCHCODE": "IMUS",
                "NS REGULAR": 371
            },
            {
                "TERRITORY CODE": "NCT3",
                "REGION CODE": "NCT3-2",
                "MOTHER BRANCHCODE": "TRECE",
                "NS REGULAR": 267
            },
            {
                "TERRITORY CODE": "OS",
                "NS REGULAR": 0
            },
            {
                "TERRITORY CODE": "OS",
                "REGION CODE": "",
                "NS REGULAR": 0
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 0
            },
            {
                "TERRITORY CODE": "OS",
                "REGION CODE": "OS",
                "NS REGULAR": 0
            },
            {
                "TERRITORY CODE": "OS",
                "REGION CODE": "OS",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 0
            },
            {
                "TERRITORY CODE": "OS",
                "REGION CODE": "OS",
                "MOTHER BRANCHCODE": "ESTORE",
                "NS REGULAR": 0
            },
            {
                "TERRITORY CODE": "VCT",
                "NS REGULAR": 55
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "",
                "NS REGULAR": 2680
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 2680
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "VC1",
                "NS REGULAR": 143
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "VC1",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1529
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "VC1",
                "MOTHER BRANCHCODE": "BOGO",
                "NS REGULAR": 143
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "VC1",
                "MOTHER BRANCHCODE": "CEBU",
                "NS REGULAR": 280
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "VC1",
                "MOTHER BRANCHCODE": "CEBUAY",
                "NS REGULAR": 432
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "VC1",
                "MOTHER BRANCHCODE": "DANAO",
                "NS REGULAR": 155
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "VC1",
                "MOTHER BRANCHCODE": "LAPU-L",
                "NS REGULAR": 324
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "VC1",
                "MOTHER BRANCHCODE": "MACTAN",
                "NS REGULAR": 182
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "VC2",
                "NS REGULAR": 55
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "VC2",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1126
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "VC2",
                "MOTHER BRANCHCODE": "CARCAR",
                "NS REGULAR": 55
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "VC2",
                "MOTHER BRANCHCODE": "TAGBIL",
                "NS REGULAR": 314
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "VC2",
                "MOTHER BRANCHCODE": "TALIBO",
                "NS REGULAR": 97
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "VC2",
                "MOTHER BRANCHCODE": "TALISA",
                "NS REGULAR": 300
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "VC2",
                "MOTHER BRANCHCODE": "TOLEDO",
                "NS REGULAR": 149
            },
            {
                "TERRITORY CODE": "VCT",
                "REGION CODE": "VC2",
                "MOTHER BRANCHCODE": "TUBIGO",
                "NS REGULAR": 55
            },
            {
                "TERRITORY CODE": "VET",
                "NS REGULAR": 31
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "",
                "NS REGULAR": 1230
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1230
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "VER1",
                "NS REGULAR": 31
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "VER1",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 653
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "VER1",
                "MOTHER BRANCHCODE": "BORONG",
                "NS REGULAR": 31
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "VER1",
                "MOTHER BRANCHCODE": "CALBAY",
                "NS REGULAR": 74
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "VER1",
                "MOTHER BRANCHCODE": "CATARM",
                "NS REGULAR": 78
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "VER1",
                "MOTHER BRANCHCODE": "CATBAL",
                "NS REGULAR": 76
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "VER1",
                "MOTHER BRANCHCODE": "TACLOB",
                "NS REGULAR": 278
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "VER1",
                "MOTHER BRANCHCODE": "TACLOS",
                "NS REGULAR": 111
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "VER2",
                "NS REGULAR": 36
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "VER2",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 577
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "VER2",
                "MOTHER BRANCHCODE": "BAYBAY",
                "NS REGULAR": 62
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "VER2",
                "MOTHER BRANCHCODE": "MAASIN",
                "NS REGULAR": 100
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "VER2",
                "MOTHER BRANCHCODE": "NAVAL",
                "NS REGULAR": 36
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "VER2",
                "MOTHER BRANCHCODE": "ORMOC",
                "NS REGULAR": 196
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "VER2",
                "MOTHER BRANCHCODE": "PALOMP",
                "NS REGULAR": 78
            },
            {
                "TERRITORY CODE": "VET",
                "REGION CODE": "VER2",
                "MOTHER BRANCHCODE": "SOGOD",
                "NS REGULAR": 59
            },
            {
                "TERRITORY CODE": "VWT1",
                "NS REGULAR": 25
            },
            {
                "TERRITORY CODE": "VWT1",
                "REGION CODE": "",
                "NS REGULAR": 1173
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1173
            },
            {
                "TERRITORY CODE": "VWT1",
                "REGION CODE": "VW1-1",
                "NS REGULAR": 80
            },
            {
                "TERRITORY CODE": "VWT1",
                "REGION CODE": "VW1-1",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 555
            },
            {
                "TERRITORY CODE": "VWT1",
                "REGION CODE": "VW1-1",
                "MOTHER BRANCHCODE": "BACALI",
                "NS REGULAR": 117
            },
            {
                "TERRITORY CODE": "VWT1",
                "REGION CODE": "VW1-1",
                "MOTHER BRANCHCODE": "BACOLO",
                "NS REGULAR": 246
            },
            {
                "TERRITORY CODE": "VWT1",
                "REGION CODE": "VW1-1",
                "MOTHER BRANCHCODE": "HINIGA",
                "NS REGULAR": 80
            },
            {
                "TERRITORY CODE": "VWT1",
                "REGION CODE": "VW1-1",
                "MOTHER BRANCHCODE": "KABANK",
                "NS REGULAR": 107
            },
            {
                "TERRITORY CODE": "VWT1",
                "REGION CODE": "VW1-2",
                "NS REGULAR": 25
            },
            {
                "TERRITORY CODE": "VWT1",
                "REGION CODE": "VW1-2",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 599
            },
            {
                "TERRITORY CODE": "VWT1",
                "REGION CODE": "VW1-2",
                "MOTHER BRANCHCODE": "CADIZ",
                "NS REGULAR": 25
            },
            {
                "TERRITORY CODE": "VWT1",
                "REGION CODE": "VW1-2",
                "MOTHER BRANCHCODE": "CARLNO",
                "NS REGULAR": 96
            },
            {
                "TERRITORY CODE": "VWT1",
                "REGION CODE": "VW1-2",
                "MOTHER BRANCHCODE": "DUMAGU",
                "NS REGULAR": 353
            },
            {
                "TERRITORY CODE": "VWT1",
                "REGION CODE": "VW1-2",
                "MOTHER BRANCHCODE": "ESCALA",
                "NS REGULAR": 33
            },
            {
                "TERRITORY CODE": "VWT1",
                "REGION CODE": "VW1-2",
                "MOTHER BRANCHCODE": "TANJAY",
                "NS REGULAR": 56
            },
            {
                "TERRITORY CODE": "VWT2",
                "NS REGULAR": 30
            },
            {
                "TERRITORY CODE": "VWT2",
                "REGION CODE": "",
                "NS REGULAR": 1448
            },
            {
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 1448
            },
            {
                "TERRITORY CODE": "VWT2",
                "REGION CODE": "VW2-1",
                "NS REGULAR": 57
            },
            {
                "TERRITORY CODE": "VWT2",
                "REGION CODE": "VW2-1",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 823
            },
            {
                "TERRITORY CODE": "VWT2",
                "REGION CODE": "VW2-1",
                "MOTHER BRANCHCODE": "ILOILO",
                "NS REGULAR": 271
            },
            {
                "TERRITORY CODE": "VWT2",
                "REGION CODE": "VW2-1",
                "MOTHER BRANCHCODE": "JOSEAN",
                "NS REGULAR": 96
            },
            {
                "TERRITORY CODE": "VWT2",
                "REGION CODE": "VW2-1",
                "MOTHER BRANCHCODE": "MIAGAO",
                "NS REGULAR": 61
            },
            {
                "TERRITORY CODE": "VWT2",
                "REGION CODE": "VW2-1",
                "MOTHER BRANCHCODE": "MOLO",
                "NS REGULAR": 323
            },
            {
                "TERRITORY CODE": "VWT2",
                "REGION CODE": "VW2-1",
                "MOTHER BRANCHCODE": "PASSI",
                "NS REGULAR": 57
            },
            {
                "TERRITORY CODE": "VWT2",
                "REGION CODE": "VW2-2",
                "NS REGULAR": 30
            },
            {
                "TERRITORY CODE": "VWT2",
                "REGION CODE": "VW2-2",
                "MOTHER BRANCHCODE": "",
                "NS REGULAR": 625
            },
            {
                "TERRITORY CODE": "VWT2",
                "REGION CODE": "VW2-2",
                "MOTHER BRANCHCODE": "IBAJAY",
                "NS REGULAR": 30
            },
            {
                "TERRITORY CODE": "VWT2",
                "REGION CODE": "VW2-2",
                "MOTHER BRANCHCODE": "KALIBO",
                "NS REGULAR": 250
            },
            {
                "TERRITORY CODE": "VWT2",
                "REGION CODE": "VW2-2",
                "MOTHER BRANCHCODE": "ROXAKA",
                "NS REGULAR": 141
            },
            {
                "TERRITORY CODE": "VWT2",
                "REGION CODE": "VW2-2",
                "MOTHER BRANCHCODE": "SARA",
                "NS REGULAR": 178
            }
        ]
    },
]

const MultipleAxis = () => {

    function TemplateComponent({ template }: any) {


        switch (template.chart) {
            case 'barChart':
                return <MultipleAxisBarChart data={template.templateData} row={template.row} col={template.value} />;
            case 'areaChart':
                // return <DisplayAreaChart data={template.templateData} row={template.row} col={template.value} />;
            default:
                return null; // Handle the case where the chart type is unknown
        }
    }

    // "TERRITORY CODE": "BT",
    // "REGION CODE": "BT1",
    // "MOTHER BRANCHCODE": "NAGA",
    // "NS REGULAR": 337
    //  console.log(templates1.map(i => i.row.reverse()))
    // console.log(templates1.map(i => i.row.reverse()))
    // console.log(templates1.map(i => [...i.row].reverse()))

    templates1.map(i => i.row.reverse())
    return (

        <>
            <SimpleGrid

                templateColumns={{
                    base: '1fr',
                    md: '1fr',
                    lg: '1fr 1fr'

                }}
            >

                {templates1.map((template, index) => (


                    <Box
                        marginTop={'40px'}
                        marginBottom={'50px'}
                        borderRadius={'20px'}
                        backgroundColor={'white'}
                        width={'1280px'}
                        minH={'350px'}
                        maxH={'950px'}

                        key={index}>
                        {/* {JSON.stringify(template.row)} */}
                        <Heading
                            margin={'20px 100px'}

                            style={{ color: '#2d8659' }}
                        >
                            MULTIPLE X AXIS
                            </Heading>
                        {/* {JSON.stringify(template.templateData)} */}
                        <TemplateComponent template={template} />
                    </Box>

                ))}
            </SimpleGrid>

        </>
    )
}

export default MultipleAxis