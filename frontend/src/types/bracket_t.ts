type BracketType =
  | "Single Elimination"
  | "Double Elimination"
  | "Round Robin"
  | "Group Stage";
type TournamentStatusType = "Active" | "Upcoming" | "Past";
type BracketStatusType = "Editing" | "In Progress" | "Completed";
type IpponType = "Men" | "Kote" | "Do" | "Tsuki" | "Hantei" | "Hansoku" | "";
type RoundType =
  | `Round ${number}`
  | "Quarter-Finals"
  | "Semi-Finals"
  | "Finals";
type PlayerColorType = "Red" | "White";

type Player = {
  name: string;
  id: number;
};

type Slot = {
  color?: PlayerColorType;
  score?: IpponType;
  isWinner?: boolean;

  player: Player;
  sequence: number;
  id: number | string;
};

type Match = {
  id?: string;
  player1: Slot | null;
  player2: Slot | null;
  player1Score: IpponType[];
  player2Score: IpponType[];
  winner: Slot | null;
  submitted: boolean;
};

type MatchResult = {
  scores1: IpponType[];
  scores2: IpponType[];
  winnerId: string;
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
  progress: number;
};

type Tournament = {
  id: number;
  tournamentName: string;
  location: string;
  // brackets: Bracket[];
  status: TournamentStatusType;
};

