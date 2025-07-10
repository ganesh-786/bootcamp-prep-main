let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

// YOUR CODE BELOW
function attendanceCheck(day) {
  const presentStudents = [];

  for (const studentRecord of classRoom) {
    const [name, attendanceArray] = Object.entries(studentRecord)[0];

    const dayRecord = attendanceArray.find((record) =>
      record.hasOwnProperty(day)
    );
    if (dayRecord && dayRecord[day]) {
      presentStudents.push(name);
    }
  }

  return presentStudents;
}
