type BracketType =
  | "Single Elimination"
  | "Double Elimination"
  | "Round Robin"
  | "Group Stage";
type TournamentStatusType = "Active" | "Upcoming" | "Past";
type BracketStatusType = "Editing" | "Running";
type IpponType = "Men" | "Kote" | "Do" | "Tsuki" | "Hantei" | "Hansoku";

type Player = {
  name: string;
  id?: number;
};

type Slot = {
  color?: "Red" | "White";
  score?: IpponType;
  isWinner?: boolean;
  player: Player;
  sequence: number;
  id: number | string;
};

type Bracket = {
  bracketName: string;
  bracketType: BracketType;
  status: BracketStatusType;
  slots: Slot[];
  // seed: Match[]
  // players: Player[]
  // winner: Player
  bracketCode: string;
};

type Tournament = {
  tournamentName: string;
  brackets: Bracket[];
  status: TournamentStatusType;
};

const dummyTournamentData: Tournament[] = [
  {
    tournamentName: "HSSK Taikai",
    brackets: [
      {
        slots: [
          {
            id: "66e3b1ea7e5a767d007baf8f",
            player: {
              name: "Mcneil Robinson",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ea84a5316216856f12",
            player: {
              name: "Lily Richmond",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ea21dd5af95f462286",
            player: {
              name: "Sally Kirby",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ea63e517d87ce57b71",
            player: {
              name: "Natalie Gonzales",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1ea41a23b0e1dc59eb7",
        bracketName: "Youth",
        bracketType: "Round Robin",
      },
      {
        slots: [
          {
            id: "66e3b1eaf6446b2434e29ff3",
            player: {
              name: "Peggy Brock",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ea2d121f32dcb98a71",
            player: {
              name: "Marina Velasquez",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ea5926352db271c9b8",
            player: {
              name: "Stone Serrano",
            },
            sequence: 3,
          },
          {
            id: "66e3b1eaca823f42bcfb3d5a",
            player: {
              name: "Althea Patel",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1eae63b9d1aef60a87b",
        bracketName: "Youth",
        bracketType: "Double Elimination",
      },
      {
        slots: [
          {
            id: "66e3b1eafd3a596bca63fc5c",
            player: {
              name: "Louella Wise",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ead6ea97b7bb85ad81",
            player: {
              name: "Wilkerson Silva",
            },
            sequence: 2,
          },
          {
            id: "66e3b1eae2b6ca8a0d0aeb3e",
            player: {
              name: "Henrietta Sosa",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ead59444de43d7e441",
            player: {
              name: "Kendra Moreno",
            },
            sequence: 4,
          },
        ],
        status: "Editing",
        bracketCode: "66e3b1ea3558a99923f96d4d",
        bracketName: "Dan 1-3",
        bracketType: "Round Robin",
      },
      {
        slots: [
          {
            id: "66e3b1ead2ba4732b8b409d2",
            player: {
              name: "Neva Blevins",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ea8e46c5353201940d",
            player: {
              name: "Cash Dixon",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ea3aae5a5c2980b7c9",
            player: {
              name: "Mathews Armstrong",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ea71d11831418b834f",
            player: {
              name: "Roseann Leon",
            },
            sequence: 4,
          },
        ],
        status: "Editing",
        bracketCode: "66e3b1ea36593b1f94b631fe",
        bracketName: "Youth",
        bracketType: "Double Elimination",
      },
      {
        slots: [
          {
            id: "66e3b1ea5090c431e631d81d",
            player: {
              name: "Cook Donovan",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ea92618d9efdf8e697",
            player: {
              name: "Faith Santos",
            },
            sequence: 2,
          },
          {
            id: "66e3b1eaca113532eda37654",
            player: {
              name: "Melton Fowler",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ea66f8d4012bf80348",
            player: {
              name: "Gonzalez Larsen",
            },
            sequence: 4,
          },
        ],
        status: "Editing",
        bracketCode: "66e3b1ea2eda014d844efb14",
        bracketName: "Dan 4 and up",
        bracketType: "Round Robin",
      },
      {
        slots: [
          {
            id: "66e3b1eaf40c73694f23bcba",
            player: {
              name: "Toni Curtis",
            },
            sequence: 1,
          },
          {
            id: "66e3b1eac26b813c9f77b79b",
            player: {
              name: "Brandie Contreras",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ea11032c0afea93f48",
            player: {
              name: "Turner Morin",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ea574055a9f45c3e8b",
            player: {
              name: "Janine Alexander",
            },
            sequence: 4,
          },
        ],
        status: "Editing",
        bracketCode: "66e3b1ea1d0d1c54dbdefd74",
        bracketName: "Dan 4 and up",
        bracketType: "Single Elimination",
      },
      {
        slots: [
          {
            id: "66e3b1ea15abec316dad3a30",
            player: {
              name: "Casandra Glass",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ea0db148f9fd2898f6",
            player: {
              name: "Dolly Goff",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ea91eac1242b11d97b",
            player: {
              name: "Albert Boyd",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ea2d48fc62cb6ac41a",
            player: {
              name: "Deborah Hayden",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1eade4095c3771f5cc1",
        bracketName: "Adult Kyu",
        bracketType: "Group Stage",
      },
      {
        slots: [
          {
            id: "66e3b1ea9bc62c8aec4d799b",
            player: {
              name: "Potter Jennings",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ea5d2dc65b56fa7475",
            player: {
              name: "Webb Crane",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ea6a3378962c746995",
            player: {
              name: "Gwendolyn Washington",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ea05707efef8333379",
            player: {
              name: "Deanna Nichols",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1eaa2728843a4d98928",
        bracketName: "Dan 1-3",
        bracketType: "Group Stage",
      },
      {
        slots: [
          {
            id: "66e3b1eac1b8e307c05cca65",
            player: {
              name: "Davidson Lowery",
            },
            sequence: 1,
          },
          {
            id: "66e3b1eae77e966894fe04cd",
            player: {
              name: "Farley Baker",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ea8b7461749ebcdd5d",
            player: {
              name: "Tricia Mcmahon",
            },
            sequence: 3,
          },
          {
            id: "66e3b1eabec63ae2af4f589b",
            player: {
              name: "Rutledge Newman",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1ead6a38e782e7c8424",
        bracketName: "Youth",
        bracketType: "Group Stage",
      },
    ],
    status: "Active",
  },
  {
    tournamentName: "Sacramento Taikai",
    brackets: [
      {
        slots: [
          {
            id: "66e3b1edc185411ebaf1081a",
            player: {
              name: "Warner Weeks",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ed105cb55f0ccc2599",
            player: {
              name: "Veronica Rich",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ed803b860ad5e72b8e",
            player: {
              name: "Stout Flowers",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ed040085160717deba",
            player: {
              name: "Kathy Mays",
            },
            sequence: 4,
          },
        ],
        status: "Editing",
        bracketCode: "66e3b1eda3fda53eff977841",
        bracketName: "Youth",
        bracketType: "Group Stage",
      },
      {
        slots: [
          {
            id: "66e3b1ed2b2563247de6eb2f",
            player: {
              name: "Wilkerson Duffy",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ed6aec2a15ba88b826",
            player: {
              name: "Gutierrez Daniel",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ed8560cae7f13307dc",
            player: {
              name: "Claudette Reeves",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ede0d7f77a817cdccb",
            player: {
              name: "Cherry Preston",
            },
            sequence: 4,
          },
        ],
        status: "Editing",
        bracketCode: "66e3b1ed5ce62b41872c11af",
        bracketName: "Dan 4 and up",
        bracketType: "Round Robin",
      },
      {
        slots: [
          {
            id: "66e3b1ed4932a524ad199f76",
            player: {
              name: "Lolita Robles",
            },
            sequence: 1,
          },
          {
            id: "66e3b1edfdad236609fe0938",
            player: {
              name: "Raymond Gray",
            },
            sequence: 2,
          },
          {
            id: "66e3b1edc29d9b2e67d51d2a",
            player: {
              name: "Welch Charles",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ed5e889bca0c950adc",
            player: {
              name: "Norma Parsons",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1edd46c5209d5afc05c",
        bracketName: "Dan 4 and up",
        bracketType: "Double Elimination",
      },
      {
        slots: [
          {
            id: "66e3b1ed77684d2f585f6e38",
            player: {
              name: "Torres Merritt",
            },
            sequence: 1,
          },
          {
            id: "66e3b1edc57e834e9166af37",
            player: {
              name: "Celina Castro",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ed3dcd73f3d17fcf04",
            player: {
              name: "Hendrix Weaver",
            },
            sequence: 3,
          },
          {
            id: "66e3b1eda19053227e64d1fb",
            player: {
              name: "Barlow Humphrey",
            },
            sequence: 4,
          },
        ],
        status: "Editing",
        bracketCode: "66e3b1ed16a1ef8e39fa55d1",
        bracketName: "Youth",
        bracketType: "Group Stage",
      },
      {
        slots: [
          {
            id: "66e3b1ede018a05fa9211874",
            player: {
              name: "Milagros Gross",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ede0642b4615e8d578",
            player: {
              name: "Fulton Sears",
            },
            sequence: 2,
          },
          {
            id: "66e3b1edf165a2e2736634fc",
            player: {
              name: "Camille Fox",
            },
            sequence: 3,
          },
          {
            id: "66e3b1edeccc8860b28cd425",
            player: {
              name: "Lessie Berry",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1edc16b4b1ec7742bcd",
        bracketName: "Dan 1-3",
        bracketType: "Group Stage",
      },
      {
        slots: [
          {
            id: "66e3b1ed5b6ce971f858e7f3",
            player: {
              name: "Hopper George",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ed3edd9034050c5ab4",
            player: {
              name: "Beryl Reynolds",
            },
            sequence: 2,
          },
          {
            id: "66e3b1edc0a81abd24260482",
            player: {
              name: "Annabelle Gordon",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ed4579152a1080770e",
            player: {
              name: "Laura Weber",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1eda718d706e3be95eb",
        bracketName: "Adult Kyu",
        bracketType: "Group Stage",
      },
      {
        slots: [
          {
            id: "66e3b1ed60b4368dff009bb3",
            player: {
              name: "Opal Hooper",
            },
            sequence: 1,
          },
          {
            id: "66e3b1edca5236ac11415ab8",
            player: {
              name: "Ferguson Riley",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ed7e11c1289dad7b74",
            player: {
              name: "Mcknight Medina",
            },
            sequence: 3,
          },
          {
            id: "66e3b1edff7cbe4220192f9f",
            player: {
              name: "Bauer May",
            },
            sequence: 4,
          },
        ],
        status: "Editing",
        bracketCode: "66e3b1edce9aa7666b5e2097",
        bracketName: "Dan 1-3",
        bracketType: "Double Elimination",
      },
      {
        slots: [
          {
            id: "66e3b1ede0872f270960a029",
            player: {
              name: "Merritt Kline",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ed8e7715f0eede467b",
            player: {
              name: "Estrada Carney",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ed6b78e91016410a70",
            player: {
              name: "Mccullough Vasquez",
            },
            sequence: 3,
          },
          {
            id: "66e3b1edee82649f8f64cb86",
            player: {
              name: "Fannie Coleman",
            },
            sequence: 4,
          },
        ],
        status: "Editing",
        bracketCode: "66e3b1edcf39be058d572ffb",
        bracketName: "Adult Kyu",
        bracketType: "Round Robin",
      },
      {
        slots: [
          {
            id: "66e3b1edbfa4bb9ac552a214",
            player: {
              name: "Vilma Garrett",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ed83f6a1db88fd1dba",
            player: {
              name: "Perkins Hendrix",
            },
            sequence: 2,
          },
          {
            id: "66e3b1edad311e1f57c028da",
            player: {
              name: "Brewer Frye",
            },
            sequence: 3,
          },
          {
            id: "66e3b1edd4a6f634f8247688",
            player: {
              name: "Flora Avery",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1edc288bfa81f8f46e0",
        bracketName: "Dan 1-3",
        bracketType: "Double Elimination",
      },
    ],
    status: "Past",
  },
  {
    tournamentName: "San Jose",
    brackets: [
      {
        slots: [
          {
            id: "66e3b1ef879b62a8841804d9",
            player: {
              name: "Mitzi Cannon",
            },
            sequence: 1,
          },
          {
            id: "66e3b1efc0cd538ffd3540fa",
            player: {
              name: "Estrada Ryan",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ef8e01808525cb30b2",
            player: {
              name: "Deena Cabrera",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ef0caef5c55ba45024",
            player: {
              name: "Banks Blanchard",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1ef1d4d01ca39a25ca4",
        bracketName: "Adult Kyu",
        bracketType: "Group Stage",
      },
      {
        slots: [
          {
            id: "66e3b1efd8fd173951bd5a14",
            player: {
              name: "Clarissa Orr",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ef1ce1f854caceab04",
            player: {
              name: "Deleon Haney",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ef4d7f985e7ffe1ed3",
            player: {
              name: "Hart Medina",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ef14399ebd5a04d033",
            player: {
              name: "Geneva Ray",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1ef9b1265d09366c284",
        bracketName: "Adult Kyu",
        bracketType: "Single Elimination",
      },
      {
        slots: [
          {
            id: "66e3b1efe38a84f862599121",
            player: {
              name: "Maricela Cooper",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ef01e1ca76042a96f1",
            player: {
              name: "Latisha Gonzalez",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ef839cb3e0b7d90851",
            player: {
              name: "Gross Taylor",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ef91366bd018393350",
            player: {
              name: "Pugh Owen",
            },
            sequence: 4,
          },
        ],
        status: "Editing",
        bracketCode: "66e3b1ef11dd403ee4ca778a",
        bracketName: "Adult Kyu",
        bracketType: "Double Elimination",
      },
      {
        slots: [
          {
            id: "66e3b1ef1d16ecc2749ac3ab",
            player: {
              name: "Robbins Snider",
            },
            sequence: 1,
          },
          {
            id: "66e3b1efebf037f3eda0731e",
            player: {
              name: "Chelsea Craft",
            },
            sequence: 2,
          },
          {
            id: "66e3b1efffe69963dfc5220b",
            player: {
              name: "Margie Campos",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ef5ad9aa12772e0208",
            player: {
              name: "Hilda Thompson",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1ef426bd0741184bf95",
        bracketName: "Youth",
        bracketType: "Group Stage",
      },
      {
        slots: [
          {
            id: "66e3b1ef8f066d98cb558354",
            player: {
              name: "Alfreda George",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ef53e71d57baf93fc4",
            player: {
              name: "Torres Malone",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ef845ef0f79a3b883c",
            player: {
              name: "Jannie Best",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ef77012ea28d7c0efa",
            player: {
              name: "Maldonado Wong",
            },
            sequence: 4,
          },
        ],
        status: "Editing",
        bracketCode: "66e3b1ef5aece0a3631fd356",
        bracketName: "Dan 4 and up",
        bracketType: "Group Stage",
      },
      {
        slots: [
          {
            id: "66e3b1efee4871c4076d5ed0",
            player: {
              name: "Clements Aguirre",
            },
            sequence: 1,
          },
          {
            id: "66e3b1ef463c5fad6e82f3b0",
            player: {
              name: "Beatriz Hinton",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ef3820073fd4e71d6f",
            player: {
              name: "Ladonna Harper",
            },
            sequence: 3,
          },
          {
            id: "66e3b1ef7d789b8473f2362a",
            player: {
              name: "Deirdre Salinas",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1efd564d568687e32cc",
        bracketName: "Adult Kyu",
        bracketType: "Round Robin",
      },
      {
        slots: [
          {
            id: "66e3b1efef8dc90dc2f336b9",
            player: {
              name: "Russo Barr",
            },
            sequence: 1,
          },
          {
            id: "66e3b1efea3fcef556f3de07",
            player: {
              name: "Tamera Spencer",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ef4cbb7e78596159ac",
            player: {
              name: "Christa Mcconnell",
            },
            sequence: 3,
          },
          {
            id: "66e3b1efa1856d923c4a1f8b",
            player: {
              name: "Rosalinda Ferrell",
            },
            sequence: 4,
          },
        ],
        status: "Editing",
        bracketCode: "66e3b1ef6842de3102d21c72",
        bracketName: "Dan 4 and up",
        bracketType: "Double Elimination",
      },
      {
        slots: [
          {
            id: "66e3b1efbabdc9ac9883cf48",
            player: {
              name: "Dorsey Ramsey",
            },
            sequence: 1,
          },
          {
            id: "66e3b1efc7b94a76b68ea220",
            player: {
              name: "Queen Ramos",
            },
            sequence: 2,
          },
          {
            id: "66e3b1ef7a363055b0925ad4",
            player: {
              name: "Davidson Sanford",
            },
            sequence: 3,
          },
          {
            id: "66e3b1efe3d11fc755ae1bd8",
            player: {
              name: "Sheree Miller",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1ef89676a680108ecf3",
        bracketName: "Adult Kyu",
        bracketType: "Double Elimination",
      },
    ],
    status: "Past",
  },
  {
    tournamentName: "NCKF Championships",
    brackets: [
      {
        slots: [
          {
            id: "66e3b1f179cb66783904f132",
            player: {
              name: "Simmons Roberts",
            },
            sequence: 1,
          },
          {
            id: "66e3b1f1cef1ce8a5390d1cb",
            player: {
              name: "Talley Mayer",
            },
            sequence: 2,
          },
          {
            id: "66e3b1f179738571da13a774",
            player: {
              name: "Madge Santos",
            },
            sequence: 3,
          },
          {
            id: "66e3b1f1b81dfcc010ede7bc",
            player: {
              name: "Irwin Spencer",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1f1ecefd7196c195ee5",
        bracketName: "Dan 1-3",
        bracketType: "Round Robin",
      },
      {
        slots: [
          {
            id: "66e3b1f143917b6ff70d201c",
            player: {
              name: "Lottie Collins",
            },
            sequence: 1,
          },
          {
            id: "66e3b1f1f044506a93190141",
            player: {
              name: "Avila Woodard",
            },
            sequence: 2,
          },
          {
            id: "66e3b1f1d82dc326387b3e60",
            player: {
              name: "Shepherd Griffith",
            },
            sequence: 3,
          },
          {
            id: "66e3b1f19bdfecaecae37256",
            player: {
              name: "Good Campbell",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1f1a4b5fdb4980bd5c7",
        bracketName: "Youth",
        bracketType: "Round Robin",
      },
      {
        slots: [
          {
            id: "66e3b1f1768370a28c343400",
            player: {
              name: "Fernandez Hernandez",
            },
            sequence: 1,
          },
          {
            id: "66e3b1f135cbe94fd8aa4e19",
            player: {
              name: "Wendi Lawrence",
            },
            sequence: 2,
          },
          {
            id: "66e3b1f10b1b5f11f0ec0c8c",
            player: {
              name: "Kay Sullivan",
            },
            sequence: 3,
          },
          {
            id: "66e3b1f158a8c9da95c81548",
            player: {
              name: "Nichole Wilcox",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1f11149dfed8a6f80a2",
        bracketName: "Adult Kyu",
        bracketType: "Double Elimination",
      },
      {
        slots: [
          {
            id: "66e3b1f1f72f256848542f4e",
            player: {
              name: "Lila Huffman",
            },
            sequence: 1,
          },
          {
            id: "66e3b1f1108d1b9c9791ab8c",
            player: {
              name: "Burch Wise",
            },
            sequence: 2,
          },
          {
            id: "66e3b1f1d80e0f4e108ef4bd",
            player: {
              name: "Barrera Watts",
            },
            sequence: 3,
          },
          {
            id: "66e3b1f1ebc627d764b786b4",
            player: {
              name: "Garza Willis",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1f1c4fc6a187536c2f5",
        bracketName: "Dan 4 and up",
        bracketType: "Double Elimination",
      },
      {
        slots: [
          {
            id: "66e3b1f17a5db0b2aafaa353",
            player: {
              name: "Delores Hayden",
            },
            sequence: 1,
          },
          {
            id: "66e3b1f15060d535f04f143c",
            player: {
              name: "Mabel Parrish",
            },
            sequence: 2,
          },
          {
            id: "66e3b1f13f3ff064515fa639",
            player: {
              name: "Brandi Holden",
            },
            sequence: 3,
          },
          {
            id: "66e3b1f10630ca3ece0fd19b",
            player: {
              name: "Gertrude Harding",
            },
            sequence: 4,
          },
        ],
        status: "Editing",
        bracketCode: "66e3b1f17dbec614a9de718a",
        bracketName: "Dan 4 and up",
        bracketType: "Round Robin",
      },
      {
        slots: [
          {
            id: "66e3b1f1c7b2b29fd7285911",
            player: {
              name: "Noel Stevens",
            },
            sequence: 1,
          },
          {
            id: "66e3b1f19e5bc70c33769246",
            player: {
              name: "Simone Guerrero",
            },
            sequence: 2,
          },
          {
            id: "66e3b1f1d6736d174249efd7",
            player: {
              name: "Latonya Little",
            },
            sequence: 3,
          },
          {
            id: "66e3b1f1044bf2b17ad0a152",
            player: {
              name: "Kim Schultz",
            },
            sequence: 4,
          },
        ],
        status: "Editing",
        bracketCode: "66e3b1f1ee35f5a9ac251b21",
        bracketName: "Adult Kyu",
        bracketType: "Single Elimination",
      },
      {
        slots: [
          {
            id: "66e3b1f11045029a67a87e54",
            player: {
              name: "Katharine Winters",
            },
            sequence: 1,
          },
          {
            id: "66e3b1f1cec1cc6e6178d9ea",
            player: {
              name: "Garcia Delacruz",
            },
            sequence: 2,
          },
          {
            id: "66e3b1f1ae75bff30e1a0b45",
            player: {
              name: "Fitzgerald Shelton",
            },
            sequence: 3,
          },
          {
            id: "66e3b1f15d3b917fb6e0c084",
            player: {
              name: "Kerr Foster",
            },
            sequence: 4,
          },
        ],
        status: "Editing",
        bracketCode: "66e3b1f12e62a11a2e81d945",
        bracketName: "Youth",
        bracketType: "Double Elimination",
      },
      {
        slots: [
          {
            id: "66e3b1f1dcefdb08e23ef628",
            player: {
              name: "Rene Love",
            },
            sequence: 1,
          },
          {
            id: "66e3b1f1648e51482cbda722",
            player: {
              name: "Lakisha Trujillo",
            },
            sequence: 2,
          },
          {
            id: "66e3b1f1df63fc55b237c4ef",
            player: {
              name: "Taylor Snider",
            },
            sequence: 3,
          },
          {
            id: "66e3b1f16b1b93336bb64b2e",
            player: {
              name: "Leticia Patrick",
            },
            sequence: 4,
          },
        ],
        status: "Running",
        bracketCode: "66e3b1f16870ad1d8d8bba46",
        bracketName: "Adult Kyu",
        bracketType: "Double Elimination",
      },
    ],
    status: "Upcoming",
  },
];

export type {
  TournamentStatusType,
  BracketType,
  Player,
  Slot,
  Bracket,
  Tournament,
};
export { dummyTournamentData };
