var audio = ['./Audio/peza_koofta_velmik.mp3', './Audio/rizba_koofta_tegud.mp3', './Audio/peza_di_koofta_tegud.mp3', './Audio/koofta_barsa_velmik.mp3', './Audio/peza_rizba_velmik.mp3', './Audio/peza_koofta_di_velmik.mp3', './Audio/koofta_peza_di_tegud.mp3', './Audio/koofta_di_barsa_velmik.mp3', './Audio/rizba_koofta_di_velmik.mp3', './Audio/rizba_di_peza_velmik.mp3', './Audio/barsa_koofta_di_velmik.mp3', './Audio/koofta_rizba_di_velmik.mp3', './Audio/koofta_barsa_di_tegud.mp3', './Audio/koofta_rizba_di_tegud.mp3', './Audio/koofta_barsa_tegud.mp3', './Audio/koofta.mp3', './Audio/barsa_di_peza_tegud.mp3', './Audio/barsa_rizba_velmik.mp3', './Audio/peza_barsa_di_velmik.mp3', './Audio/rizba_peza_tegud.mp3', './Audio/barsa_peza_di_velmik.mp3', './Audio/peza_rizba_tegud.mp3', './Audio/barsa_peza_tegud.mp3', './Audio/ribza_peza_di_tegud.mp3', './Audio/rizba.mp3', './Audio/barsa_peza_velmik.mp3', './Audio/rizba_di_barsa_tegud.mp3', './Audio/koofta_di_rizba_velmik.mp3', './Audio/barsa_di_koofta_tegud.mp3', './Audio/koofta_peza_tegud.mp3', './Audio/peza_barsa_velmik.mp3', './Audio/koofta_peza_velmik.mp3', './Audio/koofta_rizba_velmik.mp3', './Audio/rizba_koofta_di_tegud.mp3', './Audio/rizba_peza_di_velmik.mp3', './Audio/rizba_barsa_di_tegud.mp3', './Audio/koofta_di_peza_velmik.mp3', './Audio/rizba_peza_velmik.mp3', './Audio/peza_di_rizba_tegud.mp3', './Audio/barsa.mp3', './Audio/peza_rizba_di_velmik.mp3', './Audio/peza.mp3', './Audio/peza_di_barsa_velmik.mp3', './Audio/rizba_barsa_velmik.mp3', './Audio/barsa_koofta_di_tegud.mp3', './Audio/koofta_rizba_tegud.mp3', './Audio/barsa_di_rizba_velmik.mp3', './Audio/rizba_di_koofta_tegud.mp3', './Audio/barsa_rizba_di_tegud.mp3', './Audio/barsa_rizba_tegud.mp3', './Audio/barsa_koofta_velmik.mp3', './Audio/rizba_barsa_tegud.mp3', './Audio/peza_koofta_di_tegud.mp3', './Audio/peza_barsa_tegud.mp3', './Audio/rizba_koofta_velmik.mp3', './Audio/koofta_di_barsa_tegud.mp3', './Audio/koofta_peza_di_velmik.mp3', './Audio/peza_di_rizba_velmik.mp3', './Audio/barsa_peza_di_tegud.mp3', './Audio/peza_koofta_tegud.mp3', './Audio/peza_di_koofta_velmik.mp3', './Audio/peza_barsa_di_tegud.mp3', './Audio/peza_rizba_di_tegud.mp3', './Audio/barsa_koofta_tegud.mp3', './Audio/rizba_di_koofta_velmik.mp3', './Audio/rizba_barsa_di_velmik.mp3', './Audio/koofta_barsa_di_velmik.mp3', './Audio/barsa_rizba_di_velmik.mp3', './Audio/Silence.mp3'];

var nouns = [
  {img: "chef.jpg", noun: "koofta", entity: "chef", audio: './Audio/koofta.mp3'},
  {img: "burglar.jpg", noun: "rizba", entity: "burglar", audio: './Audio/rizba.mp3'},
  {img: "clown.jpg", noun: "peza", entity: "clown", audio: './Audio/peza.mp3'},
  {img: "police.jpg", noun: "barsa", entity: "police", audio: './Audio/barsa.mp3'}
];

var nouns_testing = [
    {img: "police.jpg", noun: "barsa", entity: "police", audio: './Audio/barsa.mp3'}
]

