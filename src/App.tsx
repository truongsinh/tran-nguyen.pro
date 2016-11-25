import * as React from "react";
import * as MyAD from "./a.d";

async function sleep(millesecond: Number): Promise<void> {
	return new Promise<void>((resolve)=>{
		setTimeout(resolve, millesecond);
	});
}

(async function(){
	await sleep(2000);
	// let MyA = await require("await!./a")
	let a = require("await!./a") as Promise<typeof MyAD>;
	console.log("ok")
	;(await a).MyClass.log();
})();

export class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <div>Welcome to hot-reloading React written in TypeScript!</div>
            </div>
        );
    }
}
