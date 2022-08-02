// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fetchMeta from 'fetch-meta-tags';

export default async function hello(req, res) {
  const details = await fetchMeta(req?.body?.websiteUrl);
  res.status(200).send(details);
}
