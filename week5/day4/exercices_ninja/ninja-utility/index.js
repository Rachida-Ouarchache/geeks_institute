import { program } from "commander";
import greet from "./commands/greet.js";
import fetchData from "./commands/fetch.js";
import readFile from "./commands/read.js";

program
  .command("greet")
  .description("Display a colorful greeting message")
  .action(greet);

program
  .command("fetch")
  .description("Fetch data from a public API")
  .action(fetchData);

program
  .command("read <file>")
  .description("Read the content of a specified file")
  .action(readFile);

program.parse(process.argv);
