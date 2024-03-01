document.addEventListener("DOMContentLoaded", function () {
  const hotelsContainer = document.getElementById("hotels");

  // Sample hotel data (replace with your own data from a database)
  const hotelsData = [
    {
      name: "Mainne Hotel",
      image: "hotel1.jpg",
      price: "$100 per night",
      rating: 4.5,
      description: "A beautiful hotel with stunning views.",
    },
    {
      name: "Paradise Farmcation",
      image: "hotel2.jpg",
      price: "$120 per night",
      rating: 4.2,
      description: "A cozy resort with excellent amenities.",
    },
    {
      name: "La Playa Merced",
      image: "hotel2.jpg",
      price: "$120 per night",
      rating: 5.0,
      description: "Beach Resort.",
    },
    // Add more hotel objects as needed
  ];

  // Display hotels
  hotelsData.forEach((hotel) => {
    const hotelElement = document.createElement("div");
    hotelElement.classList.add("hotel");

    // Image
    const imageElement = document.createElement("img");
    imageElement.src = hotel.image;
    hotelElement.appendChild(imageElement);

    // Name
    const nameElement = document.createElement("div");
    nameElement.classList.add("name");
    nameElement.textContent = hotel.name;
    hotelElement.appendChild(nameElement);

    // Price
    const priceElement = document.createElement("div");
    priceElement.classList.add("price");
    priceElement.textContent = hotel.price;
    hotelElement.appendChild(priceElement);

    // Rating
    const ratingElement = document.createElement("div");
    ratingElement.classList.add("rating");
    ratingElement.textContent = "Rating: " + hotel.rating;
    hotelElement.appendChild(ratingElement);

    // Description
    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("description");
    descriptionElement.textContent = hotel.description;
    hotelElement.appendChild(descriptionElement);

    hotelsContainer.appendChild(hotelElement);
  });
});