var sentences_redundant_exp_comp = [
  {
    english_translit: "police burglar di kick",
    alien_lang: "barsa rizba di velmik",
    Img1: "police_kick_burglar",
    Img2 : "burglar_kick_police",
    Audio: "barsa_rizba_di_velmik",
    Alien: "alienPoint_orange"
  },
  {
    english_translit: "police clown di point",
    alien_lang: "barsa peza di tegud",
    Img1: "police_point_clown",
    Img2 : "clown_point_police",
    Audio: "barsa_peza_di_tegud",
    Alien: "alienPoint_orange"
  },
  {
    english_translit: "burglar chef di point",
    alien_lang: "rizba koofta di tegud",
    Img1: "burglar_point_chef",
    Img2 : "chef_point_burglar",
    Audio: "rizba_koofta_di_tegud",
    Alien: "alienPoint_orange"
  },
  {
    english_translit: "clown police di kick",
    alien_lang: "peza barsa di velmik",
    Img1: "clown_kick_police",
    Img2 : "police_kick_clown",
    Audio: "peza_barsa_di_velmik",
    Alien: "alienPoint_orange"
  },
  {
    english_translit: "clown burglar di point",
    alien_lang: "peza rizba di tegud",
    Img1: "clown_point_burglar",
    Img2 : "burglar_point_clown",
    Audio: "peza_rizba_di_tegud",
    Alien: "alienPoint_orange"
  },
  {
    english_translit: "chef clown di kick",
    alien_lang: "koofta peza di velmik",
    Img1: "chef_kick_clown",
    Img2 : "clown_kick_chef",
    Audio: "koofta_peza_di_velmik",
    Alien: "alienPoint_orange"
  },
  {
    english_translit: "police chef point",
    alien_lang: "barsa koofta tegud",
    Img1: "police_point_chef",
    Img2 : "chef_point_police",
    Audio: "barsa_koofta_tegud",
    Alien: "alienPoint"
  },
  {
    english_translit: "burglar police point",
    alien_lang: "rizba barsa tegud",
    Img1: "burglar_point_police",
    Img2 : "police_point_burglar",
    Audio: "rizba_barsa_tegud",
    Alien: "alienPoint"
  },
  {
    english_translit: "burglar chef kick",
    alien_lang: "rizba koofta velmik",
    Img1: "burglar_kick_chef",
    Img2 : "chef_kick_burglar",
    Audio: "rizba_koofta_velmik",
    Alien: "alienPoint"
  },
  {
    english_translit: "clown burglar kick",
    alien_lang: "peza rizba velmik",
    Img1: "clown_kick_burglar",
    Img2 : "burglar_kick_clown",
    Audio: "peza_rizba_velmik",
    Alien: "alienPoint"
  },
  {
    english_translit: "chef police point",
    alien_lang: "koofta barsa tegud",
    Img1: "chef_point_police",
    Img2 : "police_point_chef",
    Audio: "koofta_barsa_tegud",
    Alien: "alienPoint"
  },
  {
    english_translit: "chef clown kick",
    alien_lang: "koofta peza velmik",
    Img1: "chef_kick_clown",
    Img2 : "clown_kick_chef",
    Audio: "koofta_peza_velmik",
    Alien: "alienPoint"
  },
  {
    english_translit: "police clown di kick",
    alien_lang: "barsa peza di velmik",
    Img1: "police_kick_clown",
    Img2 : "clown_kick_police",
    Audio: "barsa_peza_di_velmik",
    Alien: "alienPoint_orange"
  },
  {
    english_translit: "burglar clown di kick",
    alien_lang: "rizba peza di velmik",
    Img1: "burglar_kick_clown",
    Img2 : "clown_kick_burglar",
    Audio: "rizba_peza_di_velmik",
    Alien: "alienPoint_orange"
  },
  {
    english_translit: "burglar police di point",
    alien_lang: "rizba barsa di tegud",
    Img1: "burglar_point_police",
    Img2 : "police_point_burglar",
    Audio: "rizba_barsa_di_tegud",
    Alien: "alienPoint_orange"
  },
  {
    english_translit: "clown police di point",
    alien_lang: "peza barsa di tegud",
    Img1: "clown_point_police",
    Img2 : "police_point_clown",
    Audio: "peza_barsa_di_tegud",
    Alien: "alienPoint_orange"
  },
  {
    english_translit: "chef police di kick",
    alien_lang: "koofta barsa di velmik",
    Img1: "chef_kick_police",
    Img2 : "police_kick_chef",
    Audio: "koofta_barsa_di_velmik",
    Alien: "alienPoint_orange"
  },
  {
    english_translit: "chef burglar di point",
    alien_lang: "koofta rizba di tegud",
    Img1: "chef_point_burglar",
    Img2 : "burglar_point_chef",
    Audio: "koofta_rizba_di_tegud",
    Alien: "alienPoint_orange"
  },
  {
    english_translit: "police chef kick",
    alien_lang: "barsa koofta velmik",
    Img1: "police_kick_chef",
    Img2 : "chef_kick_police",
    Audio: "barsa_koofta_velmik",
    Alien: "alienPoint"
  },
  {
    english_translit: "police burglar point",
    alien_lang: "barsa rizba tegud",
    Img1: "police_point_burglar",
    Img2 : "burglar_point_police",
    Audio: "barsa_rizba_tegud",
    Alien: "alienPoint"
  },
  {
    english_translit: "burglar chef point",
    alien_lang: "rizba koofta tegud",
    Img1: "burglar_point_chef",
    Img2 : "chef_point_burglar",
    Audio: "rizba_koofta_tegud",
    Alien: "alienPoint"
  },
  {
    english_translit: "clown chef point",
    alien_lang: "peza koofta tegud",
    Img1: "clown_point_chef",
    Img2 : "chef_point_clown",
    Audio: "peza_koofta_tegud",
    Alien: "alienPoint"
  },
  {
    english_translit: "chef clown point",
    alien_lang: "koofta peza tegud",
    Img1: "chef_point_clown",
    Img2 : "clown_point_chef",
    Audio: "koofta_peza_tegud",
    Alien: "alienPoint"
  },
  {
    english_translit: "clown police point",
    alien_lang: "peza barsa tegud",
    Img1: "clown_point_police",
    Img2 : "police_point_clown",
    Audio: "peza_barsa_tegud",
    Alien: "alienPoint"
  }
];

