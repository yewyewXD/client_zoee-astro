const headers = {
  Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
  "Content-Type": "application/json",
};

export default async function handler(req, res) {
  const { email, name, emailParams } = req.body;

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

    // Step 3: Send email to recipient & owner
    const emailBody = JSON.stringify({
      to: [
        {
          email: email,
          name: name,
        },
      ],
      templateId: emailParams.id,
      params: emailParams,
      // {
      //     "orderId": "21739218749832",
      //     "orderDate": "23 Feb 2023 @ 9pm (GMT +11)"
      //     "date": "23 Feb 2023 @ 9pm (GMT +11)"
      // }
    });

    res.status(200).json({ message: "Booking success!" });
  } catch (err) {
    res.status(500).send(err);
  }
}
