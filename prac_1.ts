import { readLines } from "https://deno.land/std/io/mod.ts";

async function greetUser() {
  console.log("名前を入力してください:");

  for await (const line of readLines(Deno.stdin)) {
    let name = line.trim();
    let message = '';

    if (name === 'はるき') {
      message = 'おかえりなさい、アーキテクト';
    } else {
      message = `こんにちは、${name}さん！`;
    }

    console.log(message);
    break;
  }
}

greetUser();
