import {container} from "./classes"

console.log("Hello World!")

let o = {hi: {wie: {geht: {}, es: {}}}}

let c = new container(o)
let t = c.obj as any
t["hi"]["wie"]["geht"] = "test"

console.log(t["hi"]["wie"]["geht"])
