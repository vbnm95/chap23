import repl from "repl";

repl.start({
	prompt: "숫자입력>> ",
	eval: (command, x, y, finish) => {
		console.log(command);
		command = Number(command);
		if(isNaN(command))
			console.log("숫자가 아닙니다");
		else
			console.log("숫자입니다");
		
		finish();
	}
	
});

console.log("Program End...");