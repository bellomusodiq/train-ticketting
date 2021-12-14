// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  await setTimeout(() => {
    res.status(200).json(req.body);
  }, 2000);
}
