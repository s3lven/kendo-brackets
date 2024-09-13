type BracketType =
  | "Single Elimination"
  | "Double Elimination"
  | "Round Robin"
  | "Group Stage";
type TournamentStatusType = "Active" | "Upcoming" | "Past";
type BracketStatusType = "Editing" | "In Progress" | "Completed";
type IpponType = "Men" | "Kote" | "Do" | "Tsuki" | "Hantei" | "Hansoku";
type RoundType = "Round 1" | "Round 2" | "Round 3" | "Quarter-Finals" | "Semi-Finals" | "Finals"

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
  progress: number
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
        "slots": [
          {
            "id": "66e3c382b37495c0614c01e9",
            "player": {
              "name": "Clarice Hoffman"
            },
            "sequence": 1
          },
          {
            "id": "66e3c382013da7bd163dc275",
            "player": {
              "name": "Holland Hale"
            },
            "sequence": 2
          },
          {
            "id": "66e3c3823e4c8a9a07b1282f",
            "player": {
              "name": "Emily Talley"
            },
            "sequence": 3
          },
          {
            "id": "66e3c3829ba1ffc13464fb30",
            "player": {
              "name": "Chandra Vinson"
            },
            "sequence": 4
          }
        ],
        "status": "Completed",
        "progress": 100,
        "bracketCode": "66e3c38253dff2e677e2f375",
        "bracketName": "Adult Kyu",
        "bracketType": "Double Elimination"
      },
      {
        "slots": [
          {
            "id": "66e3c382d3ddfe7d526b010b",
            "player": {
              "name": "Valencia Jacobs"
            },
            "sequence": 1
          },
          {
            "id": "66e3c38205a63641bc7953dd",
            "player": {
              "name": "Chris Palmer"
            },
            "sequence": 2
          },
          {
            "id": "66e3c3826a0494418e34f871",
            "player": {
              "name": "Ernestine Bernard"
            },
            "sequence": 3
          },
          {
            "id": "66e3c38266c5969a56692fbb",
            "player": {
              "name": "Chambers Sandoval"
            },
            "sequence": 4
          }
        ],
        "status": "Editing",
        "progress": 0,
        "bracketCode": "66e3c3826d9dacd3be77bb7b",
        "bracketName": "Dan 4 and up",
        "bracketType": "Double Elimination"
      },
      {
        "slots": [
          {
            "id": "66e3c3821a414e3fb1776326",
            "player": {
              "name": "Tessa Acevedo"
            },
            "sequence": 1
          },
          {
            "id": "66e3c38275903ff6bf270f3e",
            "player": {
              "name": "Cotton Bell"
            },
            "sequence": 2
          },
          {
            "id": "66e3c3828b1480c5f7854950",
            "player": {
              "name": "Weaver Velez"
            },
            "sequence": 3
          },
          {
            "id": "66e3c3829305ed8dd0852b8e",
            "player": {
              "name": "Wendi Moses"
            },
            "sequence": 4
          }
        ],
        "status": "Completed",
        "progress": 100,
        "bracketCode": "66e3c382856050fe53a5d9e6",
        "bracketName": "Adult Kyu",
        "bracketType": "Single Elimination"
      },
      {
        "slots": [
          {
            "id": "66e3c382ea24529b2620a85e",
            "player": {
              "name": "Maude Becker"
            },
            "sequence": 1
          },
          {
            "id": "66e3c382d17fcd3d33c8f1ba",
            "player": {
              "name": "Fernandez Donovan"
            },
            "sequence": 2
          },
          {
            "id": "66e3c382fa8b2795c795bf37",
            "player": {
              "name": "Armstrong Espinoza"
            },
            "sequence": 3
          },
          {
            "id": "66e3c3823e05b600b6bc569e",
            "player": {
              "name": "Fleming Bradley"
            },
            "sequence": 4
          }
        ],
        "status": "Completed",
        "progress": 100,
        "bracketCode": "66e3c3824ba57d26cdaa1ef0",
        "bracketName": "Dan 4 and up",
        "bracketType": "Round Robin"
      },
      {
        "slots": [
          {
            "id": "66e3c382ebe105e3b28ec00b",
            "player": {
              "name": "Byers Morse"
            },
            "sequence": 1
          },
          {
            "id": "66e3c382ce0211710f3afd3c",
            "player": {
              "name": "Hall Rosales"
            },
            "sequence": 2
          },
          {
            "id": "66e3c382356b4c14bdd88e72",
            "player": {
              "name": "Concetta Howe"
            },
            "sequence": 3
          },
          {
            "id": "66e3c3829ad61e70661a052d",
            "player": {
              "name": "Caroline Gilbert"
            },
            "sequence": 4
          }
        ],
        "status": "Completed",
        "progress": 100,
        "bracketCode": "66e3c382f6e184eb761a14ce",
        "bracketName": "Dan 1-3",
        "bracketType": "Group Stage"
      },
      {
        "slots": [
          {
            "id": "66e3c382bfa05b90d015f312",
            "player": {
              "name": "Mccoy Morrison"
            },
            "sequence": 1
          },
          {
            "id": "66e3c382cfac73f3a99e3312",
            "player": {
              "name": "Rodgers Reid"
            },
            "sequence": 2
          },
          {
            "id": "66e3c382ba4201fb3097a438",
            "player": {
              "name": "Holly Navarro"
            },
            "sequence": 3
          },
          {
            "id": "66e3c382aef4a1046e50e385",
            "player": {
              "name": "Coleman Garner"
            },
            "sequence": 4
          }
        ],
        "status": "Editing",
        "progress": 0,
        "bracketCode": "66e3c382c371a820348a681f",
        "bracketName": "Dan 1-3",
        "bracketType": "Double Elimination"
      }
    ],
    status: "Active",
  },
  {
    tournamentName: "Sacramento Taikai",
    brackets: [
      {
        "slots": [
          {
            "id": "66e3c396d095ec9e91bc1dbd",
            "player": {
              "name": "Cannon Thomas"
            },
            "sequence": 1
          },
          {
            "id": "66e3c396b0ffd0c0d1f7c549",
            "player": {
              "name": "Faulkner Nguyen"
            },
            "sequence": 2
          },
          {
            "id": "66e3c3961a1cb326f3071fac",
            "player": {
              "name": "Marsha Dalton"
            },
            "sequence": 3
          },
          {
            "id": "66e3c3967ed8f16f80ac3618",
            "player": {
              "name": "Burns Gregory"
            },
            "sequence": 4
          }
        ],
        "status": "Completed",
        "progress": 100,
        "bracketCode": "66e3c3969e692693943644db",
        "bracketName": "Youth",
        "bracketType": "Single Elimination"
      },
      {
        "slots": [
          {
            "id": "66e3c3963dd4c8ab99f961fd",
            "player": {
              "name": "Nettie Stanley"
            },
            "sequence": 1
          },
          {
            "id": "66e3c3966f797262ff00a7ce",
            "player": {
              "name": "Pat Walter"
            },
            "sequence": 2
          },
          {
            "id": "66e3c396364b8be9fea3fccd",
            "player": {
              "name": "Head Albert"
            },
            "sequence": 3
          },
          {
            "id": "66e3c396f432bd8b477594ff",
            "player": {
              "name": "Lora Tran"
            },
            "sequence": 4
          }
        ],
        "status": "Editing",
        "progress": 0,
        "bracketCode": "66e3c39625a6d3106f314590",
        "bracketName": "Dan 1-3",
        "bracketType": "Double Elimination"
      },
      {
        "slots": [
          {
            "id": "66e3c396515b5db2397898eb",
            "player": {
              "name": "Craig Waller"
            },
            "sequence": 1
          },
          {
            "id": "66e3c3966aa507fc49755313",
            "player": {
              "name": "Jolene Hill"
            },
            "sequence": 2
          },
          {
            "id": "66e3c39604ec646802f0701a",
            "player": {
              "name": "Jillian Rose"
            },
            "sequence": 3
          },
          {
            "id": "66e3c396831414701ba27a85",
            "player": {
              "name": "Casey Blair"
            },
            "sequence": 4
          }
        ],
        "status": "Editing",
        "progress": 0,
        "bracketCode": "66e3c39683df5f5bcd440958",
        "bracketName": "Youth",
        "bracketType": "Single Elimination"
      },
      {
        "slots": [
          {
            "id": "66e3c396fe52363a5b8cca1f",
            "player": {
              "name": "Lynch Prince"
            },
            "sequence": 1
          },
          {
            "id": "66e3c3964830d4e1eebc0f8a",
            "player": {
              "name": "Christy Wallace"
            },
            "sequence": 2
          },
          {
            "id": "66e3c396e049e233e19e5faf",
            "player": {
              "name": "Shana Macias"
            },
            "sequence": 3
          },
          {
            "id": "66e3c3963bcaa8b2463dd928",
            "player": {
              "name": "Velasquez Bishop"
            },
            "sequence": 4
          }
        ],
        "status": "Editing",
        "progress": 0,
        "bracketCode": "66e3c39603e996bf6113a613",
        "bracketName": "Dan 1-3",
        "bracketType": "Round Robin"
      },
      {
        "slots": [
          {
            "id": "66e3c396226798b8bef93ffa",
            "player": {
              "name": "Stuart Faulkner"
            },
            "sequence": 1
          },
          {
            "id": "66e3c396c6c2186316974b04",
            "player": {
              "name": "Angelique Garcia"
            },
            "sequence": 2
          },
          {
            "id": "66e3c396e579ac9e4de47220",
            "player": {
              "name": "Effie Kelly"
            },
            "sequence": 3
          },
          {
            "id": "66e3c396881a7b3f74113201",
            "player": {
              "name": "Wilda Moran"
            },
            "sequence": 4
          }
        ],
        "status": "Completed",
        "progress": 100,
        "bracketCode": "66e3c396effcd3b11c02bd90",
        "bracketName": "Youth",
        "bracketType": "Double Elimination"
      },
      {
        "slots": [
          {
            "id": "66e3c396b9d6d4a251c618c0",
            "player": {
              "name": "Cecelia Mcneil"
            },
            "sequence": 1
          },
          {
            "id": "66e3c396779b70294a481cc3",
            "player": {
              "name": "Jocelyn Sweeney"
            },
            "sequence": 2
          },
          {
            "id": "66e3c3962ec034f96169cd1d",
            "player": {
              "name": "Jeannie Weiss"
            },
            "sequence": 3
          },
          {
            "id": "66e3c39616126ed32680f6c0",
            "player": {
              "name": "Ida Fry"
            },
            "sequence": 4
          }
        ],
        "status": "Editing",
        "progress": 0,
        "bracketCode": "66e3c39685de362ccf97d456",
        "bracketName": "Youth",
        "bracketType": "Round Robin"
      },
      {
        "slots": [
          {
            "id": "66e3c396114236c515100263",
            "player": {
              "name": "Naomi Pugh"
            },
            "sequence": 1
          },
          {
            "id": "66e3c39667004cdddd503aa3",
            "player": {
              "name": "Mcdonald Stein"
            },
            "sequence": 2
          },
          {
            "id": "66e3c3969ccda5373f5424d7",
            "player": {
              "name": "Harrell Simmons"
            },
            "sequence": 3
          },
          {
            "id": "66e3c396ec4641e257bd6980",
            "player": {
              "name": "Vincent Bray"
            },
            "sequence": 4
          }
        ],
        "status": "Editing",
        "progress": 0,
        "bracketCode": "66e3c396bc34e079310b501a",
        "bracketName": "Adult Kyu",
        "bracketType": "Group Stage"
      },
      {
        "slots": [
          {
            "id": "66e3c39698f55a8ecbf9f8b4",
            "player": {
              "name": "Tommie Morin"
            },
            "sequence": 1
          },
          {
            "id": "66e3c396d620e3a095e0b17b",
            "player": {
              "name": "Jean Snow"
            },
            "sequence": 2
          },
          {
            "id": "66e3c396de70b03c06d796b6",
            "player": {
              "name": "Ofelia Pierce"
            },
            "sequence": 3
          },
          {
            "id": "66e3c396d780a3346ad3df18",
            "player": {
              "name": "Tracie William"
            },
            "sequence": 4
          }
        ],
        "status": "Editing",
        "progress": 0,
        "bracketCode": "66e3c396ad8cdbf227104033",
        "bracketName": "Youth",
        "bracketType": "Single Elimination"
      },
      {
        "slots": [
          {
            "id": "66e3c396b2ccfa4d24c907ee",
            "player": {
              "name": "Rosa Cunningham"
            },
            "sequence": 1
          },
          {
            "id": "66e3c3967ce016ddb934c77e",
            "player": {
              "name": "Nelda Grant"
            },
            "sequence": 2
          },
          {
            "id": "66e3c396db45c22dd968f2da",
            "player": {
              "name": "Rollins Cook"
            },
            "sequence": 3
          },
          {
            "id": "66e3c39636f8f2f141e7c3d7",
            "player": {
              "name": "Gallagher Porter"
            },
            "sequence": 4
          }
        ],
        "status": "Editing",
        "progress": 0,
        "bracketCode": "66e3c3965dff2637db3a4860",
        "bracketName": "Dan 1-3",
        "bracketType": "Double Elimination"
      },
      {
        "slots": [
          {
            "id": "66e3c3963f1e31c1c32ff458",
            "player": {
              "name": "Sheree Weaver"
            },
            "sequence": 1
          },
          {
            "id": "66e3c3962d592c28ed0f2281",
            "player": {
              "name": "Walter Morgan"
            },
            "sequence": 2
          },
          {
            "id": "66e3c39693bc6f2577c24da2",
            "player": {
              "name": "Odonnell Norris"
            },
            "sequence": 3
          },
          {
            "id": "66e3c396afe2ce836b339fc7",
            "player": {
              "name": "James Washington"
            },
            "sequence": 4
          }
        ],
        "status": "Completed",
        "progress": 100,
        "bracketCode": "66e3c396c3a1e464dacc41c5",
        "bracketName": "Dan 1-3",
        "bracketType": "Group Stage"
      }
    ],
    status: "Past",
  },
  {
    tournamentName: "San Jose",
    brackets: [
      {
        "slots": [
          {
            "id": "66e3c39afaaf54bccca33299",
            "player": {
              "name": "Marcy Velasquez"
            },
            "sequence": 1
          },
          {
            "id": "66e3c39a02e3e47071b63ebb",
            "player": {
              "name": "Sonja Griffin"
            },
            "sequence": 2
          },
          {
            "id": "66e3c39aec1b7c2cf02202dd",
            "player": {
              "name": "Bernadine Holmes"
            },
            "sequence": 3
          },
          {
            "id": "66e3c39a8acb67739f5d4c5a",
            "player": {
              "name": "Stafford Estes"
            },
            "sequence": 4
          }
        ],
        "status": "Editing",
        "progress": 0,
        "bracketCode": "66e3c39a466ca6daad51c19d",
        "bracketName": "Dan 4 and up",
        "bracketType": "Single Elimination"
      },
      {
        "slots": [
          {
            "id": "66e3c39a29e48477da2433be",
            "player": {
              "name": "Shepard Kim"
            },
            "sequence": 1
          },
          {
            "id": "66e3c39a7e868e22b7ea6613",
            "player": {
              "name": "June Mcneil"
            },
            "sequence": 2
          },
          {
            "id": "66e3c39a4d9ef7669331ac6b",
            "player": {
              "name": "Susan Flowers"
            },
            "sequence": 3
          },
          {
            "id": "66e3c39a54f5fe2dfe1daeda",
            "player": {
              "name": "Colon Fernandez"
            },
            "sequence": 4
          }
        ],
        "status": "Completed",
        "progress": 100,
        "bracketCode": "66e3c39a651028648d13117b",
        "bracketName": "Youth",
        "bracketType": "Round Robin"
      },
      {
        "slots": [
          {
            "id": "66e3c39a249bae920bfb20d8",
            "player": {
              "name": "Gonzalez Gates"
            },
            "sequence": 1
          },
          {
            "id": "66e3c39ae004ed05268f9385",
            "player": {
              "name": "Ferguson Brock"
            },
            "sequence": 2
          },
          {
            "id": "66e3c39a9e40599a42d1c4af",
            "player": {
              "name": "Ortega Combs"
            },
            "sequence": 3
          },
          {
            "id": "66e3c39a4c5cbf0ae0c5f2bc",
            "player": {
              "name": "Sanders Bradley"
            },
            "sequence": 4
          }
        ],
        "status": "Completed",
        "progress": 100,
        "bracketCode": "66e3c39a2d444b7613496354",
        "bracketName": "Dan 4 and up",
        "bracketType": "Round Robin"
      },
      {
        "slots": [
          {
            "id": "66e3c39aa7e38301350444cd",
            "player": {
              "name": "Mercer Sellers"
            },
            "sequence": 1
          },
          {
            "id": "66e3c39ada915c651bb893f3",
            "player": {
              "name": "Deena Taylor"
            },
            "sequence": 2
          },
          {
            "id": "66e3c39afb43a0584da434e5",
            "player": {
              "name": "Williams Scott"
            },
            "sequence": 3
          },
          {
            "id": "66e3c39a328c58ac17ef9c6d",
            "player": {
              "name": "Tara James"
            },
            "sequence": 4
          }
        ],
        "status": "Editing",
        "progress": 0,
        "bracketCode": "66e3c39a5372fc6cd910733f",
        "bracketName": "Dan 1-3",
        "bracketType": "Double Elimination"
      },
      {
        "slots": [
          {
            "id": "66e3c39aa4beef5a61317464",
            "player": {
              "name": "Ronda Benson"
            },
            "sequence": 1
          },
          {
            "id": "66e3c39a21fb88d33fc0f891",
            "player": {
              "name": "Haney Finch"
            },
            "sequence": 2
          },
          {
            "id": "66e3c39ad95b4f659fd259a0",
            "player": {
              "name": "Sophie Baxter"
            },
            "sequence": 3
          },
          {
            "id": "66e3c39a5aad6bc1abf482c2",
            "player": {
              "name": "Robinson Anthony"
            },
            "sequence": 4
          }
        ],
        "status": "Editing",
        "progress": 0,
        "bracketCode": "66e3c39a1b00ba15c629f373",
        "bracketName": "Dan 4 and up",
        "bracketType": "Group Stage"
      }
    ],
    status: "Past",
  },
  {
    tournamentName: "NCKF Championships",
    brackets: [
      {
        "slots": [
          {
            "id": "66e3c39da32676f787509304",
            "player": {
              "name": "Adkins Weiss"
            },
            "sequence": 1
          },
          {
            "id": "66e3c39d538caaa4ebcf995e",
            "player": {
              "name": "Sheila Frazier"
            },
            "sequence": 2
          },
          {
            "id": "66e3c39db4b856f3cbf60d24",
            "player": {
              "name": "Finley Kaufman"
            },
            "sequence": 3
          },
          {
            "id": "66e3c39d630f29cb3cb30800",
            "player": {
              "name": "Margret Frederick"
            },
            "sequence": 4
          }
        ],
        "status": "Completed",
        "progress": 100,
        "bracketCode": "66e3c39dca07725aa798762d",
        "bracketName": "Adult Kyu",
        "bracketType": "Double Elimination"
      },
      {
        "slots": [
          {
            "id": "66e3c39dc10e509897c72b5d",
            "player": {
              "name": "Reva Green"
            },
            "sequence": 1
          },
          {
            "id": "66e3c39dbe729d9204230e94",
            "player": {
              "name": "Gutierrez Herring"
            },
            "sequence": 2
          },
          {
            "id": "66e3c39d56df9912864cae19",
            "player": {
              "name": "Melanie Paul"
            },
            "sequence": 3
          },
          {
            "id": "66e3c39d7cfadf2b6b21877a",
            "player": {
              "name": "Dudley Snider"
            },
            "sequence": 4
          }
        ],
        "status": "Completed",
        "progress": 100,
        "bracketCode": "66e3c39db9b05b9f51e54a1d",
        "bracketName": "Youth",
        "bracketType": "Double Elimination"
      },
      {
        "slots": [
          {
            "id": "66e3c39d4db488dbe35bfadf",
            "player": {
              "name": "Finch Coleman"
            },
            "sequence": 1
          },
          {
            "id": "66e3c39dfbac98487832a831",
            "player": {
              "name": "Burns Carroll"
            },
            "sequence": 2
          },
          {
            "id": "66e3c39d0947cdf7b89f3ee8",
            "player": {
              "name": "Ray Gilliam"
            },
            "sequence": 3
          },
          {
            "id": "66e3c39d68ddc346783a1bfb",
            "player": {
              "name": "Mcintyre Harris"
            },
            "sequence": 4
          }
        ],
        "status": "Completed",
        "progress": 100,
        "bracketCode": "66e3c39d90976d2f32480f18",
        "bracketName": "Adult Kyu",
        "bracketType": "Single Elimination"
      },
      {
        "slots": [
          {
            "id": "66e3c39d0af917e736994b09",
            "player": {
              "name": "Hannah Rocha"
            },
            "sequence": 1
          },
          {
            "id": "66e3c39d25a47a9c8d8bf12c",
            "player": {
              "name": "Obrien Mills"
            },
            "sequence": 2
          },
          {
            "id": "66e3c39d900a493efc0d689c",
            "player": {
              "name": "Swanson Espinoza"
            },
            "sequence": 3
          },
          {
            "id": "66e3c39d06c04e1e51ed0f8e",
            "player": {
              "name": "Carson Hoover"
            },
            "sequence": 4
          }
        ],
        "status": "Completed",
        "progress": 100,
        "bracketCode": "66e3c39df7b5d87e017cfb3e",
        "bracketName": "Adult Kyu",
        "bracketType": "Single Elimination"
      },
      {
        "slots": [
          {
            "id": "66e3c39dd76cdb35a89eff59",
            "player": {
              "name": "Glover Price"
            },
            "sequence": 1
          },
          {
            "id": "66e3c39d6d85eccb669a0119",
            "player": {
              "name": "Ruiz Calhoun"
            },
            "sequence": 2
          },
          {
            "id": "66e3c39dd4dffa8939223953",
            "player": {
              "name": "Beatriz Jenkins"
            },
            "sequence": 3
          },
          {
            "id": "66e3c39db19b636e20a56a43",
            "player": {
              "name": "Spencer Dixon"
            },
            "sequence": 4
          }
        ],
        "status": "Completed",
        "progress": 100,
        "bracketCode": "66e3c39d0989723238e1844f",
        "bracketName": "Dan 4 and up",
        "bracketType": "Single Elimination"
      },
      {
        "slots": [
          {
            "id": "66e3c39d20ddbfdf2d736816",
            "player": {
              "name": "Ofelia Terrell"
            },
            "sequence": 1
          },
          {
            "id": "66e3c39dd24df16847277e1c",
            "player": {
              "name": "Ebony Sutton"
            },
            "sequence": 2
          },
          {
            "id": "66e3c39d2ee04b6299a69509",
            "player": {
              "name": "Diann Burch"
            },
            "sequence": 3
          },
          {
            "id": "66e3c39dbae90a56f26ef8ee",
            "player": {
              "name": "Patty Dodson"
            },
            "sequence": 4
          }
        ],
        "status": "Completed",
        "progress": 100,
        "bracketCode": "66e3c39dcb75d3fdb4b6fb48",
        "bracketName": "Dan 1-3",
        "bracketType": "Single Elimination"
      }
    ],
    status: "Upcoming",
  },
];

export type {
  TournamentStatusType,
  BracketType,
  RoundType, 
  Player,
  Slot,
  Bracket,
  Tournament,
};
export { dummyTournamentData };
