const data = new FormData();

data.append("grant_type", "client_credentials");
data.append("client_id", <string> Deno.env.get("CLIENT_ID"));
data.append("client_secret", <string> Deno.env.get("CLIENT_SECRET"));
data.append("scope", "https://a-jira.azurewebsites.net/.default");

console.log(data);

let res = await fetch(
  "https://login.microsoftonline.com/quest.com/oauth2/v2.0/token",
  {
    method: "POST",
    body: data,
  },
);

let token = await res.json();
console.log(token);

let products = await fetch("https://a-jira.azurewebsites.net/api/products", {
  headers: { Authorization: `Bearer ${token.access_token}` },
});

console.log(await products.json());