var sentences_redundant_production = [
    {
      english_translit: "police burglar di point",
      alien_lang: "barsa rizba di tegud",
      Img: "police_point_burglar",
      Audio: "barsa_rizba_di_tegud"
    },
    {
      english_translit: "police chef di kick",
      alien_lang: "barsa koofta di velmik",
      Img: "police_kick_chef",
      Audio: "barsa_koofta_di_velmik"
    },
    {
      english_translit: "police chef di point",
      alien_lang: "barsa koofta di tegud",
      Img: "police_point_chef",
      Audio: "barsa_koofta_di_tegud"
    },
    {
      english_translit: "clown burglar di kick",
      alien_lang: "peza rizba di velmik",
      Img: "clown_kick_burglar",
      Audio: "peza_rizba_di_velmik"
    },
    {
      english_translit: "clown chef di kick",
      alien_lang: "peza koofta di velmik",
      Img: "clown_kick_chef",
      Audio: "peza_koofta_di_velmik"
    },
    {
      english_translit: "clown chef di point",
      alien_lang: "peza koofta di tegud",
      Img: "clown_point_chef",
      Audio: "peza_koofta_di_tegud"
    },
    {
      english_translit: "burglar police di kick",
      alien_lang: "rizba barsa di velmik",
      Img: "burglar_kick_police",
      Audio: "rizba_barsa_di_velmik"
    },
    {
      english_translit: "burglar clown di point",
      alien_lang: "rizba peza di tegud",
      Img: "burglar_point_clown",
      Audio: "rizba_peza_di_tegud"
    },
    {
      english_translit: "burglar chef di kick",
      alien_lang: "rizba koofta di velmik",
      Img: "burglar_kick_chef",
      Audio: "rizba_koofta_di_velmik"
    },
    {
      english_translit: "chef police di point",
      alien_lang: "koofta barsa di tegud",
      Img: "chef_point_police",
      Audio: "koofta_barsa_di_tegud"
    },
    {
      english_translit: "chef clown di point",
      alien_lang: "koofta peza di tegud",
      Img: "chef_point_clown",
      Audio: "koofta_peza_di_tegud"
    },
    {
      english_translit: "chef burglar di kick",
      alien_lang: "koofta rizba di velmik",
      Img: "chef_kick_burglar",
      Audio: "koofta_rizba_di_velmik"
    },
    {
      english_translit: "police clown kick",
      alien_lang: "barsa peza velmik",
      Img: "police_kick_clown",
      Audio: "barsa_peza_velmik"
    },
    {
      english_translit: "police clown point",
      alien_lang: "barsa peza tegud",
      Img: "police_point_clown",
      Audio: "barsa_peza_tegud"
    },
    {
      english_translit: "police burglar kick",
      alien_lang: "barsa rizba velmik",
      Img: "police_kick_burglar",
      Audio: "barsa_rizba_velmik"
    },
    {
      english_translit: "clown police kick",
      alien_lang: "peza barsa velmik",
      Img: "clown_kick_police",
      Audio: "peza_barsa_velmik"
    },
    {
      english_translit: "clown burglar point",
      alien_lang: "peza rizba tegud",
      Img: "clown_point_burglar",
      Audio: "peza_rizba_tegud"
    },
    {
      english_translit: "clown chef kick",
      alien_lang: "peza koofta velmik",
      Img: "clown_kick_chef",
      Audio: "peza_koofta_velmik"
    },
    {
      english_translit: "burglar police kick",
      alien_lang: "rizba barsa velmik",
      Img: "burglar_kick_police",
      Audio: "rizba_barsa_velmik"
    },
    {
      english_translit: "burglar clown kick",
      alien_lang: "rizba peza velmik",
      Img: "burglar_kick_clown",
      Audio: "rizba_peza_velmik"
    },
    {
      english_translit: "burglar clown point",
      alien_lang: "rizba peza tegud",
      Img: "burglar_point_clown",
      Audio: "rizba_peza_tegud"
    },
    {
      english_translit: "chef police kick",
      alien_lang: "koofta barsa velmik",
      Img: "chef_kick_police",
      Audio: "koofta_barsa_velmik"
    },
    {
      english_translit: "chef burglar kick",
      alien_lang: "koofta rizba velmik",
      Img: "chef_kick_burglar",
      Audio: "koofta_rizba_velmik"
    },
    {
      english_translit: "chef burglar point",
      alien_lang: "koofta rizba tegud",
      Img: "chef_point_burglar",
      Audio: "koofta_rizba_tegud"
    }
  ];