// const dummyTournamentData: Tournament[] = [
//   {
//     tournamentName: "Sacramento Taikai",
//     brackets: [
//       {
//         bracketName: "",
//         bracketType: "Single Elimination",
//         bracketCode: "66e4acc8d4d9496462652f09",
//         slots: [
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Dan 1-3",
//         bracketType: "Group Stage",
//         bracketCode: "66e4acc8ed4f7bda852ae925",
//         slots: [
//           {
//             player: {
//               name: "Mitchell Alford",
//             },
//             sequence: 1,
//             id: "66e4acc8a973275fc83e05d0",
//           },
//           {
//             player: {
//               name: "Diaz Turner",
//             },
//             sequence: 2,
//             id: "66e4acc8cd3ea7814e70d804",
//           },
//           {
//             player: {
//               name: "Garrett Ayala",
//             },
//             sequence: 3,
//             id: "66e4acc86a2bd60f00a46088",
//           },
//           {
//             player: {
//               name: "Tiffany Benjamin",
//             },
//             sequence: 4,
//             id: "66e4acc843d8f3879a6e5d74",
//           },
//           {
//             player: {
//               name: "Angie Mcdowell",
//             },
//             sequence: 5,
//             id: "66e4acc83294d90b9263392d",
//           },
//           {
//             player: {
//               name: "Guzman Spence",
//             },
//             sequence: 6,
//             id: "66e4acc8608a2257b2392ddb",
//           },
//         ],
//         progress: 100,
//         status: "Completed",
//       },
//       {
//         bracketName: "Youth",
//         bracketType: "Double Elimination",
//         bracketCode: "66e4acc816ca500504d142ef",
//         slots: [
//           {
//             player: {
//               name: "Freda Chang",
//             },
//             sequence: 1,
//             id: "66e4acc822310db916f1b4e1",
//           },
//           {
//             player: {
//               name: "Sylvia Wilkins",
//             },
//             sequence: 2,
//             id: "66e4acc8f489693f875e50d5",
//           },
//           {
//             player: {
//               name: "Stacy Pope",
//             },
//             sequence: 3,
//             id: "66e4acc820e2a249e5dd474b",
//           },
//           {
//             player: {
//               name: "Sara Sanders",
//             },
//             sequence: 4,
//             id: "66e4acc85064682e51a272f7",
//           },
//           {
//             player: {
//               name: "Merrill Hensley",
//             },
//             sequence: 5,
//             id: "66e4acc84305c5bd10461597",
//           },
//           {
//             player: {
//               name: "Juanita Franklin",
//             },
//             sequence: 6,
//             id: "66e4acc8641692db16253399",
//           },
//           {
//             player: {
//               name: "Myrtle Bishop",
//             },
//             sequence: 7,
//             id: "66e4acc800da3d02357ecf53",
//           },
//           {
//             player: {
//               name: "Mckinney Kirk",
//             },
//             sequence: 8,
//             id: "66e4acc8c1281c294a4e98cc",
//           },
//         ],
//         progress: 100,
//         status: "Completed",
//       },
//       {
//         bracketName: "Youth",
//         bracketType: "Single Elimination",
//         bracketCode: "66e4acc8b709375da43d1eb4",
//         slots: [
//           {
//             player: {
//               name: "Irene Massey",
//             },
//             sequence: 1,
//             id: "66e4acc8793a1e4155d78777",
//           },
//           {
//             player: {
//               name: "Mathews Moreno",
//             },
//             sequence: 2,
//             id: "66e4acc8ff4612c96d8b4fd9",
//           },
//           {
//             player: {
//               name: "Nellie Morrow",
//             },
//             sequence: 3,
//             id: "66e4acc81d25ae6931ba8d18",
//           },
//           {
//             player: {
//               name: "Leon Palmer",
//             },
//             sequence: 4,
//             id: "66e4acc8eab5e57984e1fdb5",
//           },
//           {
//             player: {
//               name: "Rachelle Davis",
//             },
//             sequence: 5,
//             id: "66e4acc8f7b9b27a1d1c7122",
//           },
//           {
//             player: {
//               name: "Elisabeth Berger",
//             },
//             sequence: 6,
//             id: "66e4acc8e2aceacdcb91e982",
//           },
//           {
//             player: {
//               name: "Gladys Vance",
//             },
//             sequence: 7,
//             id: "66e4acc8a50a69b282c5570e",
//           },
//           {
//             player: {
//               name: "Roberts Campbell",
//             },
//             sequence: 8,
//             id: "66e4acc808447a653ddbd110",
//           },
//           {
//             player: {
//               name: "Rebekah Valentine",
//             },
//             sequence: 9,
//             id: "66e4acc8e0860e44e3f058d5",
//           },
//         ],
//         progress: 100,
//         status: "Completed",
//       },
//       {
//         bracketName: "Youth",
//         bracketType: "Double Elimination",
//         bracketCode: "66e4acc88ea7e5b5e0cab58f",
//         slots: [
//           {
//             player: {
//               name: "Brock Wallace",
//             },
//             sequence: 1,
//             id: "66e4acc88b83ceaab4a5c6f9",
//           },
//           {
//             player: {
//               name: "Katy Velez",
//             },
//             sequence: 2,
//             id: "66e4acc8acd5087fcb966746",
//           },
//           {
//             player: {
//               name: "Garrison Wilder",
//             },
//             sequence: 3,
//             id: "66e4acc8ca9817dceef54a1d",
//           },
//           {
//             player: {
//               name: "Lea Harding",
//             },
//             sequence: 4,
//             id: "66e4acc86c2b3b4687c1b337",
//           },
//           {
//             player: {
//               name: "Odessa Mercer",
//             },
//             sequence: 5,
//             id: "66e4acc82e7d219a4a48f9d2",
//           },
//           {
//             player: {
//               name: "Townsend Marks",
//             },
//             sequence: 6,
//             id: "66e4acc8777c5742344b6755",
//           },
//           {
//             player: {
//               name: "Barlow Reeves",
//             },
//             sequence: 7,
//             id: "66e4acc89bdec3eb315be9b7",
//           },
//           {
//             player: {
//               name: "Ronda Payne",
//             },
//             sequence: 8,
//             id: "66e4acc8a4032e793df5e5f3",
//           },
//           {
//             player: {
//               name: "Fernandez Griffin",
//             },
//             sequence: 9,
//             id: "66e4acc83c1edb8c17da8282",
//           },
//           {
//             player: {
//               name: "Audrey Peck",
//             },
//             sequence: 10,
//             id: "66e4acc8d2a43476352ad4e8",
//           },
//           {
//             player: {
//               name: "Greta Chapman",
//             },
//             sequence: 11,
//             id: "66e4acc8d95394b3fecba5ec",
//           },
//           {
//             player: {
//               name: "Booth Valdez",
//             },
//             sequence: 12,
//             id: "66e4acc85217a1922b3ef3ce",
//           },
//           {
//             player: {
//               name: "Lopez Clarke",
//             },
//             sequence: 13,
//             id: "66e4acc8f6e6ad8caff07354",
//           },
//           {
//             player: {
//               name: "Kellie Fields",
//             },
//             sequence: 14,
//             id: "66e4acc87deee0404073bc8f",
//           },
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Youth",
//         bracketType: "Double Elimination",
//         bracketCode: "66e4acc8937672788e84f0fb",
//         slots: [
//           {
//             player: {
//               name: "Fitzpatrick Petersen",
//             },
//             sequence: 1,
//             id: "66e4acc86247c0825d38b73e",
//           },
//           {
//             player: {
//               name: "Dana David",
//             },
//             sequence: 2,
//             id: "66e4acc81c69985c03fdef6f",
//           },
//           {
//             player: {
//               name: "Delaney Chambers",
//             },
//             sequence: 3,
//             id: "66e4acc83a0cf59c57e81bd6",
//           },
//           {
//             player: {
//               name: "Mejia Merrill",
//             },
//             sequence: 4,
//             id: "66e4acc8e40baa5e62741ae5",
//           },
//           {
//             player: {
//               name: "Billie Richardson",
//             },
//             sequence: 5,
//             id: "66e4acc8744d8d1ee3bfb4f6",
//           },
//           {
//             player: {
//               name: "Kaufman Hall",
//             },
//             sequence: 6,
//             id: "66e4acc8c55868c8aec26175",
//           },
//           {
//             player: {
//               name: "Abigail Hull",
//             },
//             sequence: 7,
//             id: "66e4acc846ecce0adee3537c",
//           },
//           {
//             player: {
//               name: "Jaime Marshall",
//             },
//             sequence: 8,
//             id: "66e4acc81bb174351f5af948",
//           },
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Dan 4 and up",
//         bracketType: "Group Stage",
//         bracketCode: "66e4acc850fb751130cda32a",
//         slots: [
//           {
//             player: {
//               name: "Cooley Bartlett",
//             },
//             sequence: 1,
//             id: "66e4acc81bd66967725673eb",
//           },
//           {
//             player: {
//               name: "Cook Woodward",
//             },
//             sequence: 2,
//             id: "66e4acc81c90655f02ccdc29",
//           },
//           {
//             player: {
//               name: "Henderson Cannon",
//             },
//             sequence: 3,
//             id: "66e4acc8d2a235ffa7eff5d0",
//           },
//           {
//             player: {
//               name: "Kay Newton",
//             },
//             sequence: 4,
//             id: "66e4acc84801c00875da70b2",
//           },
//           {
//             player: {
//               name: "Gail Suarez",
//             },
//             sequence: 5,
//             id: "66e4acc86281822624477a26",
//           },
//           {
//             player: {
//               name: "Tracey Spencer",
//             },
//             sequence: 6,
//             id: "66e4acc84676824e6c023696",
//           },
//           {
//             player: {
//               name: "Henson Gay",
//             },
//             sequence: 7,
//             id: "66e4acc86dfa14aadc0bb6e7",
//           },
//           {
//             player: {
//               name: "Davenport Rowland",
//             },
//             sequence: 8,
//             id: "66e4acc805dab4bce99e2a78",
//           },
//           {
//             player: {
//               name: "Candace Burgess",
//             },
//             sequence: 9,
//             id: "66e4acc82fae327ab7d4a579",
//           },
//           {
//             player: {
//               name: "Cunningham Glass",
//             },
//             sequence: 10,
//             id: "66e4acc88fd64c8f80cb8c58",
//           },
//           {
//             player: {
//               name: "Ward Thomas",
//             },
//             sequence: 11,
//             id: "66e4acc8cdc4ca7a95b0511b",
//           },
//           {
//             player: {
//               name: "Gonzalez Gardner",
//             },
//             sequence: 12,
//             id: "66e4acc83cefa804d91dbaab",
//           },
//           {
//             player: {
//               name: "Raymond Greer",
//             },
//             sequence: 13,
//             id: "66e4acc8ceccba6de69fcefd",
//           },
//         ],
//         progress: 100,
//         status: "Completed",
//       },
//     ],
//     status: "Past",
//   },
//   {
//     tournamentName: "HSSK Taikai",
//     brackets: [
//       {
//         bracketName: "",
//         bracketType: "Double Elimination",
//         bracketCode: "66e4acc806bc8794e178b384",
//         slots: [
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Youth",
//         bracketType: "Group Stage",
//         bracketCode: "66e4acc84dda7ca2e7155379",
//         slots: [
//           {
//             player: {
//               name: "Millie Collier",
//             },
//             sequence: 1,
//             id: "66e4acc8d9c3d4a408e79705",
//           },
//           {
//             player: {
//               name: "Gaines Snow",
//             },
//             sequence: 2,
//             id: "66e4acc80070574e09044b83",
//           },
//           {
//             player: {
//               name: "Shirley Howell",
//             },
//             sequence: 3,
//             id: "66e4acc83c8f1ab1ac31c3c1",
//           },
//           {
//             player: {
//               name: "Virgie Fry",
//             },
//             sequence: 4,
//             id: "66e4acc8f85eb393f23615f5",
//           },
//           {
//             player: {
//               name: "Bishop Burks",
//             },
//             sequence: 5,
//             id: "66e4acc8cd7a20737896e970",
//           },
//           {
//             player: {
//               name: "Wynn Walls",
//             },
//             sequence: 6,
//             id: "66e4acc85eefc8ab577b4b09",
//           },
//           {
//             player: {
//               name: "Byers Knight",
//             },
//             sequence: 7,
//             id: "66e4acc80406df409abccb09",
//           },
//           {
//             player: {
//               name: "Leola Nichols",
//             },
//             sequence: 8,
//             id: "66e4acc8c2d31382cace1815",
//           },
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Dan 4 and up",
//         bracketType: "Single Elimination",
//         bracketCode: "66e4acc804ca36ef3dae782f",
//         slots: [
//           {
//             player: {
//               name: "Houston Thornton",
//             },
//             sequence: 1,
//             id: "66e4acc850954eddf6b26618",
//           },
//           {
//             player: {
//               name: "Amber Miranda",
//             },
//             sequence: 2,
//             id: "66e4acc8ab20e9c031e0bc74",
//           },
//           {
//             player: {
//               name: "Russo Todd",
//             },
//             sequence: 3,
//             id: "66e4acc865857cef73513ecd",
//           },
//           {
//             player: {
//               name: "Janine Noel",
//             },
//             sequence: 4,
//             id: "66e4acc80d19f47b70ebbd95",
//           },
//           {
//             player: {
//               name: "Farrell Terrell",
//             },
//             sequence: 5,
//             id: "66e4acc86ce1549889b28f8f",
//           },
//           {
//             player: {
//               name: "Casey Case",
//             },
//             sequence: 6,
//             id: "66e4acc8960521a80c9d01d2",
//           },
//           {
//             player: {
//               name: "Collier Hood",
//             },
//             sequence: 7,
//             id: "66e4acc87137bd5a671d194c",
//           },
//           {
//             player: {
//               name: "Marguerite Aguirre",
//             },
//             sequence: 8,
//             id: "66e4acc8692ae7bb1e1c692d",
//           },
//           {
//             player: {
//               name: "Cabrera Ortiz",
//             },
//             sequence: 9,
//             id: "66e4acc8c9da0b0cd32c7ed9",
//           },
//           {
//             player: {
//               name: "Taylor Mckay",
//             },
//             sequence: 10,
//             id: "66e4acc8011f28103633f270",
//           },
//           {
//             player: {
//               name: "Debora York",
//             },
//             sequence: 11,
//             id: "66e4acc8c810197810dbcfca",
//           },
//           {
//             player: {
//               name: "Mcgee Carroll",
//             },
//             sequence: 12,
//             id: "66e4acc8fe031feebda5c215",
//           },
//           {
//             player: {
//               name: "Lamb Lang",
//             },
//             sequence: 13,
//             id: "66e4acc8c88dfd2e77696311",
//           },
//           {
//             player: {
//               name: "Arlene Frazier",
//             },
//             sequence: 14,
//             id: "66e4acc814f3913b1bc4035a",
//           },
//         ],
//         progress: 100,
//         status: "Completed",
//       },
//       {
//         bracketName: "Dan 4 and up",
//         bracketType: "Group Stage",
//         bracketCode: "66e4acc8ad5b33405ace1542",
//         slots: [
//           {
//             player: {
//               name: "Potts Rhodes",
//             },
//             sequence: 1,
//             id: "66e4acc8274bb047139f6dbd",
//           },
//           {
//             player: {
//               name: "Benjamin Boyer",
//             },
//             sequence: 2,
//             id: "66e4acc89bdf1e1890b363db",
//           },
//           {
//             player: {
//               name: "Kitty Small",
//             },
//             sequence: 3,
//             id: "66e4acc8142e588703300462",
//           },
//           {
//             player: {
//               name: "Glenda Montgomery",
//             },
//             sequence: 4,
//             id: "66e4acc81eafc4fecee4a9c7",
//           },
//           {
//             player: {
//               name: "Aida Roberts",
//             },
//             sequence: 5,
//             id: "66e4acc8e08a471bc7c51c5c",
//           },
//           {
//             player: {
//               name: "Webster Howard",
//             },
//             sequence: 6,
//             id: "66e4acc82db69bddcc16b0f9",
//           },
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Youth",
//         bracketType: "Round Robin",
//         bracketCode: "66e4acc8d20bec56d2b8286f",
//         slots: [
//           {
//             player: {
//               name: "Kramer Hinton",
//             },
//             sequence: 1,
//             id: "66e4acc8420c8b8bb6a09015",
//           },
//           {
//             player: {
//               name: "Moran Harrington",
//             },
//             sequence: 2,
//             id: "66e4acc8cc6b3f3c02a00196",
//           },
//           {
//             player: {
//               name: "Roseann Goodman",
//             },
//             sequence: 3,
//             id: "66e4acc8fff612101f77d363",
//           },
//           {
//             player: {
//               name: "Betty Abbott",
//             },
//             sequence: 4,
//             id: "66e4acc80fa789dff9a5898a",
//           },
//           {
//             player: {
//               name: "Dale Mays",
//             },
//             sequence: 5,
//             id: "66e4acc826a1cd9ba6183551",
//           },
//           {
//             player: {
//               name: "Rhonda Sweet",
//             },
//             sequence: 6,
//             id: "66e4acc8abd9e554dfa2dd0d",
//           },
//           {
//             player: {
//               name: "Nita Ryan",
//             },
//             sequence: 7,
//             id: "66e4acc8edcdd59040800416",
//           },
//           {
//             player: {
//               name: "Jami Houston",
//             },
//             sequence: 8,
//             id: "66e4acc845c4ae6958e0e6fa",
//           },
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Dan 1-3",
//         bracketType: "Round Robin",
//         bracketCode: "66e4acc8a1a005d3df35e2bb",
//         slots: [
//           {
//             player: {
//               name: "Adams Flores",
//             },
//             sequence: 1,
//             id: "66e4acc8afccee974fdf5cef",
//           },
//           {
//             player: {
//               name: "Rodriquez Dodson",
//             },
//             sequence: 2,
//             id: "66e4acc8caf6861d4ab594fe",
//           },
//           {
//             player: {
//               name: "Parks Conrad",
//             },
//             sequence: 3,
//             id: "66e4acc819833f052a3000d0",
//           },
//           {
//             player: {
//               name: "Hartman Le",
//             },
//             sequence: 4,
//             id: "66e4acc887cff1052123477a",
//           },
//           {
//             player: {
//               name: "Rosella Clayton",
//             },
//             sequence: 5,
//             id: "66e4acc8f785181034139207",
//           },
//           {
//             player: {
//               name: "Herring Jensen",
//             },
//             sequence: 6,
//             id: "66e4acc80f676bb549e04dc3",
//           },
//           {
//             player: {
//               name: "Dyer Mclean",
//             },
//             sequence: 7,
//             id: "66e4acc834b3e53bb1e9f4cc",
//           },
//           {
//             player: {
//               name: "Hughes Randolph",
//             },
//             sequence: 8,
//             id: "66e4acc8dda2998634a3aff3",
//           },
//           {
//             player: {
//               name: "Cassie Goff",
//             },
//             sequence: 9,
//             id: "66e4acc863af8ad3942c3060",
//           },
//           {
//             player: {
//               name: "Darcy Barker",
//             },
//             sequence: 10,
//             id: "66e4acc8db8db83f8d0f9935",
//           },
//           {
//             player: {
//               name: "West Wilkinson",
//             },
//             sequence: 11,
//             id: "66e4acc8b6e92c840e224a78",
//           },
//           {
//             player: {
//               name: "Reyna Hawkins",
//             },
//             sequence: 12,
//             id: "66e4acc8c40855c9417c4301",
//           },
//           {
//             player: {
//               name: "Valeria Holden",
//             },
//             sequence: 13,
//             id: "66e4acc8ab52c44d3976143f",
//           },
//           {
//             player: {
//               name: "Mccall Clements",
//             },
//             sequence: 14,
//             id: "66e4acc8d4aa3a5ea6fcceff",
//           },
//           {
//             player: {
//               name: "Gabriela Hubbard",
//             },
//             sequence: 15,
//             id: "66e4acc8b65b9eb76c56716b",
//           },
//         ],
//         progress: 100,
//         status: "Completed",
//       },
//       {
//         bracketName: "Dan 4 and up",
//         bracketType: "Double Elimination",
//         bracketCode: "66e4acc8cb2166aa0914a275",
//         slots: [
//           {
//             player: {
//               name: "Addie Glenn",
//             },
//             sequence: 1,
//             id: "66e4acc8b5dbbbc522925502",
//           },
//           {
//             player: {
//               name: "Margret Baird",
//             },
//             sequence: 2,
//             id: "66e4acc80359a8fda39fdbe7",
//           },
//           {
//             player: {
//               name: "Warner Fleming",
//             },
//             sequence: 3,
//             id: "66e4acc8ad9a73dc182bfc9b",
//           },
//           {
//             player: {
//               name: "Ethel Douglas",
//             },
//             sequence: 4,
//             id: "66e4acc881236bf06b79b488",
//           },
//           {
//             player: {
//               name: "Mills Ward",
//             },
//             sequence: 5,
//             id: "66e4acc885f429b1c0db73ab",
//           },
//           {
//             player: {
//               name: "Francis Blake",
//             },
//             sequence: 6,
//             id: "66e4acc8717dc1108c45c0aa",
//           },
//           {
//             player: {
//               name: "Sheri Tucker",
//             },
//             sequence: 7,
//             id: "66e4acc81c965116861583d8",
//           },
//           {
//             player: {
//               name: "Butler Oneal",
//             },
//             sequence: 8,
//             id: "66e4acc8de8d98a54a78977a",
//           },
//           {
//             player: {
//               name: "Sondra Mendez",
//             },
//             sequence: 9,
//             id: "66e4acc83150c602d1c00fc6",
//           },
//           {
//             player: {
//               name: "Talley Manning",
//             },
//             sequence: 10,
//             id: "66e4acc8eae47a752491f41c",
//           },
//           {
//             player: {
//               name: "Figueroa Burnett",
//             },
//             sequence: 11,
//             id: "66e4acc8dd301e6c47a20876",
//           },
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Adult Kyu",
//         bracketType: "Single Elimination",
//         bracketCode: "66e4acc899fc35b72a88cdd2",
//         slots: [
//           {
//             player: {
//               name: "Trudy Underwood",
//             },
//             sequence: 1,
//             id: "66e4acc8cc7cf64757beffc8",
//           },
//           {
//             player: {
//               name: "Valarie Gallagher",
//             },
//             sequence: 2,
//             id: "66e4acc84223b0c6c3e54fba",
//           },
//           {
//             player: {
//               name: "Huff Raymond",
//             },
//             sequence: 3,
//             id: "66e4acc8dfe13eee5821921c",
//           },
//           {
//             player: {
//               name: "Stephanie Hardy",
//             },
//             sequence: 4,
//             id: "66e4acc80d8c683d398ce9c2",
//           },
//           {
//             player: {
//               name: "Carlene Bean",
//             },
//             sequence: 5,
//             id: "66e4acc894822ead43893fd8",
//           },
//         ],
//         progress: 100,
//         status: "Completed",
//       },
//     ],
//     status: "Upcoming",
//   },
//   {
//     tournamentName: "San Jose Taikai",
//     brackets: [
//       {
//         bracketName: "",
//         bracketType: "Double Elimination",
//         bracketCode: "66e4acc8d13b1f5c390e4d3e",
//         slots: [
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Dan 4 and up",
//         bracketType: "Double Elimination",
//         bracketCode: "66e4acc8dd401af522099a15",
//         slots: [
//           {
//             player: {
//               name: "Kent Ewing",
//             },
//             sequence: 1,
//             id: "66e4acc8ddf426c136a19e6b",
//           },
//           {
//             player: {
//               name: "Laverne Alvarado",
//             },
//             sequence: 2,
//             id: "66e4acc88c42d80090f736c8",
//           },
//           {
//             player: {
//               name: "Dee Newman",
//             },
//             sequence: 3,
//             id: "66e4acc8f3e7088288764124",
//           },
//           {
//             player: {
//               name: "Palmer George",
//             },
//             sequence: 4,
//             id: "66e4acc8357df4268e2f52c9",
//           },
//           {
//             player: {
//               name: "Horne Perez",
//             },
//             sequence: 5,
//             id: "66e4acc87cde167dea379063",
//           },
//           {
//             player: {
//               name: "Grace Guerrero",
//             },
//             sequence: 6,
//             id: "66e4acc8a6bc2b56fa0b582c",
//           },
//           {
//             player: {
//               name: "Valencia Gibson",
//             },
//             sequence: 7,
//             id: "66e4acc8552055b9a1ebc17a",
//           },
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Dan 4 and up",
//         bracketType: "Group Stage",
//         bracketCode: "66e4acc8c5b8a49dd83c7ffd",
//         slots: [
//           {
//             player: {
//               name: "Cameron Mcmillan",
//             },
//             sequence: 1,
//             id: "66e4acc888006e0a2dd95040",
//           },
//           {
//             player: {
//               name: "Viola Carey",
//             },
//             sequence: 2,
//             id: "66e4acc80130c3746b1d5c4f",
//           },
//           {
//             player: {
//               name: "Shaw Bell",
//             },
//             sequence: 3,
//             id: "66e4acc837decbe9cdff1b9e",
//           },
//           {
//             player: {
//               name: "Sonya Sloan",
//             },
//             sequence: 4,
//             id: "66e4acc8b02aacb21a3faa9e",
//           },
//           {
//             player: {
//               name: "Annette Strong",
//             },
//             sequence: 5,
//             id: "66e4acc8c200fc9cf07826ab",
//           },
//           {
//             player: {
//               name: "Shepard Mathews",
//             },
//             sequence: 6,
//             id: "66e4acc858cb3864140b0124",
//           },
//           {
//             player: {
//               name: "Alexander Wade",
//             },
//             sequence: 7,
//             id: "66e4acc80d495917d6ab3f6e",
//           },
//           {
//             player: {
//               name: "Coffey Norris",
//             },
//             sequence: 8,
//             id: "66e4acc823f72fea97fa8c88",
//           },
//           {
//             player: {
//               name: "Amy Schwartz",
//             },
//             sequence: 9,
//             id: "66e4acc8eecbbdd7e00a3113",
//           },
//           {
//             player: {
//               name: "Grant Ochoa",
//             },
//             sequence: 10,
//             id: "66e4acc8a4bee4656a57be1f",
//           },
//           {
//             player: {
//               name: "Jimmie Hill",
//             },
//             sequence: 11,
//             id: "66e4acc8981edd02df7df2aa",
//           },
//           {
//             player: {
//               name: "Hooper Long",
//             },
//             sequence: 12,
//             id: "66e4acc81202e9e223813d64",
//           },
//           {
//             player: {
//               name: "Christa Byers",
//             },
//             sequence: 13,
//             id: "66e4acc8c4e5cd7b5e0e5fd9",
//           },
//           {
//             player: {
//               name: "Susie Daugherty",
//             },
//             sequence: 14,
//             id: "66e4acc8ea3401ab7b541c19",
//           },
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Adult Kyu",
//         bracketType: "Single Elimination",
//         bracketCode: "66e4acc8619f3e698226a37c",
//         slots: [
//           {
//             player: {
//               name: "Claire Nolan",
//             },
//             sequence: 1,
//             id: "66e4acc820a0083b7af1d629",
//           },
//           {
//             player: {
//               name: "Claudine Barlow",
//             },
//             sequence: 2,
//             id: "66e4acc8bb5421df0b5f46e7",
//           },
//           {
//             player: {
//               name: "Rivera Mayo",
//             },
//             sequence: 3,
//             id: "66e4acc81bc15e1d57277b77",
//           },
//           {
//             player: {
//               name: "Eunice Mercado",
//             },
//             sequence: 4,
//             id: "66e4acc8bf2d21e5808d4801",
//           },
//           {
//             player: {
//               name: "Corinne Blevins",
//             },
//             sequence: 5,
//             id: "66e4acc85b2789a538cefe61",
//           },
//           {
//             player: {
//               name: "Oneil Henry",
//             },
//             sequence: 6,
//             id: "66e4acc8dd5ea3c8752a422d",
//           },
//           {
//             player: {
//               name: "Scott Joyner",
//             },
//             sequence: 7,
//             id: "66e4acc884ca941dda004ae9",
//           },
//           {
//             player: {
//               name: "Marci Burns",
//             },
//             sequence: 8,
//             id: "66e4acc85549e81f626ddb48",
//           },
//           {
//             player: {
//               name: "Edwina Johnson",
//             },
//             sequence: 9,
//             id: "66e4acc80de24aeeccbb9d48",
//           },
//           {
//             player: {
//               name: "Bass Maddox",
//             },
//             sequence: 10,
//             id: "66e4acc8342b4d2ce813b50a",
//           },
//           {
//             player: {
//               name: "Liza Bush",
//             },
//             sequence: 11,
//             id: "66e4acc8ca24835ad6ee2e2c",
//           },
//           {
//             player: {
//               name: "Bonnie Jefferson",
//             },
//             sequence: 12,
//             id: "66e4acc874a1d4221276fdb2",
//           },
//           {
//             player: {
//               name: "Zimmerman Silva",
//             },
//             sequence: 13,
//             id: "66e4acc8a742c093f50f5a7d",
//           },
//           {
//             player: {
//               name: "Wilkerson Tran",
//             },
//             sequence: 14,
//             id: "66e4acc89e8733e4b34f4ee5",
//           },
//           {
//             player: {
//               name: "Christy Nicholson",
//             },
//             sequence: 15,
//             id: "66e4acc8aa229a427c38617f",
//           },
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Youth",
//         bracketType: "Single Elimination",
//         bracketCode: "66e4acc8411ecad3db72ff00",
//         slots: [
//           {
//             player: {
//               name: "Inez Mckee",
//             },
//             sequence: 1,
//             id: "66e4acc8cb0bda68636ea473",
//           },
//           {
//             player: {
//               name: "Rose Bonner",
//             },
//             sequence: 2,
//             id: "66e4acc81811025251882642",
//           },
//           {
//             player: {
//               name: "Watts Carney",
//             },
//             sequence: 3,
//             id: "66e4acc840d1a9495bbe4478",
//           },
//           {
//             player: {
//               name: "Glenn Martinez",
//             },
//             sequence: 4,
//             id: "66e4acc8c3ac0a02ad1c1d63",
//           },
//           {
//             player: {
//               name: "Carlson Mccray",
//             },
//             sequence: 5,
//             id: "66e4acc8be23a92e21750bb1",
//           },
//           {
//             player: {
//               name: "Curtis Walsh",
//             },
//             sequence: 6,
//             id: "66e4acc88da6cc7ec3389df1",
//           },
//           {
//             player: {
//               name: "Mccarthy Gamble",
//             },
//             sequence: 7,
//             id: "66e4acc898a6b29b5f31ba3a",
//           },
//           {
//             player: {
//               name: "Elva Williams",
//             },
//             sequence: 8,
//             id: "66e4acc8ec65aacc9573dd4e",
//           },
//           {
//             player: {
//               name: "Mari Reyes",
//             },
//             sequence: 9,
//             id: "66e4acc8b89fd00b2e50ddff",
//           },
//           {
//             player: {
//               name: "Logan Park",
//             },
//             sequence: 10,
//             id: "66e4acc843c11102e63b76ef",
//           },
//           {
//             player: {
//               name: "Burks Solomon",
//             },
//             sequence: 11,
//             id: "66e4acc854e17c77c44880ff",
//           },
//           {
//             player: {
//               name: "Wilder Lindsay",
//             },
//             sequence: 12,
//             id: "66e4acc882ddc8caeac882fc",
//           },
//           {
//             player: {
//               name: "Graciela Key",
//             },
//             sequence: 13,
//             id: "66e4acc83de87c5fa7ee480f",
//           },
//           {
//             player: {
//               name: "Santiago Hartman",
//             },
//             sequence: 14,
//             id: "66e4acc84e4a299d1e7f64c9",
//           },
//           {
//             player: {
//               name: "Barron Roberson",
//             },
//             sequence: 15,
//             id: "66e4acc8e3f7bf21de681796",
//           },
//           {
//             player: {
//               name: "Savannah Mcfadden",
//             },
//             sequence: 16,
//             id: "66e4acc8b49d93f6e089788a",
//           },
//         ],
//         progress: 100,
//         status: "Completed",
//       },
//       {
//         bracketName: "Youth",
//         bracketType: "Double Elimination",
//         bracketCode: "66e4acc8eea6ef3bc3da7794",
//         slots: [
//           {
//             player: {
//               name: "Thomas Riddle",
//             },
//             sequence: 1,
//             id: "66e4acc8e77fc6acd3971871",
//           },
//           {
//             player: {
//               name: "Sharp Wall",
//             },
//             sequence: 2,
//             id: "66e4acc8f6c88920e8954b3d",
//           },
//           {
//             player: {
//               name: "Duran Blackburn",
//             },
//             sequence: 3,
//             id: "66e4acc819e5d95477528997",
//           },
//           {
//             player: {
//               name: "Washington Higgins",
//             },
//             sequence: 4,
//             id: "66e4acc87c7054dab87aa156",
//           },
//           {
//             player: {
//               name: "Joanna Scott",
//             },
//             sequence: 5,
//             id: "66e4acc8cb98806aa43063ed",
//           },
//           {
//             player: {
//               name: "Mindy Estrada",
//             },
//             sequence: 6,
//             id: "66e4acc8c4139ca119ba682d",
//           },
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Youth",
//         bracketType: "Double Elimination",
//         bracketCode: "66e4acc8af5b239c6c0b361e",
//         slots: [
//           {
//             player: {
//               name: "Hopper Rose",
//             },
//             sequence: 1,
//             id: "66e4acc8705cacc5eb19fcd0",
//           },
//           {
//             player: {
//               name: "Loretta Hale",
//             },
//             sequence: 2,
//             id: "66e4acc809faa293923e53a1",
//           },
//           {
//             player: {
//               name: "Day Howe",
//             },
//             sequence: 3,
//             id: "66e4acc8467283988af45f7a",
//           },
//           {
//             player: {
//               name: "Weaver Harris",
//             },
//             sequence: 4,
//             id: "66e4acc879b39a557e54f151",
//           },
//           {
//             player: {
//               name: "Clark Summers",
//             },
//             sequence: 5,
//             id: "66e4acc8426334adee6dd9c8",
//           },
//           {
//             player: {
//               name: "Pitts Foster",
//             },
//             sequence: 6,
//             id: "66e4acc80ff6dcf3eb4ea8ac",
//           },
//           {
//             player: {
//               name: "Gibson Witt",
//             },
//             sequence: 7,
//             id: "66e4acc899e87da2c60d0e37",
//           },
//           {
//             player: {
//               name: "Lavonne Mccormick",
//             },
//             sequence: 8,
//             id: "66e4acc828527ba59a59817f",
//           },
//           {
//             player: {
//               name: "Alyssa Morse",
//             },
//             sequence: 9,
//             id: "66e4acc82cad56ed867fd14b",
//           },
//           {
//             player: {
//               name: "Baxter Buckley",
//             },
//             sequence: 10,
//             id: "66e4acc8ab14ff40ba2f4b65",
//           },
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Dan 4 and up",
//         bracketType: "Double Elimination",
//         bracketCode: "66e4acc8aa5edf8a00340423",
//         slots: [
//           {
//             player: {
//               name: "Michael Vargas",
//             },
//             sequence: 1,
//             id: "66e4acc83c54c095012ff50e",
//           },
//           {
//             player: {
//               name: "Katina Curry",
//             },
//             sequence: 2,
//             id: "66e4acc83c6e9f98e4ec5825",
//           },
//           {
//             player: {
//               name: "White Sosa",
//             },
//             sequence: 3,
//             id: "66e4acc8ab01fccad8d0955f",
//           },
//           {
//             player: {
//               name: "Reba Herrera",
//             },
//             sequence: 4,
//             id: "66e4acc8d451ab4e68272b43",
//           },
//           {
//             player: {
//               name: "Elisa Walton",
//             },
//             sequence: 5,
//             id: "66e4acc8b467ca9b6edf9b2f",
//           },
//           {
//             player: {
//               name: "Hebert Mccarthy",
//             },
//             sequence: 6,
//             id: "66e4acc85b39c868d7fc8181",
//           },
//           {
//             player: {
//               name: "Helen Patrick",
//             },
//             sequence: 7,
//             id: "66e4acc8e8518ca183286a69",
//           },
//           {
//             player: {
//               name: "Livingston Mcbride",
//             },
//             sequence: 8,
//             id: "66e4acc8c24e87cc601af784",
//           },
//           {
//             player: {
//               name: "Carrie Lester",
//             },
//             sequence: 9,
//             id: "66e4acc85bd5ff07d43bef09",
//           },
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Dan 4 and up",
//         bracketType: "Single Elimination",
//         bracketCode: "66e4acc8391b6d85958c54e9",
//         slots: [
//           {
//             player: {
//               name: "Sampson Valenzuela",
//             },
//             sequence: 1,
//             id: "66e4acc82120e18d080b496c",
//           },
//           {
//             player: {
//               name: "Alana Whitehead",
//             },
//             sequence: 2,
//             id: "66e4acc80cb21f2086bf9427",
//           },
//           {
//             player: {
//               name: "Lourdes Lowery",
//             },
//             sequence: 3,
//             id: "66e4acc86be4c23cd76b11cc",
//           },
//           {
//             player: {
//               name: "Martin Burt",
//             },
//             sequence: 4,
//             id: "66e4acc867c98ef56f888117",
//           },
//           {
//             player: {
//               name: "Dianne Vang",
//             },
//             sequence: 5,
//             id: "66e4acc806f6c958c7d4a060",
//           },
//           {
//             player: {
//               name: "Robert Shepherd",
//             },
//             sequence: 6,
//             id: "66e4acc8d012147b5a3eefa0",
//           },
//           {
//             player: {
//               name: "Latoya Stafford",
//             },
//             sequence: 7,
//             id: "66e4acc8ab5aaafd020238d1",
//           },
//           {
//             player: {
//               name: "Ina Cain",
//             },
//             sequence: 8,
//             id: "66e4acc8d2910c4066a44519",
//           },
//           {
//             player: {
//               name: "Alyson Ellis",
//             },
//             sequence: 9,
//             id: "66e4acc8d1a39db00301f550",
//           },
//           {
//             player: {
//               name: "Boyer Sargent",
//             },
//             sequence: 10,
//             id: "66e4acc81093249eb48c57b6",
//           },
//           {
//             player: {
//               name: "Hale Mooney",
//             },
//             sequence: 11,
//             id: "66e4acc8c629bc8fdf741b65",
//           },
//           {
//             player: {
//               name: "Winifred Gillespie",
//             },
//             sequence: 12,
//             id: "66e4acc86487539e166ba58a",
//           },
//           {
//             player: {
//               name: "Daniels House",
//             },
//             sequence: 13,
//             id: "66e4acc8aae18f26075cf8e9",
//           },
//           {
//             player: {
//               name: "Harriett Hines",
//             },
//             sequence: 14,
//             id: "66e4acc83823f93e1455f2ab",
//           },
//         ],
//         progress: 100,
//         status: "Completed",
//       },
//       {
//         bracketName: "Adult Kyu",
//         bracketType: "Single Elimination",
//         bracketCode: "66e4acc86e3729e454582f3f",
//         slots: [
//           {
//             player: {
//               name: "Patel Haley",
//             },
//             sequence: 1,
//             id: "66e4acc86d1e85f3dd558ba3",
//           },
//           {
//             player: {
//               name: "Rosemarie Calderon",
//             },
//             sequence: 2,
//             id: "66e4acc875ef0a7198bd948b",
//           },
//           {
//             player: {
//               name: "Reynolds Buckner",
//             },
//             sequence: 3,
//             id: "66e4acc88c5b0962a6c3c980",
//           },
//           {
//             player: {
//               name: "Hoover Morin",
//             },
//             sequence: 4,
//             id: "66e4acc802b6e296ce579669",
//           },
//           {
//             player: {
//               name: "Deloris Mcclain",
//             },
//             sequence: 5,
//             id: "66e4acc8475168424d74a54e",
//           },
//           {
//             player: {
//               name: "Berg Smith",
//             },
//             sequence: 6,
//             id: "66e4acc82f8c46c0b40f04ee",
//           },
//           {
//             player: {
//               name: "Erma Whitaker",
//             },
//             sequence: 7,
//             id: "66e4acc8d3517319b15bdf39",
//           },
//           {
//             player: {
//               name: "Carey Collins",
//             },
//             sequence: 8,
//             id: "66e4acc87a662bac384cf2e3",
//           },
//           {
//             player: {
//               name: "Melinda Wooten",
//             },
//             sequence: 9,
//             id: "66e4acc8268d46e94fa2d2b2",
//           },
//           {
//             player: {
//               name: "Gabrielle Watson",
//             },
//             sequence: 10,
//             id: "66e4acc80913a4cb257e02b8",
//           },
//           {
//             player: {
//               name: "Lela Odonnell",
//             },
//             sequence: 11,
//             id: "66e4acc8010c4c1036fec60c",
//           },
//           {
//             player: {
//               name: "Oneal Guthrie",
//             },
//             sequence: 12,
//             id: "66e4acc871e1399a3bfa00ee",
//           },
//           {
//             player: {
//               name: "Bryan Casey",
//             },
//             sequence: 13,
//             id: "66e4acc8a55c4a5c9ff1a2aa",
//           },
//         ],
//         progress: 100,
//         status: "Completed",
//       },
//     ],
//     status: "Upcoming",
//   },
//   {
//     tournamentName: "NCKF Championships",
//     brackets: [
//       {
//         bracketName: "",
//         bracketType: "Round Robin",
//         bracketCode: "66e4acc88f63cf513bd30e35",
//         slots: [
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Youth",
//         bracketType: "Round Robin",
//         bracketCode: "66e4acc8efcefe4b922cf4fd",
//         slots: [
//           {
//             player: {
//               name: "Janelle Morrison",
//             },
//             sequence: 1,
//             id: "66e4acc807cf4b768d602d26",
//           },
//           {
//             player: {
//               name: "Thompson Norton",
//             },
//             sequence: 2,
//             id: "66e4acc8089fbe92e636727d",
//           },
//           {
//             player: {
//               name: "Conner Faulkner",
//             },
//             sequence: 3,
//             id: "66e4acc805a5ac15b9d67a76",
//           },
//           {
//             player: {
//               name: "Darla Dotson",
//             },
//             sequence: 4,
//             id: "66e4acc853d247273c9b7492",
//           },
//           {
//             player: {
//               name: "Lindsey Calhoun",
//             },
//             sequence: 5,
//             id: "66e4acc8113a5381dadf1817",
//           },
//           {
//             player: {
//               name: "Joyce Hewitt",
//             },
//             sequence: 6,
//             id: "66e4acc8a3e5b3701b2ba6ec",
//           },
//           {
//             player: {
//               name: "Berta Wise",
//             },
//             sequence: 7,
//             id: "66e4acc8bc0880e1e6e0e285",
//           },
//           {
//             player: {
//               name: "Shana Christian",
//             },
//             sequence: 8,
//             id: "66e4acc88394c72661173a73",
//           },
//           {
//             player: {
//               name: "Guy Franks",
//             },
//             sequence: 9,
//             id: "66e4acc8e919495d853eb410",
//           },
//           {
//             player: {
//               name: "Luna Russell",
//             },
//             sequence: 10,
//             id: "66e4acc876d7533c027f90e6",
//           },
//           {
//             player: {
//               name: "May Michael",
//             },
//             sequence: 11,
//             id: "66e4acc8e3abbcc7b088c30a",
//           },
//           {
//             player: {
//               name: "Miranda Myers",
//             },
//             sequence: 12,
//             id: "66e4acc8958d1aac52be30e9",
//           },
//           {
//             player: {
//               name: "Holly Lott",
//             },
//             sequence: 13,
//             id: "66e4acc8c68605639bd0b00d",
//           },
//         ],
//         progress: 100,
//         status: "Completed",
//       },
//       {
//         bracketName: "Adult Kyu",
//         bracketType: "Round Robin",
//         bracketCode: "66e4acc8bc99cca34279ad0b",
//         slots: [
//           {
//             player: {
//               name: "Mendez Gilmore",
//             },
//             sequence: 1,
//             id: "66e4acc875361ef8014af062",
//           },
//           {
//             player: {
//               name: "Ruby Davenport",
//             },
//             sequence: 2,
//             id: "66e4acc89f693e01f9c4a368",
//           },
//           {
//             player: {
//               name: "Moody Cline",
//             },
//             sequence: 3,
//             id: "66e4acc837c9f769cd934636",
//           },
//           {
//             player: {
//               name: "Kristine Andrews",
//             },
//             sequence: 4,
//             id: "66e4acc8905a269e6c474e9b",
//           },
//           {
//             player: {
//               name: "Leona Mitchell",
//             },
//             sequence: 5,
//             id: "66e4acc867b3179b91ff3f78",
//           },
//           {
//             player: {
//               name: "Gena Benson",
//             },
//             sequence: 6,
//             id: "66e4acc8aea27aad0059396d",
//           },
//           {
//             player: {
//               name: "Emily Owen",
//             },
//             sequence: 7,
//             id: "66e4acc8f6448896a0df78d8",
//           },
//           {
//             player: {
//               name: "Latonya Hurst",
//             },
//             sequence: 8,
//             id: "66e4acc8754071433ad4f93d",
//           },
//           {
//             player: {
//               name: "Young Lucas",
//             },
//             sequence: 9,
//             id: "66e4acc83c5c2b5c14962b65",
//           },
//           {
//             player: {
//               name: "Sims Cantrell",
//             },
//             sequence: 10,
//             id: "66e4acc892ee72d8f458ebb4",
//           },
//         ],
//         progress: 100,
//         status: "Completed",
//       },
//       {
//         bracketName: "Dan 1-3",
//         bracketType: "Double Elimination",
//         bracketCode: "66e4acc8c0d3f7d86b09744b",
//         slots: [
//           {
//             player: {
//               name: "Ball Schultz",
//             },
//             sequence: 1,
//             id: "66e4acc817a57f2b8d80a49d",
//           },
//           {
//             player: {
//               name: "Woods Glover",
//             },
//             sequence: 2,
//             id: "66e4acc8935553fe9a24c952",
//           },
//           {
//             player: {
//               name: "Frank Miller",
//             },
//             sequence: 3,
//             id: "66e4acc8d860dedc1bc73f1d",
//           },
//           {
//             player: {
//               name: "Leta Parks",
//             },
//             sequence: 4,
//             id: "66e4acc856bb31e880aecd97",
//           },
//           {
//             player: {
//               name: "Wood Banks",
//             },
//             sequence: 5,
//             id: "66e4acc897e93447698b1de8",
//           },
//           {
//             player: {
//               name: "Muriel Pate",
//             },
//             sequence: 6,
//             id: "66e4acc82d9e75d845cede14",
//           },
//           {
//             player: {
//               name: "April Short",
//             },
//             sequence: 7,
//             id: "66e4acc864c47c8b096f62d9",
//           },
//           {
//             player: {
//               name: "Mason Garner",
//             },
//             sequence: 8,
//             id: "66e4acc81181ec83ee5b97b7",
//           },
//           {
//             player: {
//               name: "Elvira Oneil",
//             },
//             sequence: 9,
//             id: "66e4acc85e3c6d24d643d783",
//           },
//           {
//             player: {
//               name: "Lena Grimes",
//             },
//             sequence: 10,
//             id: "66e4acc85431b03e137e280a",
//           },
//           {
//             player: {
//               name: "Della Henderson",
//             },
//             sequence: 11,
//             id: "66e4acc8078e02eb9681c2f8",
//           },
//           {
//             player: {
//               name: "Marsha Cash",
//             },
//             sequence: 12,
//             id: "66e4acc87ceef265ee81cdf2",
//           },
//           {
//             player: {
//               name: "Stanton Vasquez",
//             },
//             sequence: 13,
//             id: "66e4acc83ce2098e068ad168",
//           },
//           {
//             player: {
//               name: "Flora Sherman",
//             },
//             sequence: 14,
//             id: "66e4acc8d7fc7d2bf6fb0851",
//           },
//           {
//             player: {
//               name: "Bowers Osborne",
//             },
//             sequence: 15,
//             id: "66e4acc8952a659b22680892",
//           },
//           {
//             player: {
//               name: "Carolyn Boyd",
//             },
//             sequence: 16,
//             id: "66e4acc8b3d3f96bdd5997bf",
//           },
//         ],
//         progress: 100,
//         status: "Completed",
//       },
//       {
//         bracketName: "Dan 4 and up",
//         bracketType: "Double Elimination",
//         bracketCode: "66e4acc8e25517d55e1174bd",
//         slots: [
//           {
//             player: {
//               name: "Hurst Mason",
//             },
//             sequence: 1,
//             id: "66e4acc8338eab661f8e7096",
//           },
//           {
//             player: {
//               name: "Lang Hahn",
//             },
//             sequence: 2,
//             id: "66e4acc8718ca5c8b2c913c3",
//           },
//           {
//             player: {
//               name: "Larsen Talley",
//             },
//             sequence: 3,
//             id: "66e4acc806aa7b2724167ce5",
//           },
//           {
//             player: {
//               name: "Dennis Juarez",
//             },
//             sequence: 4,
//             id: "66e4acc8ff60e004111338ed",
//           },
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Dan 4 and up",
//         bracketType: "Single Elimination",
//         bracketCode: "66e4acc8cbe2373766a7a95a",
//         slots: [
//           {
//             player: {
//               name: "Nikki Craig",
//             },
//             sequence: 1,
//             id: "66e4acc82481d01a98b4ed0c",
//           },
//           {
//             player: {
//               name: "Tonya Bowers",
//             },
//             sequence: 2,
//             id: "66e4acc8fce95459e0948ff0",
//           },
//           {
//             player: {
//               name: "Sherri Lawson",
//             },
//             sequence: 3,
//             id: "66e4acc85dd590d88fe346f9",
//           },
//           {
//             player: {
//               name: "Bowman Kirby",
//             },
//             sequence: 4,
//             id: "66e4acc8589dbbdcf2c87c7e",
//           },
//           {
//             player: {
//               name: "Angelica Grant",
//             },
//             sequence: 5,
//             id: "66e4acc89d9ba6f9e07a799f",
//           },
//           {
//             player: {
//               name: "Corina Dunn",
//             },
//             sequence: 6,
//             id: "66e4acc80b964e7868a25286",
//           },
//           {
//             player: {
//               name: "Barbara Pitts",
//             },
//             sequence: 7,
//             id: "66e4acc8babdb719b9c486dc",
//           },
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Youth",
//         bracketType: "Round Robin",
//         bracketCode: "66e4acc8d32a3509f1e74eba",
//         slots: [
//           {
//             player: {
//               name: "Abby Espinoza",
//             },
//             sequence: 1,
//             id: "66e4acc8b15c3117b1a61d3f",
//           },
//           {
//             player: {
//               name: "Marilyn Stanley",
//             },
//             sequence: 2,
//             id: "66e4acc86886179d5f5d7a0d",
//           },
//           {
//             player: {
//               name: "Alba Winters",
//             },
//             sequence: 3,
//             id: "66e4acc830563a963c284d98",
//           },
//           {
//             player: {
//               name: "Norris Merritt",
//             },
//             sequence: 4,
//             id: "66e4acc8cd08d4bb491540b3",
//           },
//           {
//             player: {
//               name: "Casey White",
//             },
//             sequence: 5,
//             id: "66e4acc8624d22196822ae82",
//           },
//           {
//             player: {
//               name: "Penelope Hampton",
//             },
//             sequence: 6,
//             id: "66e4acc860bbae468ae74e35",
//           },
//           {
//             player: {
//               name: "Watson Baker",
//             },
//             sequence: 7,
//             id: "66e4acc88b0422648920457d",
//           },
//           {
//             player: {
//               name: "Hill Williamson",
//             },
//             sequence: 8,
//             id: "66e4acc87f229e31f9eeba7b",
//           },
//           {
//             player: {
//               name: "Wiley Roman",
//             },
//             sequence: 9,
//             id: "66e4acc8e7386a19811e4083",
//           },
//           {
//             player: {
//               name: "Gray Haynes",
//             },
//             sequence: 10,
//             id: "66e4acc80da12fa72a71fc19",
//           },
//           {
//             player: {
//               name: "Caldwell Bauer",
//             },
//             sequence: 11,
//             id: "66e4acc847dbdcf1d3bdf647",
//           },
//           {
//             player: {
//               name: "Kendra Sampson",
//             },
//             sequence: 12,
//             id: "66e4acc8b1a23770b5b71f4f",
//           },
//           {
//             player: {
//               name: "Rodgers Watkins",
//             },
//             sequence: 13,
//             id: "66e4acc80a0ba85d8d3948b4",
//           },
//           {
//             player: {
//               name: "Robbie Trujillo",
//             },
//             sequence: 14,
//             id: "66e4acc8946996b566c3dfb2",
//           },
//           {
//             player: {
//               name: "Janette Irwin",
//             },
//             sequence: 15,
//             id: "66e4acc815fb7749363baa75",
//           },
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//       {
//         bracketName: "Youth",
//         bracketType: "Single Elimination",
//         bracketCode: "66e4acc8cb7ad902a013bba1",
//         slots: [
//           {
//             player: {
//               name: "Rosario Durham",
//             },
//             sequence: 1,
//             id: "66e4acc83060eed4aac56fbb",
//           },
//           {
//             player: {
//               name: "Mccoy Anthony",
//             },
//             sequence: 2,
//             id: "66e4acc8e42b252f7a43d982",
//           },
//           {
//             player: {
//               name: "Alicia Warner",
//             },
//             sequence: 3,
//             id: "66e4acc8966a175665a3b77f",
//           },
//           {
//             player: {
//               name: "Chris Perry",
//             },
//             sequence: 4,
//             id: "66e4acc85c3540b44336026f",
//           },
//           {
//             player: {
//               name: "Spence Berry",
//             },
//             sequence: 5,
//             id: "66e4acc83c0c5e35551e4350",
//           },
//           {
//             player: {
//               name: "Sandoval Pickett",
//             },
//             sequence: 6,
//             id: "66e4acc8b655cd642a94347d",
//           },
//           {
//             player: {
//               name: "Deidre Bray",
//             },
//             sequence: 7,
//             id: "66e4acc88363fa6b9dc0921c",
//           },
//           {
//             player: {
//               name: "Lucia French",
//             },
//             sequence: 8,
//             id: "66e4acc8752140404b7f69fb",
//           },
//           {
//             player: {
//               name: "Mclean Green",
//             },
//             sequence: 9,
//             id: "66e4acc83763cf385a688fe1",
//           },
//           {
//             player: {
//               name: "Kristy Mckinney",
//             },
//             sequence: 10,
//             id: "66e4acc8639c7a3c48641999",
//           },
//           {
//             player: {
//               name: "Green Oconnor",
//             },
//             sequence: 11,
//             id: "66e4acc8b90e1b7ee98e0911",
//           },
//           {
//             player: {
//               name: "Claudette Ferguson",
//             },
//             sequence: 12,
//             id: "66e4acc868aeed9089b69b44",
//           },
//           {
//             player: {
//               name: "Kathleen Mann",
//             },
//             sequence: 13,
//             id: "66e4acc88281341ba3e3344d",
//           },
//           {
//             player: {
//               name: "Silvia Benton",
//             },
//             sequence: 14,
//             id: "66e4acc8142b0e221a352c1e",
//           },
//           {
//             player: {
//               name: "Rodriguez Crosby",
//             },
//             sequence: 15,
//             id: "66e4acc89abd8b36ae1b9fd3",
//           },
//         ],
//         progress: 100,
//         status: "Completed",
//       },
//       {
//         bracketName: "Dan 1-3",
//         bracketType: "Single Elimination",
//         bracketCode: "66e4acc81dd6361b6104e277",
//         slots: [
//           {
//             player: {
//               name: "Allison Booth",
//             },
//             sequence: 1,
//             id: "66e4acc8a62bb174ea512a65",
//           },
//           {
//             player: {
//               name: "Paulette Stuart",
//             },
//             sequence: 2,
//             id: "66e4acc8c7fea470b1591ecf",
//           },
//           {
//             player: {
//               name: "Karyn Moss",
//             },
//             sequence: 3,
//             id: "66e4acc89b2212229ecb66df",
//           },
//           {
//             player: {
//               name: "Floyd Hogan",
//             },
//             sequence: 4,
//             id: "66e4acc8c61f25c0b530d516",
//           },
//           {
//             player: {
//               name: "Maggie Cervantes",
//             },
//             sequence: 5,
//             id: "66e4acc8eb3b1033eab5c7e2",
//           },
//           {
//             player: {
//               name: "Bernard Kline",
//             },
//             sequence: 6,
//             id: "66e4acc834110ca655ca532a",
//           },
//           {
//             player: {
//               name: "Curry Wyatt",
//             },
//             sequence: 7,
//             id: "66e4acc829451e1c8e0ebc5d",
//           },
//           {
//             player: {
//               name: "Julianne Hoover",
//             },
//             sequence: 8,
//             id: "66e4acc8958e0cd2d73e5ed4",
//           },
//           {
//             player: {
//               name: "Gilmore Woodard",
//             },
//             sequence: 9,
//             id: "66e4acc8f4bee69c1f313a22",
//           },
//           {
//             player: {
//               name: "Juliet Baldwin",
//             },
//             sequence: 10,
//             id: "66e4acc8ada56ae4c4fd6e78",
//           },
//           {
//             player: {
//               name: "Preston Johnston",
//             },
//             sequence: 11,
//             id: "66e4acc88598af9a3c5136fc",
//           },
//           {
//             player: {
//               name: "Joanne Townsend",
//             },
//             sequence: 12,
//             id: "66e4acc88cce892b3c8e0fc4",
//           },
//           {
//             player: {
//               name: "Lara Boyle",
//             },
//             sequence: 13,
//             id: "66e4acc85dbe4f7507aee249",
//           },
//           {
//             player: {
//               name: "Rosalie Sheppard",
//             },
//             sequence: 14,
//             id: "66e4acc86a883354df388006",
//           },
//           {
//             player: {
//               name: "Hayes Dillon",
//             },
//             sequence: 15,
//             id: "66e4acc88c372447ec2e183c",
//           },
//           {
//             player: {
//               name: "Madeleine Alvarez",
//             },
//             sequence: 16,
//             id: "66e4acc8f7a7a928bc0bae1c",
//           },
//         ],
//         progress: 100,
//         status: "Completed",
//       },
//       {
//         bracketName: "Dan 4 and up",
//         bracketType: "Single Elimination",
//         bracketCode: "66e4acc81649072307310b13",
//         slots: [
//           {
//             player: {
//               name: "Luann Joyce",
//             },
//             sequence: 1,
//             id: "66e4acc846d55a2d943234db",
//           },
//           {
//             player: {
//               name: "Stone Shaffer",
//             },
//             sequence: 2,
//             id: "66e4acc8dadb3791b69dc8b8",
//           },
//           {
//             player: {
//               name: "Fletcher Lara",
//             },
//             sequence: 3,
//             id: "66e4acc87b15cf4e81d31b89",
//           },
//           {
//             player: {
//               name: "Erika Tillman",
//             },
//             sequence: 4,
//             id: "66e4acc8a7d42eb6d63ac3c5",
//           },
//           {
//             player: {
//               name: "Janet Langley",
//             },
//             sequence: 5,
//             id: "66e4acc86331eeef8de5cd39",
//           },
//           {
//             player: {
//               name: "Odonnell Holcomb",
//             },
//             sequence: 6,
//             id: "66e4acc8feded3c736bbbc13",
//           },
//         ],
//         progress: 0,
//         status: "Editing",
//       },
//     ],
//     status: "Active",
//   },
// ];

export type {
  TournamentStatusType,
  BracketType,
  RoundType,
  PlayerColorType,
  IpponType,
  Player,
  Slot,
  Match,
  MatchResult,
  Bracket,
  Tournament,
};
// export { dummyTournamentData };
