// import { getDefaultChangelog } from "./mod.ts";

async function handleRequest(req) {

console.log(req)
/*
const [ repo, head ] = req.url.split('/')

const changelog = await getDefaultChangelog(
  { name: repo, base, head },
  { name, tag, date },
);
*/
return new Response(
    'OK',
    {
      status: 200,
      headers: {
        "content-type": "text/markdown; charset=UTF-8",
      },
    },
  );
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