var sentences_informative_exp_comp = [
  {
    alien_lang: "peza di barsa velmik",
    english_translit: "Police kick clown di",
    Alien: "alienPoint_orange",
    Img1: "police_kick_clown",
    Img2: "clown_kick_police",
    Audio: "peza_di_barsa_velmik"
  },
  {
    alien_lang: "koofta di barsa tegud",
    english_translit: "Police point chef di",
    Alien: "alienPoint_orange",
    Img1: "police_point_chef",
    Img2: "chef_point_police",
    Audio: "koofta_di_barsa_tegud"
  },
  {
    alien_lang: "barsa di rizba velmik",
    english_translit: "Burglar kick police di",
    Alien: "alienPoint_orange",
    Img1: "burglar_kick_police",
    Img2: "police_kick_burglar",
    Audio: "barsa_di_rizba_velmik"
  },
  {
    alien_lang: "barsa di peza tegud",
    english_translit: "Clown point police di",
    Alien: "alienPoint_orange",
    Img1: "clown_point_police",
    Img2: "police_point_clown",
    Audio: "barsa_di_peza_tegud"
  },
  {
    alien_lang: "koofta di peza velmik",
    english_translit: "Clown kick chef di",
    Alien: "alienPoint_orange",
    Img1: "clown_kick_chef",
    Img2: "chef_kick_clown",
    Audio: "koofta_di_peza_velmik"
  },
  {
    alien_lang: "rizba di koofta velmik",
    english_translit: "Chef point burglar di",
    Alien: "alienPoint_orange",
    Img1: "chef_point_burglar",
    Img2: "burglar_point_chef",
    Audio: "rizba_di_koofta_velmik"
  },
  {
    alien_lang: "koofta barsa velmik",
    english_translit: "Police kick chef",
    Alien: "alienPoint",
    Img1: "police_kick_chef",
    Img2: "chef_kick_police",
    Audio: "koofta_barsa_velmik"
  },
  {
    alien_lang: "koofta rizba tegud",
    english_translit: "Burglar point chef",
    Alien: "alienPoint",
    Img1: "burglar_point_chef",
    Img2: "chef_point_burglar",
    Audio: "koofta_rizba_tegud"
  },
  {
    alien_lang: "peza rizba velmik",
    english_translit: "Burglar kick clown",
    Alien: "alienPoint",
    Img1: "burglar_kick_clown",
    Img2: "clown_kick_burglar",
    Audio: "peza_rizba_velmik"
  },
  {
    alien_lang: "rizba peza tegud",
    english_translit: "Clown point burglar",
    Alien: "alienPoint",
    Img1: "clown_point_burglar",
    Img2: "burglar_point_clown",
    Audio: "rizba_peza_tegud"
  },
  {
    alien_lang: "rizba koofta tegud",
    english_translit: "Chef kick burglar",
    Alien: "alienPoint",
    Img1: "chef_kick_burglar",
    Img2: "burglar_kick_chef",
    Audio: "rizba_koofta_tegud"
  },
  {
    alien_lang: "barsa koofta velmik",
    english_translit: "Chef kick police",
    Alien: "alienPoint",
    Img1: "chef_kick_police",
    Img2: "police_kick_chef",
    Audio: "barsa_koofta_velmik"
  },
  {
    alien_lang: "barsa rizba di tegud",
    english_translit: "police burglar di point",
    Alien: "alienPoint_orange",
    Img1: "police_point_burglar",
    Img2: "burglar_point_police",
    Audio: "barsa_rizba_di_tegud"
  },
  {
    alien_lang: "rizba koofta di tegud",
    english_translit: "burglar chef di point",
    Alien: "alienPoint_orange",
    Img1: "burglar_point_chef",
    Img2: "chef_point_burglar",
    Audio: "rizba_koofta_di_tegud"
  },
  {
    alien_lang: "rizba barsa di velmik",
    english_translit: "burglar police di kick",
    Alien: "alienPoint_orange",
    Img1: "burglar_kick_police",
    Img2: "police_kick_burglar",
    Audio: "rizba_barsa_di_velmik"
  },
  {
    alien_lang: "peza koofta di tegud",
    english_translit: "clown chef di point",
    Alien: "alienPoint_orange",
    Img1: "clown_point_chef",
    Img2: "chef_point_clown",
    Audio: "peza_koofta_di_tegud"
  },
  {
    alien_lang: "koofta rizba di velmik",
    english_translit: "chef burglar di kick",
    Alien: "alienPoint_orange",
    Img1: "chef_kick_burglar",
    Img2: "burglar_kick_chef",
    Audio: "koofta_rizba_di_velmik"
  },
  {
    alien_lang: "koofta barsa di velmik",
    english_translit: "chef police di kick",
    Alien: "alienPoint_orange",
    Img1: "chef_kick_police",
    Img2: "police_kick_chef",
    Audio: "koofta_barsa_di_velmik"
  },
  {
    alien_lang: "barsa peza tegud",
    english_translit: "police clown point",
    Alien: "alienPoint",
    Img1: "police_point_clown",
    Img2: "clown_point_police",
    Audio: "barsa_peza_tegud"
  },
  {
    alien_lang: "barsa rizba velmik",
    english_translit: "police burglar kick",
    Alien: "alienPoint",
    Img1: "police_kick_burglar",
    Img2: "burglar_kick_police",
    Audio: "barsa_rizba_velmik"
  },
  {
    alien_lang: "rizba barsa tegud",
    english_translit: "burglar police point",
    Alien: "alienPoint",
    Img1: "burglar_point_police",
    Img2: "police_point_burglar",
    Audio: "rizba_barsa_tegud"
  },
  {
    alien_lang: "peza koofta velmik",
    english_translit: "clown chef kick",
    Alien: "alienPoint",
    Img1: "clown_kick_chef",
    Img2: "chef_kick_clown",
    Audio: "peza_koofta_velmik"
  },
  {
    alien_lang: "peza barsa velmik",
    english_translit: "clown police kick",
    Alien: "alienPoint",
    Img1: "clown_kick_police",
    Img2: "police_kick_clown",
    Audio: "peza_barsa_velmik"
  },
  {
    alien_lang: "koofta rizba tegud",
    english_translit: "chef burglar point",
    Alien: "alienPoint",
    Img1: "chef_point_burglar",
    Img2: "burglar_point_chef",
    Audio: "koofta_rizba_tegud"
  }
];


