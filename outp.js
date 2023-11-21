const carding = document.getElementsByClassName("mycard");
const f = fetch("https://jsonplaceholder.typicode.com/users");
const arr = [];

f.then((response) => {
  return response.json();
})
  .then((data) => {
    arr.push(...data);
    return arr;
  })
  .then(() => {
    // Create cards
    for (let i = 0; i < arr.length; i++) {
      const card = document.createElement("div");
      card.setAttribute("class", "cardDisplay"); 
      // const imgUrl = "https://robohash.org/";-- image

      let userDetails = `<p style="font-weight: bold;">${arr[i].name}</p>
                          <p style="color: blue;">${arr[i].address.suite},${arr[i].address.street}</p>
                          <p style="color: green;">${arr[i].address.city}</p>
                          <p>${arr[i].address.zipcode}</p>
                          <p id="contact"><i class='bx bxs-phone'> ${arr[i].phone}</i></p>`;

      let newUrl = `${imgUrl}/${i + 1}`;
      let img = `<img src="${newUrl}" alt='robot_image'>`;

      const info = document.createElement("div");
      info.setAttribute("class", "info");

      const image = document.createElement("div");
      image.setAttribute("class", "novo");

      image.innerHTML = img;
      info.innerHTML = userDetails;
      card.appendChild(image);
      card.appendChild(info);
      carding[0].appendChild(card);
    }

    // Add event listener for search
    const searchInput = document.getElementById("see"); // replace with your actual ID
    searchInput.addEventListener("keyup", () => {
      const searchTerm = searchInput.value.trim().toLowerCase();
      const searchList = arr.filter((user) => user.name.toLowerCase().includes(searchTerm));
      userListFunc(searchList);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
