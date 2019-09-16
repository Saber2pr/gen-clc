#!/usr/bin/env node

/*
 * @Author: saber2pr
 * @Date: 2019-09-16 10:31:52
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-09-16 10:40:55
 */
import { Utils, Terminal, FS } from "@saber2pr/node"

const [input] = Terminal.getParams()

async function main() {
  if (await FS.stat(input, "dir")) {
    const files = await FS.search(input)
    await Promise.all(files.map(Utils.clean))
  } else {
    await Utils.clean(input)
  }
}

main().catch(console.log)
