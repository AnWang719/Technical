const data = [
  {
    id: 1,
    category: "Octopus",
    isHorizontal: true,
    name: {
      English: "Wheke, Sydney octopus Octopus tetricus",
      Maori: "Wheke Octopus tetricus",
    },
    description: {
      English: "Click on circled area to see more in detail",
      Maori: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    image: require("./assets/Octopus/Octopus.png"),
    contents: [
      {
        id: 1,
        category: "Octopus",
        title: {
          English: "Tricky wheke",
          Maori: "He wheke huna",
        },
        description: {
          English:
            "A wheke (octopus) has no bones, so it can wedge its soft body into very small spaces. It is also expert at camouflage, helping it escape from predators. This species of wheke lives in tidal pools around Aotearoa.",
          Maori:
            "Kāore he wheua ō te wheke, ā, ka kuhu noa tōna tinana ngohengohe ki ngā wāhi iti. He tohunga hoki ki te mahi huna, e rere atu ai ia i ngā kaikonihi. E noho ana tēnei momo wheke ki ngā papawai huri noa i Aotearoa.",
        },
        contentImg: require("./assets/Octopus/1.jpg"),
        shape: "circle",
        coords: [753, 879, 176],
      },
      {
        id: 2,
        category: "Octopus",
        title: {
          English: "Tricky wheke",
          Maori: "He wheke huna",
        },
        description: {
          English:
            "A wheke (octopus) has no bones, so it can wedge its soft body into very small spaces. It is also expert at camouflage, helping it escape from predators. This species of wheke lives in tidal pools around Aotearoa.",
          Maori:
            "Kāore he wheua ō te wheke, ā, ka kuhu noa tōna tinana ngohengohe ki ngā wāhi iti. He tohunga hoki ki te mahi huna, e rere atu ai ia i ngā kaikonihi. E noho ana tēnei momo wheke ki ngā papawai huri noa i Aotearoa.",
        },
        contentImg: require("./assets/Octopus/2.jpg"),
        shape: "circle",
        coords: [1170, 534, 108],
      },
      {
        id: 3,
        category: "Octopus",
        title: {
          English: "Tricky wheke",
          Maori: "He wheke huna",
        },
        description: {
          English:
            "A wheke (octopus) has no bones, so it can wedge its soft body into very small spaces. It is also expert at camouflage, helping it escape from predators. This species of wheke lives in tidal pools around Aotearoa.",
          Maori:
            "Kāore he wheua ō te wheke, ā, ka kuhu noa tōna tinana ngohengohe ki ngā wāhi iti. He tohunga hoki ki te mahi huna, e rere atu ai ia i ngā kaikonihi. E noho ana tēnei momo wheke ki ngā papawai huri noa i Aotearoa.",
        },
        contentImg: require("./assets/Octopus/3.jpg"),
        shape: "circle",
        coords: [1224, 1155, 133],
      },
    ],
  },
  {
    id: 2,
    category: "SouthIsland",
    isHorizontal: false,
    name: {
      English: "South Island Regional map",
      Maori: "Te Waipounamu Mahere whenua",
    },
    description: {
      English: "Click on each district area to see more in detail",
      Maori: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    image: require("./assets/SouthIsland/SouthIsland.png"),
    contents: [
      {
        isHorizontal: false,
        title: {
          English: "Tasman",
          Maori: "Te Tai-o-Aorere",
        },
        description: {
          English:
            "Tasman Bay, the largest indentation in the north coast of the South Island, was named after Dutch seafarer, explorer and merchant Abel Tasman. He was the first European to discover New Zealand on 13 December 1642 while on an expedition for the Dutch East India Company. Tasman Bay passed the name on to the adjoining district, which was formed in 1989 largely from the merger of Waimea and Golden Bay counties.",
          Maori:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur.",
        },
        contentImg: require("./assets/SouthIsland/Tasman.jpg"),
        shape: "poly",
        coords: [
          645, 93, 686, 123, 702, 191, 715, 210, 694, 236, 671, 263, 666, 293,
          634, 322, 622, 331, 589, 295, 588, 264, 636, 198, 650, 176, 618, 150,
          603, 121, 627, 96,
        ],
      },
      {
        isHorizontal: false,
        title: {
          English: "Nelson",
          Maori: "Whakatū",
        },
        description: {
          English:
            "Nelson was named in honour of the Admiral Horatio Nelson who defeated both the French and Spanish fleets at the Battle of Trafalgar in 1805. Many roads and public areas around the city are named after people and ships associated with that battle and Trafalgar Street is the main shopping axis of the city. Inhabitants of Nelson are referred to as Nelsonians.",
          Maori:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur.",
        },
        contentImg: require("./assets/SouthIsland/Nelson.jpg"),
        shape: "poly",
        coords: [718, 200, 732, 186, 735, 174, 729, 169, 709, 195],
      },
      {
        isHorizontal: false,
        title: {
          English: "Marlborough",
          Maori: "Te Tauihu-o-te-waka",
        },
        description: {
          English:
            "Marlborough is known for its dry climate, the Marlborough Sounds, and Sauvignon blanc wine. It takes its name from the earlier Marlborough Province, which was named after General The 1st Duke of Marlborough, an English general and statesman.",
          Maori:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur.",
        },
        contentImg: require("./assets/SouthIsland/Marlborough.jpg"),
        shape: "poly",
        coords: [
          745, 162, 731, 189, 722, 197, 701, 233, 688, 247, 675, 265, 661, 308,
          684, 348, 704, 344, 707, 319, 730, 313, 736, 294, 750, 283, 770, 268,
          791, 285, 813, 254, 804, 248, 801, 224, 789, 211, 801, 187, 786, 184,
          769, 162, 759, 163,
        ],
      },
      {
        isHorizontal: false,
        title: {
          English: "West Coast",
          Maori: "Te Tai Poutini",
        },
        description: {
          English:
            'The name Westland is used by some New Zealanders to refer to the whole of the West Coast, including Grey District, Buller District and Fiordland,[citation needed] and can also refer to the short-lived Westland Province of 1873–76. Fiordland is on the west coast, but is in the Southland Region rather than the West Coast Region. Inhabitants of the West Coast are colloquially known as "Coasters".',
          Maori:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur.",
        },
        contentImg: require("./assets/SouthIsland/WestCoast.jpg"),
        shape: "poly",
        coords: [
          261, 634, 233, 648, 220, 647, 218, 625, 200, 623, 194, 616, 208, 599,
          222, 582, 247, 575, 270, 569, 302, 534, 325, 522, 344, 514, 371, 479,
          420, 438, 454, 425, 479, 386, 516, 306, 526, 255, 559, 244, 591, 191,
          590, 131, 599, 121, 610, 139, 614, 155, 631, 154, 647, 173, 636, 199,
          583, 269, 592, 296, 624, 334, 583, 374, 553, 410, 522, 417, 471, 464,
          420, 501, 399, 507, 366, 547, 320, 592, 284, 596, 272, 613,
        ],
      },
      {
        isHorizontal: false,
        title: {
          English: "Canterbury",
          Maori: "Waitaha",
        },
        description: {
          English:
            "The Canterbury Province was formed in 1853 following the passing of the New Zealand Constitution Act 1852. It was formed from part of New Munster Province and covered the middle part of the South Island, stretching from the east coast to the west coast. The province was abolished, along with other provinces of New Zealand, when the Abolition of the Provinces Act came into force on 1 Nov 1876. The modern Canterbury Region has slightly different boundaries, particularly in the north, where it includes some districts from the old Nelson Province.",
          Maori:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur.",
        },
        contentImg: require("./assets/SouthIsland/Cathedral_Square.jpg"),
        shape: "poly",
        coords: [
          508, 625, 552, 578, 614, 547, 628, 525, 629, 544, 654, 541, 671, 547,
          675, 530, 686, 543, 698, 530, 683, 512, 660, 496, 653, 468, 670, 442,
          712, 418, 742, 348, 756, 338, 780, 303, 785, 277, 769, 269, 741, 286,
          730, 314, 712, 316, 700, 348, 683, 346, 659, 304, 584, 372, 553, 415,
          531, 416, 513, 425, 495, 445, 455, 477, 397, 510, 379, 532, 355, 560,
          336, 607, 334, 637, 355, 660, 375, 670, 393, 707, 416, 702, 422, 714,
          454, 695, 471, 699, 500, 698, 502, 662,
        ],
      },
      {
        isHorizontal: false,
        title: {
          English: "Otago",
          Maori: "Ōtākou",
        },
        description: {
          English:
            'The name "Otago" is the local southern Māori dialect pronunciation of "Ōtākou", the name of the Māori village near the entrance to Otago Harbour.The exact meaning of the term is disputed, with common translations being "isolated village" and "place of red earth", the latter referring to the reddish-ochre clay which is common in the area around Dunedin. "Otago" is also the old name of the European settlement on the harbour, established by the Weller Brothers in 1831, which lies close to Otakou. The upper harbour later became the focus of the Otago Association, an offshoot of the Free Church of Scotland, notable for its adoption of the principle that ordinary people, not the landowner, should choose the ministers.',
          Maori:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur.",
        },
        contentImg: require("./assets/SouthIsland/Otago.jpg"),
        shape: "poly",
        coords: [
          348, 564, 347, 585, 334, 608, 333, 642, 363, 664, 373, 669, 395, 708,
          421, 701, 463, 697, 499, 699, 480, 728, 471, 769, 450, 801, 458, 812,
          462, 826, 419, 848, 407, 870, 391, 885, 373, 903, 367, 922, 351, 925,
          335, 938, 322, 940, 313, 905, 311, 887, 310, 858, 294, 817, 308, 772,
          298, 755, 286, 770, 271, 777, 254, 756, 225, 768, 218, 749, 214, 727,
          204, 714, 205, 682, 211, 654, 228, 652, 264, 630, 285, 598, 328, 586,
        ],
      },
      {
        isHorizontal: false,
        title: {
          English: "Southland",
          Maori: "Murihiku",
        },
        description: {
          English:
            'Southland (Māori: Murihiku, "the last joint of the tail") is New Zealand\'s southernmost region. It consists mainly of the southwestern portion of the South Island and Stewart Island/Rakiura. It includes Southland District, Gore District and the city of Invercargill. Murihiku Southland is bordered by the culturally similar Otago to the north and east, and the West Coast in the extreme northwest. The region covers over 3.1 million hectares and spans over 3,400 km of coast. As of June 2022, Southland has a population of 102,400, making it the eleventh-most-populous New Zealand region, and the second-most sparsely populated.',
          Maori:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur.",
        },
        contentImg: require("./assets/SouthIsland/Southland.jpg"),
        shape: "poly",
        coords: [
          188, 626, 215, 629, 216, 647, 204, 678, 207, 698, 202, 714, 214, 729,
          212, 748, 224, 767, 253, 759, 275, 780, 293, 760, 307, 777, 292, 816,
          294, 829, 306, 852, 310, 869, 310, 886, 309, 896, 314, 910, 319, 922,
          313, 943, 291, 942, 265, 933, 236, 938, 232, 920, 212, 909, 179, 910,
          160, 882, 145, 887, 130, 899, 72, 894, 42, 854, 45, 830, 94, 741, 112,
          709, 130, 691, 153, 668, 174, 636,
        ],
      },
      {
        isHorizontal: false,
        title: {
          English: "Southland",
          Maori: "Murihiku",
        },
        description: {
          English:
            'Southland (Māori: Murihiku, "the last joint of the tail") is New Zealand\'s southernmost region. It consists mainly of the southwestern portion of the South Island and Stewart Island/Rakiura. It includes Southland District, Gore District and the city of Invercargill. Murihiku Southland is bordered by the culturally similar Otago to the north and east, and the West Coast in the extreme northwest. The region covers over 3.1 million hectares and spans over 3,400 km of coast. As of June 2022, Southland has a population of 102,400, making it the eleventh-most-populous New Zealand region, and the second-most sparsely populated.',
          Maori:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at mauris ornare, vehicula enim et, sagittis orci. Duis vehicula, urna malesuada semper tincidunt, sem lacus porttitor leo, eget facilisis magna erat non tellus. Fusce dignissim euismod interdum. Phasellus euismod, diam a varius condimentum, quam nulla laoreet lectus, varius tempus sem ligula at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vitae sem dignissim gravida. In efficitur.",
        },
        contentImg: require("./assets/SouthIsland/Southland.jpg"),
        shape: "poly",
        coords: [
          187, 955, 202, 959, 215, 980, 205, 983, 213, 993, 224, 993, 229, 1001,
          223, 1011, 210, 1014, 193, 1025, 180, 1022, 166, 1040, 160, 1036, 172,
          1018, 181, 999, 186, 988, 180, 969,
        ],
      },
    ],
  },
];

export default data;
