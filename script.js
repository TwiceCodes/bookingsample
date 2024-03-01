document.addEventListener("DOMContentLoaded", function () {
  const hotelsContainer = document.getElementById("hotels");

  // Sample hotel data (replace with your own data from a database)
  const hotelsData = [
    {
      name: "Mainne Hotel",
      image: "/images/maine.jpg",
      price: "$100 per night",
      rating: 4.5,
      description: "A beautiful hotel with stunning views.",
      facebook: "https://www.facebook.com/mainnehotel", // Adding Facebook link for Mainne Hotel
    },
    {
      name: "Paradise Farmcation",
      image: "/images/paradise.jpg",
      price: "$120 per night",
      rating: 4.2,
      description: "A cozy resort with excellent amenities.",
      facebook: "https://www.facebook.com/paradisefarmcation", // Adding Facebook link for Paradise Farmcation
    },
    {
      name: "La Playa Merced",
      image: "/images/laPlaya.jpg",
      price: "$120 per night",
      rating: 5.0,
      description: "Beach Resort.",
      facebook: "https://www.facebook.com/laplayamerced", // Adding Facebook link for La Playa Merced
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

    // Facebook Link (Appended at the bottom)
    const facebookLink = document.createElement("a");
    facebookLink.href = hotel.facebook;
    facebookLink.textContent = "Visit Facebook Page";
    facebookLink.classList.add("facebook-link");
    facebookLink.target = "_blank"; // Open link in new window/tab
    hotelElement.appendChild(facebookLink);
  });
});
