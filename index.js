import "dotenv/config"
import cowsay from "cowsay"

console.log(cowsay.say({text : `I am ${process.env.MY_NAME}, living in the ${process.env.CAMPUS}.`}));

