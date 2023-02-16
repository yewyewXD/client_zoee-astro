export default async function handler(req, res) {
  const headers = {
    Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
    "Content-Type": "application/json",
  };

  try {
    const slotRes = await fetch(
      `https://api.airtable.com/v0/appwdcuTEadLSlTYH/tblUPvGgiPIUh3dhT`,
      {
        method: "GET",
        headers,
      }
    );
    const slotData = await slotRes.json();
    const latestCount = slotData.records[0].fields.count;

    if (latestCount <= 0) {
      res.status(401).send({ message: "Slot is not available" });
    }

    const editBody = JSON.stringify({
      fields: {
        count: latestCount - 1,
      },
    });

    const editRes = await fetch(
      `https://api.airtable.com/v0/appwdcuTEadLSlTYH/tblUPvGgiPIUh3dhT/recxOYvQ7fiQ7sPPv`,
      {
        method: "PUT",
        headers,
        body: editBody,
      }
    );
    const editData = await editRes.json();

    res.status(200).json(editData);
  } catch (err) {
    res.status(500).send(err);
  }
}
