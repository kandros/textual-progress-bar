async function main() {
	/* using 20 to make the progress bar length 20 charactes, multiplying by 5 below to arrive to 100  */

	for (let i = 0; i <= 20; i++) {
		const dots = ".".repeat(i);
		const left = 20 - i;
		const empty = " ".repeat(left);

		/* need to use  `process.stdout.write` becuase console.log print a newline character */
		/* \r clear the current line and then print the other characters making it looks like it refresh*/
		process.stdout.write(`\r[${dots}${empty}] ${i * 5}%`);
		await wait(80);
	}
}

main();

function wait(ms) {
	return new Promise(res => setTimeout(res, ms));
}
