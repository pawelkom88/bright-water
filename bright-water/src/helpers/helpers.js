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
  ascending: { method: (a, b) => a.name > b.name },
  descending: { method: (a, b) => b.name > a.name },
  price: { method: (a, b) => a.price.raw - b.price.raw },
};
