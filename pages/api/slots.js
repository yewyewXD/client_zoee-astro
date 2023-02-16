export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/appwdcuTEadLSlTYH/tblUPvGgiPIUh3dhT`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    res.status(200).json(data.records[0].fields);
  } catch (err) {
    res.status(500).send(err);
  }
}
