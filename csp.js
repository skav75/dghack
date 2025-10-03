const next = encodeURIComponent("https://skavens.free.beeceptor.com/gg");
fetch(`/logout?next=${next}`, {
  method: "GET",
  credentials: "include",   // envoie les cookies (session)
  redirect: "follow",
})
