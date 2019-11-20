let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const sumSalaries = (data) => Object.values(data).reduce((c, p) => c + p, 0);

alert(sumSalaries(salaries));