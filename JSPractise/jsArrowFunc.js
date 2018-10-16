const someFriends = [
    { "id": 0, "name": "Darla Grimes", "place": "work", "type": "close" },
    { "id": 1,"name": "Kristin Sellers", "place": "home", "type": "close" },
    { "id": 2, "name": "Shawn Kane", "place": "home", "type": "close" },
    { "id": 3, "name": "Baker Deleon", "place": "institute", "type": "time-pass" },
    { "id": 4, "name": "Key Jefferson", "place": "work", "type": "close" },
    { "id": 5, "name": "Freida Woods", "place": "work", "type": "time-pass" }
  ];

  const totalWorkFriends = someFriends.filter(function(friend) {
    return friend.place === "work";
  })
  .filter(function(friend) {
      console.log("inside filter 2", friend);
      return friend.type === "close"
  })

  console.log(totalWorkFriends);