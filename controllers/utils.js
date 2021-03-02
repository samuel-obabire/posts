export const generateId = () => {
  const characters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  return Array.from(
    { length: 10 },
    (v) => characters[Math.floor(Math.random() * 63)]
  ).join("")
}
