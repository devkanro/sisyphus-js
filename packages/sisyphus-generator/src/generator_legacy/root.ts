import {Namespace, Root} from "protobufjs";
import {writeToFile} from "../utils";
import {generate as namespace} from "./namespace";
import pathModule from "path"

export async function generate(out: string, root: Root) {
    await generateReflectionJson(out, root)
    await generateReflectionTs(out, root)
    await generateIndexTs(out, root)

    for (let reflection of root.nestedArray) {
        if (reflection instanceof Namespace) {
            await namespace(pathModule.join(out, reflection.name), reflection)
        }
    }
}

async function generateReflectionJson(out: string, root: Root) {
    await writeToFile(out, "reflection.json", JSON.stringify(root.toJSON()))
}

async function generateReflectionTs(out: string, root: Root) {
    const file =
        `// Generated by sisyphus web
import protojs from "protobufjs";
import reflectionData from "./reflection.json";

export default protojs.Root.fromJSON(reflectionData)\n`
    await writeToFile(out, "_reflection.ts", file)
}

async function generateIndexTs(out: string, root: Root) {
    let file =
        `// Generated by sisyphus web
import $reflection from "./_reflection"

export {$reflection}\n`
    for (let reflection of root.nestedArray) {
        if (reflection instanceof Namespace) {
            file += `export * as ${reflection.name} from "./${reflection.name}"\n`
        }
    }
    await writeToFile(out, "index.ts", file)
}