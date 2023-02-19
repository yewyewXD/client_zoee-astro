export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/appwdcuTEadLSlTYH/tbltV7Nsbk1wCcCSo`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    res.status(200).json(data.records.map((record) => record.fields.date));
  } catch (err) {
    res.status(500).send(err);
  }
}
