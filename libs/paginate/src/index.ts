
export function paginate(query: Array<Object>, perPage: number = 10): Array<any> {
  let newArray = [{}];
  let mapCounter = 0;

  query.map((entry, index) => {
    Object.keys(newArray[mapCounter]).length < perPage ?
      (newArray[mapCounter][index] = entry) :
      (mapCounter++, newArray.push({}), newArray[mapCounter][index] = entry
    );
  });

  return newArray;
};