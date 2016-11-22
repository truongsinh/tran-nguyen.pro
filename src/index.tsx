
/// <reference types="systemjs" />
/// <reference path="./proxy.d.ts" />
import * as React from 'react'
import {render} from 'react-dom'
// import {Hello} from './hello'

async function main() {
	let a = System.import('./hello');
	// myLib.Hello
	let Hello = (await a).Hello as myElement.Hello;

	render(
	  <Hello />,
	  document.getElementById('root')
	);

}
main()
