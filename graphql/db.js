export const people = [
  {
    id: "1",
    name: "Unchaptered",
    age: 18,
    gender: false,
  },
  {
    id: "2",
    name: "Nico",
    age: 30,
    gender: true,
  },
  {
    id: "3",
    name: "HOI",
    age: 20,
    gender: false,
  },
  {
    id: "4",
    name: "ASMR",
    age: 20,
    gender: true,
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
