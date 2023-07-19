document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button');
const text = document.querySelector('textarea');

button.addEventListener('click', function () {
  const input = function (value) {
    const finall = value.toLowerCase().split('\n');
    for (let n of finall) {
      n = n.trim().indexof('_');
      console.log(n);
    }
  };
  input(text.value);
});

// underscore_case;
// first_name;
// next_Variable;
// Calculate_AGE;
// arrived_flight;
