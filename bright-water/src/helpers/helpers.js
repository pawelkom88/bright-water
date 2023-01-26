export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
];

export function stripHTMLTag(str) {
  return str?.replace(/(<([^>]+)>)/gi, "");
}

export function removeDuplicateObjects(array, property) {
  const uniqueIds = [];

  const unique = array?.filter(element => {
    const isDuplicate = uniqueIds.includes(element[property]);
    if (!isDuplicate) {
      uniqueIds.push(element[property]);

      return true;
    }

    return false;
  });

  return unique;
}

export const sortMethods = {
  default: { method: (a, b) => null },
  // ascending: { method: (a, b) => a.name > b.name },
  ascending: { method: (a, b) => a.name.localeCompare(b.name, "en") },
  descending: { method: (a, b) => b.name.localeCompare(a.name, "en") },
  price: { method: (a, b) => a.price.raw - b.price.raw },
};

export const colors = [
  {
    color: "indian red",
    code: {
      hex: "#B0171F",
    },
    id: 1,
  },

  {
    color: "lightpink	",
    code: {
      hex: "#FFB6C1	",
    },
    id: 2,
  },

  {
    color: "pink	",
    code: {
      hex: "#FFC0CB	",
    },
    id: 3,
  },

  {
    color: "palevioletred	",
    code: {
      hex: "#DB7093",
    },
    id: 4,
  },

  {
    color: "lavenderblush 1 (lavenderblush)	",
    code: {
      hex: "#FFF0F5",
    },
    id: 5,
  },

  {
    color: "violetred 2	",
    code: {
      hex: "#EE3A8C",
    },
    id: 6,
  },

  {
    color: "darkgoldenrod 3",
    code: {
      hex: "#CD950C",
    },
    id: 7,
  },
];
