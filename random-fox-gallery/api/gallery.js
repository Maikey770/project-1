// API endpoint that provides multiple photo items for the gallery
export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      author: "Maikey770",
      photo: "https://randomfox.ca/images/1.jpg",
    },
    {
      id: 2,
      author: "Maikey880",
      photo: "https://randomfox.ca/images/2.jpg",
    },
    {
      id: 3,
      author: "Maikey990",
      photo: "https://randomfox.ca/images/3.jpg",
    }
  ]);
}
