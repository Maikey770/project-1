// Static API endpoint providing multiple fox photos and author info
export default function handler(req, res) {
  res.status(200).json([
    {
      id: "f-001",
      name: "Red Fox in Snow",
      dateTaken: "2025-01-05",
      thumbSrc: "https://randomfox.ca/images/1.jpg",
      fullSrc: "https://randomfox.ca/images/1.jpg",
      author: {
        name: "Emma Johnson",
        avatar: "https://ui-avatars.com/api/?name=Emma+Johnson&background=random&bold=true&size=80",
        userSince: "2017-01-15",
        channel: "@FoxWildlife"
      }
    },
    {
      id: "f-002",
      name: "Curious Arctic Fox",
      dateTaken: "2025-01-07",
      thumbSrc: "https://randomfox.ca/images/2.jpg",
      fullSrc: "https://randomfox.ca/images/2.jpg",
      author: {
        name: "Liam Brown",
        avatar: "https://ui-avatars.com/api/?name=Liam+Brown&background=random&bold=true&size=80",
        userSince: "2018-03-22",
        channel: "@NatureFrame"
      }
    },
    {
      id: "f-003",
      name: "Fox Stretching in Morning Light",
      dateTaken: "2025-01-10",
      thumbSrc: "https://randomfox.ca/images/3.jpg",
      fullSrc: "https://randomfox.ca/images/3.jpg",
      author: {
        name: "Ava Smith",
        avatar: "https://ui-avatars.com/api/?name=Ava+Smith&background=random&bold=true&size=80",
        userSince: "2019-06-10",
        channel: "@WildMoment"
      }
    },
    {
      id: "f-004",
      name: "Fox Peeking Behind a Tree",
      dateTaken: "2025-01-14",
      thumbSrc: "https://randomfox.ca/images/4.jpg",
      fullSrc: "https://randomfox.ca/images/4.jpg",
      author: {
        name: "Noah Davis",
        avatar: "https://ui-avatars.com/api/?name=Noah+Davis&background=random&bold=true&size=80",
        userSince: "2016-11-05",
        channel: "@FoxWatch"
      }
    },
    {
      id: "f-005",
      name: "Resting Fox under a Tree",
      dateTaken: "2025-01-18",
      thumbSrc: "https://randomfox.ca/images/5.jpg",
      fullSrc: "https://randomfox.ca/images/5.jpg",
      author: {
        name: "Sophia Wilson",
        avatar: "https://ui-avatars.com/api/?name=Sophia+Wilson&background=random&bold=true&size=80",
        userSince: "2020-02-12",
        channel: "@ForestLight"
      }
    },
    {
      id: "f-006",
      name: "Fox on a Hilltop",
      dateTaken: "2025-01-21",
      thumbSrc: "https://randomfox.ca/images/6.jpg",
      fullSrc: "https://randomfox.ca/images/6.jpg",
      author: {
        name: "Oliver Martinez",
        avatar: "https://ui-avatars.com/api/?name=Oliver+Martinez&background=random&bold=true&size=80",
        userSince: "2015-09-19",
        channel: "@EarthLens"
      }
    },
    {
      id: "f-007",
      name: "Fox Pup Playing",
      dateTaken: "2025-01-25",
      thumbSrc: "https://randomfox.ca/images/7.jpg",
      fullSrc: "https://randomfox.ca/images/7.jpg",
      author: {
        name: "Isabella Clark",
        avatar: "https://ui-avatars.com/api/?name=Isabella+Clark&background=random&bold=true&size=80",
        userSince: "2018-07-07",
        channel: "@WildBaby"
      }
    },
    {
      id: "f-008",
      name: "Fox in the Fog",
      dateTaken: "2025-01-28",
      thumbSrc: "https://randomfox.ca/images/8.jpg",
      fullSrc: "https://randomfox.ca/images/8.jpg",
      author: {
        name: "Ethan Lewis",
        avatar: "https://ui-avatars.com/api/?name=Ethan+Lewis&background=random&bold=true&size=80",
        userSince: "2019-12-01",
        channel: "@MorningTrail"
      }
    },
    {
      id: "f-009",
      name: "Running Fox in Field",
      dateTaken: "2025-02-01",
      thumbSrc: "https://randomfox.ca/images/9.jpg",
      fullSrc: "https://randomfox.ca/images/9.jpg",
      author: {
        name: "Mia Anderson",
        avatar: "https://ui-avatars.com/api/?name=Mia+Anderson&background=random&bold=true&size=80",
        userSince: "2016-10-24",
        channel: "@WildRun"
      }
    },
    {
      id: "f-010",
      name: "Sleeping Fox Close-up",
      dateTaken: "2025-02-03",
      thumbSrc: "https://randomfox.ca/images/10.jpg",
      fullSrc: "https://randomfox.ca/images/10.jpg",
      author: {
        name: "Lucas Scott",
        avatar: "https://ui-avatars.com/api/?name=Lucas+Scott&background=random&bold=true&size=80",
        userSince: "2021-03-30",
        channel: "@QuietNature"
      }
    },
    {
      id: "f-011",
      name: "Fox Looking Over the River",
      dateTaken: "2025-01-15",
      thumbSrc: "https://randomfox.ca/images/11.jpg",
      fullSrc: "https://randomfox.ca/images/11.jpg",
      author: {
        name: "Harper Nguyen",
        avatar: "https://ui-avatars.com/api/?name=Harper+Nguyen&background=random&bold=true&size=80",
        userSince: "2018-09-05",
        channel: "@RiverLight"
      }
    },
    {
      id: "f-012",
      name: "Fox Standing in Tall Grass",
      dateTaken: "2025-01-16",
      thumbSrc: "https://randomfox.ca/images/12.jpg",
      fullSrc: "https://randomfox.ca/images/12.jpg",
      author: {
        name: "Elijah Rivera",
        avatar: "https://ui-avatars.com/api/?name=Elijah+Rivera&background=random&bold=true&size=80",
        userSince: "2017-11-02",
        channel: "@NatureFocus"
      }
    },
    {
      id: "f-013",
      name: "Fox Family Resting Together",
      dateTaken: "2025-01-17",
      thumbSrc: "https://randomfox.ca/images/13.jpg",
      fullSrc: "https://randomfox.ca/images/13.jpg",
      author: {
        name: "Charlotte Perez",
        avatar: "https://ui-avatars.com/api/?name=Charlotte+Perez&background=random&bold=true&size=80",
        userSince: "2015-12-11",
        channel: "@FoxFamily"
      }
    },
    {
      id: "f-014",
      name: "Fox Watching the Sunset",
      dateTaken: "2025-01-18",
      thumbSrc: "https://randomfox.ca/images/14.jpg",
      fullSrc: "https://randomfox.ca/images/14.jpg",
      author: {
        name: "James Wright",
        avatar: "https://ui-avatars.com/api/?name=James+Wright&background=random&bold=true&size=80",
        userSince: "2019-08-14",
        channel: "@EveningGlow"
      }
    },
    {
      id: "f-015",
      name: "Young Fox by the Lake",
      dateTaken: "2025-01-19",
      thumbSrc: "https://randomfox.ca/images/15.jpg",
      fullSrc: "https://randomfox.ca/images/15.jpg",
      author: {
        name: "Amelia Chen",
        avatar: "https://ui-avatars.com/api/?name=Amelia+Chen&background=random&bold=true&size=80",
        userSince: "2020-05-19",
        channel: "@WildLens"
      }
    },
        {
      id: "f-016",
      name: "Fox Standing on Rock",
      dateTaken: "2025-01-20",
      thumbSrc: "https://randomfox.ca/images/16.jpg",
      fullSrc: "https://randomfox.ca/images/16.jpg",
      author: {
        name: "Henry Lopez",
        avatar: "https://ui-avatars.com/api/?name=Henry+Lopez&background=random&bold=true&size=80",
        userSince: "2018-04-12",
        channel: "@WildStone"
      }
    },
    {
      id: "f-017",
      name: "Fox Sniffing the Air",
      dateTaken: "2025-01-21",
      thumbSrc: "https://randomfox.ca/images/17.jpg",
      fullSrc: "https://randomfox.ca/images/17.jpg",
      author: {
        name: "Evelyn Baker",
        avatar: "https://ui-avatars.com/api/?name=Evelyn+Baker&background=random&bold=true&size=80",
        userSince: "2019-07-05",
        channel: "@SilentWoods"
      }
    },
    {
      id: "f-018",
      name: "Fox in the Meadow",
      dateTaken: "2025-01-22",
      thumbSrc: "https://randomfox.ca/images/18.jpg",
      fullSrc: "https://randomfox.ca/images/18.jpg",
      author: {
        name: "Jackson Hill",
        avatar: "https://ui-avatars.com/api/?name=Jackson+Hill&background=random&bold=true&size=80",
        userSince: "2021-01-11",
        channel: "@MeadowLight"
      }
    },
    {
      id: "f-019",
      name: "Fox under the Stars",
      dateTaken: "2025-01-23",
      thumbSrc: "https://randomfox.ca/images/19.jpg",
      fullSrc: "https://randomfox.ca/images/19.jpg",
      author: {
        name: "Grace Young",
        avatar: "https://ui-avatars.com/api/?name=Grace+Young&background=random&bold=true&size=80",
        userSince: "2017-03-10",
        channel: "@NightTrail"
      }
    },
    {
      id: "f-020",
      name: "Fox Crossing the River",
      dateTaken: "2025-01-24",
      thumbSrc: "https://randomfox.ca/images/20.jpg",
      fullSrc: "https://randomfox.ca/images/20.jpg",
      author: {
        name: "Carter Allen",
        avatar: "https://ui-avatars.com/api/?name=Carter+Allen&background=random&bold=true&size=80",
        userSince: "2015-08-19",
        channel: "@RiverFox"
      }
    },
    {
      id: "f-021",
      name: "Fox with Snowy Tail",
      dateTaken: "2025-01-25",
      thumbSrc: "https://randomfox.ca/images/21.jpg",
      fullSrc: "https://randomfox.ca/images/21.jpg",
      author: {
        name: "Luna Torres",
        avatar: "https://ui-avatars.com/api/?name=Luna+Torres&background=random&bold=true&size=80",
        userSince: "2020-09-27",
        channel: "@SnowLight"
      }
    },
    {
      id: "f-022",
      name: "Fox Looking at Camera",
      dateTaken: "2025-01-26",
      thumbSrc: "https://randomfox.ca/images/22.jpg",
      fullSrc: "https://randomfox.ca/images/22.jpg",
      author: {
        name: "Sebastian Brooks",
        avatar: "https://ui-avatars.com/api/?name=Sebastian+Brooks&background=random&bold=true&size=80",
        userSince: "2016-05-30",
        channel: "@WildEye"
      }
    },
    {
      id: "f-023",
      name: "Fox Lying in Sunlight",
      dateTaken: "2025-01-27",
      thumbSrc: "https://randomfox.ca/images/23.jpg",
      fullSrc: "https://randomfox.ca/images/23.jpg",
      author: {
        name: "Zoe Sanders",
        avatar: "https://ui-avatars.com/api/?name=Zoe+Sanders&background=random&bold=true&size=80",
        userSince: "2018-10-22",
        channel: "@SunFox"
      }
    },
    {
      id: "f-024",
      name: "Fox Resting on Log",
      dateTaken: "2025-01-28",
      thumbSrc: "https://randomfox.ca/images/24.jpg",
      fullSrc: "https://randomfox.ca/images/24.jpg",
      author: {
        name: "Owen Rivera",
        avatar: "https://ui-avatars.com/api/?name=Owen+Rivera&background=random&bold=true&size=80",
        userSince: "2019-06-08",
        channel: "@ForestLens"
      }
    },
    {
      id: "f-025",
      name: "Fox Yawning in Forest",
      dateTaken: "2025-01-29",
      thumbSrc: "https://randomfox.ca/images/25.jpg",
      fullSrc: "https://randomfox.ca/images/25.jpg",
      author: {
        name: "Ella Morgan",
        avatar: "https://ui-avatars.com/api/?name=Ella+Morgan&background=random&bold=true&size=80",
        userSince: "2017-11-12",
        channel: "@WildDreams"
      }
    },
    {
      id: "f-026",
      name: "Fox Hiding in Bushes",
      dateTaken: "2025-01-30",
      thumbSrc: "https://randomfox.ca/images/26.jpg",
      fullSrc: "https://randomfox.ca/images/26.jpg",
      author: {
        name: "Logan Perry",
        avatar: "https://ui-avatars.com/api/?name=Logan+Perry&background=random&bold=true&size=80",
        userSince: "2020-02-03",
        channel: "@HiddenFox"
      }
    },
    {
      id: "f-027",
      name: "Fox Sitting on Path",
      dateTaken: "2025-01-31",
      thumbSrc: "https://randomfox.ca/images/27.jpg",
      fullSrc: "https://randomfox.ca/images/27.jpg",
      author: {
        name: "Aria Bennett",
        avatar: "https://ui-avatars.com/api/?name=Aria+Bennett&background=random&bold=true&size=80",
        userSince: "2019-05-04",
        channel: "@NaturePulse"
      }
    },
    {
      id: "f-028",
      name: "Fox Listening Carefully",
      dateTaken: "2025-02-01",
      thumbSrc: "https://randomfox.ca/images/28.jpg",
      fullSrc: "https://randomfox.ca/images/28.jpg",
      author: {
        name: "Mason Ward",
        avatar: "https://ui-avatars.com/api/?name=Mason+Ward&background=random&bold=true&size=80",
        userSince: "2016-07-23",
        channel: "@SoundOfWild"
      }
    },
    {
      id: "f-029",
      name: "Fox Walking through Snow",
      dateTaken: "2025-02-02",
      thumbSrc: "https://randomfox.ca/images/29.jpg",
      fullSrc: "https://randomfox.ca/images/29.jpg",
      author: {
        name: "Scarlett Foster",
        avatar: "https://ui-avatars.com/api/?name=Scarlett+Foster&background=random&bold=true&size=80",
        userSince: "2018-02-14",
        channel: "@SnowTrack"
      }
    },
    {
      id: "f-030",
      name: "Fox Looking Up",
      dateTaken: "2025-02-03",
      thumbSrc: "https://randomfox.ca/images/30.jpg",
      fullSrc: "https://randomfox.ca/images/30.jpg",
      author: {
        name: "Aiden Price",
        avatar: "https://ui-avatars.com/api/?name=Aiden+Price&background=random&bold=true&size=80",
        userSince: "2021-06-15",
        channel: "@FoxSky"
      }
    },
    {
      id: "f-031",
      name: "Fox in the Shade",
      dateTaken: "2025-02-04",
      thumbSrc: "https://randomfox.ca/images/31.jpg",
      fullSrc: "https://randomfox.ca/images/31.jpg",
      author: {
        name: "Chloe Barnes",
        avatar: "https://ui-avatars.com/api/?name=Chloe+Barnes&background=random&bold=true&size=80",
        userSince: "2017-09-19",
        channel: "@CoolFox"
      }
    },
    {
      id: "f-032",
      name: "Fox Hiding under Tree Roots",
      dateTaken: "2025-02-05",
      thumbSrc: "https://randomfox.ca/images/32.jpg",
      fullSrc: "https://randomfox.ca/images/32.jpg",
      author: {
        name: "Nathan Mitchell",
        avatar: "https://ui-avatars.com/api/?name=Nathan+Mitchell&background=random&bold=true&size=80",
        userSince: "2018-11-28",
        channel: "@RootedNature"
      }
    },
    {
      id: "f-033",
      name: "Fox Grooming Itself",
      dateTaken: "2025-02-06",
      thumbSrc: "https://randomfox.ca/images/33.jpg",
      fullSrc: "https://randomfox.ca/images/33.jpg",
      author: {
        name: "Lily Rogers",
        avatar: "https://ui-avatars.com/api/?name=Lily+Rogers&background=random&bold=true&size=80",
        userSince: "2019-01-05",
        channel: "@WildClean"
      }
    },
    {
      id: "f-034",
      name: "Fox Smelling Flowers",
      dateTaken: "2025-02-07",
      thumbSrc: "https://randomfox.ca/images/34.jpg",
      fullSrc: "https://randomfox.ca/images/34.jpg",
      author: {
        name: "Samuel Cook",
        avatar: "https://ui-avatars.com/api/?name=Samuel+Cook&background=random&bold=true&size=80",
        userSince: "2015-10-20",
        channel: "@FloralTrail"
      }
    },
    {
      id: "f-035",
      name: "Fox in Early Morning Fog",
      dateTaken: "2025-02-08",
      thumbSrc: "https://randomfox.ca/images/35.jpg",
      fullSrc: "https://randomfox.ca/images/35.jpg",
      author: {
        name: "Victoria Ross",
        avatar: "https://ui-avatars.com/api/?name=Victoria+Ross&background=random&bold=true&size=80",
        userSince: "2016-12-06",
        channel: "@FogLens"
      }
    },
    {
      id: "f-036",
      name: "Fox Stretching after Nap",
      dateTaken: "2025-02-09",
      thumbSrc: "https://randomfox.ca/images/36.jpg",
      fullSrc: "https://randomfox.ca/images/36.jpg",
      author: {
        name: "Eli Murphy",
        avatar: "https://ui-avatars.com/api/?name=Eli+Murphy&background=random&bold=true&size=80",
        userSince: "2019-04-01",
        channel: "@WakeFox"
      }
    },
    {
      id: "f-037",
      name: "Fox Standing on Fallen Tree",
      dateTaken: "2025-02-10",
      thumbSrc: "https://randomfox.ca/images/37.jpg",
      fullSrc: "https://randomfox.ca/images/37.jpg",
      author: {
        name: "Hannah Reed",
        avatar: "https://ui-avatars.com/api/?name=Hannah+Reed&background=random&bold=true&size=80",
        userSince: "2018-03-09",
        channel: "@TreeFox"
      }
    },
    {
      id: "f-038",
      name: "Fox in Green Field",
      dateTaken: "2025-02-11",
      thumbSrc: "https://randomfox.ca/images/38.jpg",
      fullSrc: "https://randomfox.ca/images/38.jpg",
      author: {
        name: "Gabriel Hughes",
        avatar: "https://ui-avatars.com/api/?name=Gabriel+Hughes&background=random&bold=true&size=80",
        userSince: "2021-05-17",
        channel: "@FieldLight"
      }
    },
    {
      id: "f-039",
      name: "Fox Sneaking through Forest",
      dateTaken: "2025-02-12",
      thumbSrc: "https://randomfox.ca/images/39.jpg",
      fullSrc: "https://randomfox.ca/images/39.jpg",
      author: {
        name: "Penelope James",
        avatar: "https://ui-avatars.com/api/?name=Penelope+James&background=random&bold=true&size=80",
        userSince: "2020-07-22",
        channel: "@FoxShadow"
      }
    },
    {
      id: "f-040",
      name: "Fox Staring into Distance",
      dateTaken: "2025-02-13",
      thumbSrc: "https://randomfox.ca/images/40.jpg",
      fullSrc: "https://randomfox.ca/images/40.jpg",
      author: {
        name: "Wyatt Turner",
        avatar: "https://ui-avatars.com/api/?name=Wyatt+Turner&background=random&bold=true&size=80",
        userSince: "2016-09-02",
        channel: "@LongView"
      }
    },
    {
      id: "f-041",
      name: "Fox Sleeping in the Shade",
      dateTaken: "2025-02-14",
      thumbSrc: "https://randomfox.ca/images/41.jpg",
      fullSrc: "https://randomfox.ca/images/41.jpg",
      author: {
        name: "Nora Kelly",
        avatar: "https://ui-avatars.com/api/?name=Nora+Kelly&background=random&bold=true&size=80",
        userSince: "2017-12-15",
        channel: "@CoolShade"
      }
    },
    {
      id: "f-042",
      name: "Fox Watching from Rocks",
      dateTaken: "2025-02-15",
      thumbSrc: "https://randomfox.ca/images/42.jpg",
      fullSrc: "https://randomfox.ca/images/42.jpg",
      author: {
        name: "Isaac Adams",
        avatar: "https://ui-avatars.com/api/?name=Isaac+Adams&background=random&bold=true&size=80",
        userSince: "2019-09-09",
        channel: "@RockFox"
      }
    },
    {
      id: "f-043",
      name: "Fox Family Playing Together",
      dateTaken: "2025-02-16",
      thumbSrc: "https://randomfox.ca/images/43.jpg",
      fullSrc: "https://randomfox.ca/images/43.jpg",
      author: {
        name: "Riley Carter",
        avatar: "https://ui-avatars.com/api/?name=Riley+Carter&background=random&bold=true&size=80",
        userSince: "2018-01-21",
        channel: "@FoxPack"
      }
    },
    {
      id: "f-044",
      name: "Fox Walking in the Rain",
      dateTaken: "2025-02-17",
      thumbSrc: "https://randomfox.ca/images/44.jpg",
      fullSrc: "https://randomfox.ca/images/44.jpg",
      author: {
        name: "Lydia Diaz",
        avatar: "https://ui-avatars.com/api/?name=Lydia+Diaz&background=random&bold=true&size=80",
        userSince: "2020-10-10",
        channel: "@RainTrail"
      }
    },
    {
      id: "f-045",
      name: "Fox Smiling in the Sun",
      dateTaken: "2025-02-18",
      thumbSrc: "https://randomfox.ca/images/45.jpg",
      fullSrc: "https://randomfox.ca/images/45.jpg",
      author: {
        name: "Julian Rivera",
        avatar: "https://ui-avatars.com/api/?name=Julian+Rivera&background=random&bold=true&size=80",
        userSince: "2019-03-03",
        channel: "@SunFox"
      }
    },
    {
      id: "f-046",
      name: "Fox Near the Pond",
      dateTaken: "2025-02-19",
      thumbSrc: "https://randomfox.ca/images/46.jpg",
      fullSrc: "https://randomfox.ca/images/46.jpg",
      author: {
        name: "Stella Cruz",
        avatar: "https://ui-avatars.com/api/?name=Stella+Cruz&background=random&bold=true&size=80",
        userSince: "2016-05-05",
        channel: "@PondLight"
      }
    },
    {
      id: "f-047",
      name: "Fox Looking Curious",
      dateTaken: "2025-02-20",
      thumbSrc: "https://randomfox.ca/images/47.jpg",
      fullSrc: "https://randomfox.ca/images/47.jpg",
      author: {
        name: "Hudson Gray",
        avatar: "https://ui-avatars.com/api/?name=Hudson+Gray&background=random&bold=true&size=80",
        userSince: "2018-08-17",
        channel: "@CuriousFox"
      }
    },
    {
      id: "f-048",
      name: "Fox Watching the Horizon",
      dateTaken: "2025-02-21",
      thumbSrc: "https://randomfox.ca/images/48.jpg",
      fullSrc: "https://randomfox.ca/images/48.jpg",
      author: {
        name: "Leah Simmons",
        avatar: "https://ui-avatars.com/api/?name=Leah+Simmons&background=random&bold=true&size=80",
        userSince: "2019-12-29",
        channel: "@WideSky"
      }
    },
    {
      id: "f-049",
      name: "Fox with Bright Eyes",
      dateTaken: "2025-02-22",
      thumbSrc: "https://randomfox.ca/images/49.jpg",
      fullSrc: "https://randomfox.ca/images/49.jpg",
      author: {
        name: "Evan Flores",
        avatar: "https://ui-avatars.com/api/?name=Evan+Flores&background=random&bold=true&size=80",
        userSince: "2020-06-02",
        channel: "@LightTrail"
      }
    },
    {
      id: "f-050",
      name: "Fox on the Edge of Forest",
      dateTaken: "2025-02-23",
      thumbSrc: "https://randomfox.ca/images/50.jpg",
      fullSrc: "https://randomfox.ca/images/50.jpg",
      author: {
        name: "Audrey Bell",
        avatar: "https://ui-avatars.com/api/?name=Audrey+Bell&background=random&bold=true&size=80",
        userSince: "2017-02-09",
        channel: "@ForestEdge"
      }
    }
  ]);
}
