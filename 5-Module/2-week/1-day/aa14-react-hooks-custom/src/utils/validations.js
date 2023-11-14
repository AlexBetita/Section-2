export const textInputValidators = [
  (value) => {
    if (value.length < 3) {
      return { pass: false, msg: "Length must be at least 3." };
    } else {
      return { pass: true };
    }
  },
  (value) => {
    if (value.length > 10){
      return { pass: false, msg: "Length must be not more than 10." };
    } else {
      return { pass: true };
    }
  },
  (value) => {
    if(value){
      if(value[0].toUpperCase() !== value[0]){
        return { pass: false, msg: 'Must start with a capital letter'}
      } else {
        return {pass: true}
      }
    } else {
      return {pass: true}
    }
  }
];


export const textEmailInputValidators = [
  (value) => {
    if (!value.includes('@')) {
      return { pass: false, msg: "Not a valid email" };
    } else {
      return { pass: true };
    }
  },
]