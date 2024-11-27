export default async function handler(req, res) {
  const { body } = req;

  await fetch(
    'https://discord.com/api/webhooks/1310879401558147112/ZH2WMjC_tp7CBUP_uxSGyr2rpM_DiHre6lb4KCnvku9KAR-mViB7eLElfSBZsqj3DYAS',
    { method: 'POST', body: JSON.stringify({ content: 'hello world' }) },
  );
  return res.send(`Hello ${body.name}, you just parsed the request body!`);
}