var sentences_informative_production = [
  {
    alien_lang: "rizba di peza velmik",
    english_translit: "Clown kick burglar di",
    Alien: "alienPoint_orange",
    Img: "clown_kick_burglar",
    Audio: "rizba_di_peza_velmik"
  },
  {
    alien_lang: "peza di koofta velmik",
    english_translit: "Chef kick clown di",
    Alien: "alienPoint_orange",
    Img: "chef_kick_clown",
    Audio: "peza_di_koofta_velmik"
  },
  {
    alien_lang: "barsa di koofta tegud",
    english_translit: "Chef point police di",
    Alien: "alienPoint_orange",
    Img: "chef_point_police",
    Audio: "barsa_di_koofta_tegud"
  },
  {
    alien_lang: "rizba di barsa tegud",
    english_translit: "Police kick burglar di",
    Alien: "alienPoint_orange",
    Img: "police_kick_burglar",
    Audio: "rizba_di_barsa_tegud"
  },
  {
    alien_lang: "koofta di rizba velmik",
    english_translit: "Burglar kick chef di",
    Alien: "alienPoint_orange",
    Img: "burglar_kick_chef",
    Audio: "koofta_di_rizba_velmik"
  },
  {
    alien_lang: "peza di rizba tegud",
    english_translit: "Burglar point clown di",
    Alien: "alienPoint_orange",
    Img: "burglar_point_clown",
    Audio: "peza_di_rizba_tegud"
  },
  {
    alien_lang: "barsa peza velmik",
    english_translit: "Clown kick police",
    Alien: "alienPoint",
    Img: "clown_kick_police",
    Audio: "barsa_peza_velmik"
  },
  {
    alien_lang: "koofta peza tegud",
    english_translit: "Clown point chef",
    Alien: "alienPoint",
    Img: "clown_point_chef",
    Audio: "koofta_peza_tegud"
  },
  {
    alien_lang: "peza koofta tegud",
    english_translit: "Chef point clown",
    Alien: "alienPoint",
    Img: "chef_point_clown",
    Audio: "peza_koofta_tegud"
  },
  {
    alien_lang: "rizba barsa velmik",
    english_translit: "Police point burglar",
    Alien: "alienPoint",
    Img: "police_point_burglar",
    Audio: "rizba_barsa_velmik"
  },
  {
    alien_lang: "peza barsa tegud",
    english_translit: "Police point clown",
    Alien: "alienPoint",
    Img: "police_point_clown",
    Audio: "peza_barsa_tegud"
  },
  {
    alien_lang: "barsa rizba tegud",
    english_translit: "Burglar point police",
    Alien: "alienPoint",
    Img: "burglar_point_police",
    Audio: "barsa_rizba_tegud"
  },
  {
    alien_lang: "peza barsa di tegud",
    english_translit: "clown police di point",
    Alien: "alienPoint_orange",
    Img: "clown_point_police",
    Audio: "peza_barsa_di_tegud"
  },
  {
    alien_lang: "peza rizba di velmik",
    english_translit: "clown burglar di kick",
    Alien: "alienPoint_orange",
    Img: "clown_point_burglar",
    Audio: "peza_rizba_di_velmik"
  },
  {
    alien_lang: "koofta peza di tegud",
    english_translit: "chef clown di point",
    Alien: "alienPoint_orange",
    Img: "chef_point_clown",
    Audio: "koofta_peza_di_tegud"
  },
  {
    alien_lang: "barsa peza di velmik",
    english_translit: "police clown di kick",
    Alien: "alienPoint_orange",
    Img: "police_kick_clown",
    Audio: "barsa_peza_di_velmik"
  },
  {
    alien_lang: "barsa koofta di tegud",
    english_translit: "police chef di point",
    Alien: "alienPoint_orange",
    Img: "police_point_chef",
    Audio: "barsa_koofta_di_tegud"
  },
  {
    alien_lang: "rizba peza di velmik",
    english_translit: "burglar clown di kick",
    Alien: "alienPoint_orange",
    Img: "burglar_kick_clown",
    Audio: "rizba_peza_di_velmik"
  },
  {
    alien_lang: "peza rizba tegud",
    english_translit: "clown burglar point",
    Alien: "alienPoint",
    Img: "clown_point_burglar",
    Audio: "peza_rizba_tegud"
  },
  {
    alien_lang: "koofta barsa tegud",
    english_translit: "chef police point",
    Alien: "alienPoint",
    Img: "chef_point_police",
    Audio: "koofta_barsa_tegud"
  },
  {
    alien_lang: "koofta peza velmik",
    english_translit: "chef clown kick",
    Alien: "alienPoint",
    Img: "chef_kick_clown",
    Audio: "koofta_peza_velmik"
  },
  {
    alien_lang: "barsa koofta velmik",
    english_translit: "police chef kick",
    Alien: "alienPoint",
    Img: "police_kick_chef",
    Audio: "barsa_koofta_velmik"
  },
  {
    alien_lang: "rizba koofta velmik",
    english_translit: "burglar chef kick",
    Alien: "alienPoint",
    Img: "burglar_kick_chef",
    Audio: "rizba_koofta_velmik"
  },
  {
    alien_lang: "rizba peza tegud",
    english_translit: "burglar clown point",
    Alien: "alienPoint",
    Img: "burglar_point_clown",
    Audio: "rizba_peza_tegud"
  }
];
var aq_10_questions = [
  {prompt: "I often notice small sounds when others do not.", name: "1_agree"},
  {prompt: "I usually concentrate more on the whole picture, rather than the small details.", name: "2_disagree"},
  {prompt: "I find it easy to do more than one thing at once.", name: "3_disagree"},
  {prompt: "If there was an interruption, I can switch back to what I was doing very quickly.", name: "4_disagree"},
  {prompt: "I find it easy to 'read between the lines' when someone is talking to me.", name: "5_disagree"},
  {prompt: "I know how to tell if someone listening to me is getting bored.", name: "6_disagree"},
  {prompt: "When I'm reading a story I find it difficult to work out the characters' intentions.", name: "7_agree"},
  {prompt: "I like to collect information about categories of things (e.g. types of car, types of bird, types of train, types of plant etc).", name: "8_agree"},
  {prompt: "I find it easy to work out what someone is thinking or feeling just by looking at their face.", name: "9_disagree"},
  {prompt: "I find it difficult to work out people's intentions.", name: "10_agree"}
];

