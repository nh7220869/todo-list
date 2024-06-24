#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let to_do_list = [];
let to_do_loops: boolean = true;

console.log(chalk.yellowBright(" Hi! Wellcome to the to_do_list! I hope you like this list "));

while (to_do_loops) {
	let To_do_list = await inquirer.prompt([


		{
			name: "grocery_items",
			type: "input",
			message: " What do you want to add grocery_items in your to_do_list? ",
		},

		{
			name: "add_more_items",
			type: "confirm",
			message: " Do you want to add_more_items? ",

		},

	]);

	to_do_list.push(To_do_list.grocery_items);
	to_do_loops = To_do_list.add_more_items;
	console.log(to_do_list);
};
 