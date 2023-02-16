const headers = {
  Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
  "Content-Type": "application/json",
};

export default async function handler(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send({ message: "Student email is missing" });
  }

  try {
    // Step 1: Minus 1 available slot
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
      return res.status(401).send({ message: "Slot is not available" });
    }
    await fetch(
      `https://api.airtable.com/v0/appwdcuTEadLSlTYH/tblUPvGgiPIUh3dhT/recxOYvQ7fiQ7sPPv`,
      {
        method: "PUT",
        headers,
        body: JSON.stringify({
          fields: {
            count: latestCount - 1,
          },
        }),
      }
    );

    // Step 2: Add email to student database
    await fetch(
      `https://api.airtable.com/v0/appwdcuTEadLSlTYH/tbleZN2ejVkPUMW7l`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          fields: {
            students: email,
          },
        }),
      }
    );

    res.status(200).json({ message: "Booking success!" });
  } catch (err) {
    res.status(500).send(err);
  }
}
