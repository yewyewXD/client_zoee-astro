export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,thumbnail_url&access_token=${process.env.IG_ACCESS_CODE}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send(err);
  }
}
