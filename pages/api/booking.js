const atbleHeaders = {
  Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
  "Content-Type": "application/json",
};

const sibHeaders = {
  "api-key": process.env.EMAIL_TOKEN,
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default async function handler(req, res) {
  const { email, name, emailParams, title, ownerDate, databaseDate } = req.body;

  try {
    // Step 1: Minus 1 available slot
    console.log("Step 1: Minus 1 available slot");
    const slotRes = await fetch(
      `https://api.airtable.com/v0/appwdcuTEadLSlTYH/tblUPvGgiPIUh3dhT`,
      {
        method: "GET",
        headers: atbleHeaders,
      }
    );
    const slotData = await slotRes.json();
    const latestCount = slotData.records[0].fields.count;
    if (latestCount <= 0) {
      return res
        .status(401)
        .send({ error: true, message: "Slot is not available" });
    }
    await fetch(
      `https://api.airtable.com/v0/appwdcuTEadLSlTYH/tblUPvGgiPIUh3dhT/recxOYvQ7fiQ7sPPv`,
      {
        method: "PUT",
        headers: atbleHeaders,
        body: JSON.stringify({
          fields: {
            count: latestCount - 1,
          },
        }),
      }
    );

    // Step 2: Book a date
    console.log("Step 2: Book a date");
    const dateRes = await fetch(
      `https://api.airtable.com/v0/appwdcuTEadLSlTYH/tbltV7Nsbk1wCcCSo`,
      {
        method: "GET",
        headers: atbleHeaders,
      }
    );
    const dateData = await dateRes.json();
    const latestDates = dateData.records.map((record) => record.fields.date);
    if (latestDates.includes(databaseDate)) {
      return res
        .status(401)
        .send({ error: true, message: "Date is not available" });
    }
    await fetch(
      `https://api.airtable.com/v0/appwdcuTEadLSlTYH/tbltV7Nsbk1wCcCSo`,
      {
        method: "POST",
        headers: atbleHeaders,
        body: JSON.stringify({
          fields: {
            date: databaseDate,
          },
        }),
      }
    );

    // Step 3: Add email to student database
    console.log("Step 3: Add email to student database");
    await fetch(
      `https://api.airtable.com/v0/appwdcuTEadLSlTYH/tbleZN2ejVkPUMW7l`,
      {
        method: "POST",
        headers: atbleHeaders,
        body: JSON.stringify({
          fields: {
            email: email,
            name: name,
            consultation: title,
            date: ownerDate,
          },
        }),
      }
    );

    // Step 4: Send email to recipient & owner
    console.log("Step 4: Add email to student database");
    await fetch(
      `https://api.airtable.com/v0/appwdcuTEadLSlTYH/tbleZN2ejVkPUMW7l`,
      {
        method: "POST",
        headers: atbleHeaders,
        body: JSON.stringify({
          fields: {
            email: email,
            name: name,
            consultation: title,
            date: ownerDate,
          },
        }),
      }
    );

    // Step 5: Send email to recipient
    console.log("Step 5: Send email to recipient");
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
    await fetch("https://api.sendinblue.com/v3/smtp/email", {
      method: "POST",
      headers: sibHeaders,
      body: emailBody,
    });

    // Step 6: Add user to email list
    console.log("Step 6: Add user to email list");
    await fetch("https://api.sendinblue.com/v3/contacts", {
      method: "POST",
      headers: sibHeaders,
      body: JSON.stringify({ email: email }),
    });

    return res.status(200).json({ message: "Booking success!" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      error: true,
    });
  }
}