var language_questions_multi_choice = [
    {prompt: "Have you ever been diagnosed with an Autism Spectrum Disorder (including, as it was previously known, Asperger's Syndrome)?", name: "ASD_diagnosis"},
    {prompt: "Do you identify as having an Autism Spectrum Disorder (including, as it was previously known, Asperger's Syndrome)?", name: "ASD_identification"},
    {prompt: "Do you have a close relative (parent, child or sibling) who has been diagnosed with/identifies as having an Autism Spectrum Disorder (including, as it was previously known, Asperger's Syndrome)?", name: "ASD_family_history"},
];

var language_questions = [
  {prompt: "Did you use a strategy for learning the alien language?", name: "strat"},
  {prompt: "What is your first language(s)? (The language(s) you learned from birth)", name: "native_lang"},
  {prompt: "Do you speak any other languages?", name: "language_experience"},
  {prompt: "What is your age?", name: "age"},
  {prompt: "What is your gender?", name: "gender"},
  {prompt: "How motivated and focused were you to complete the experiment?", name: "motivation"},
  {prompt: "Would you use your data if you were the researcher? (Don't worry, you will still be paid!)", name: "data_usage"}

];

var pilot_question_set = [
  {prompt: "Did everything in the experiment work well for you?", name: "function"},
  {prompt: "What do you think the experiment was aiming to find out?", name: "goal"},
  {prompt: "Did the experiment visually load correctly?", name: "visual"},
  {prompt: "Were all the instructions in the experiment clear? Could anything have been more clear?", name: "instructions_clarity"},
  {prompt: "How long did the experiment take you, approximately?", name:"time"},
  {prompt: "How hard did you find the experiment?", name: "difficulty"},
  {prompt: "Do you have any other comments about the experiment and your experience?", name:"free_response"}
]

var likert_scale = ["Strongly Disagree", "Slightly Disagree", "Slightly Agree", "Definitely Agree"];
