export const restaurant = {
  name: "Soltana Pro Max",
  phone: "+21623789338",
  displayPhone: "23 789 338",
  address: "Devant Café Zezwa, Route de Tunis KM1, Sfax",
  city: "Sfax, Tunisia",
  hours: null,
  instagram: "",
  facebook: "",
  maps: "",
};

export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  restaurant.address,
)}`;
