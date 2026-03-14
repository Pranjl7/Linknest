import axios from "axios";

export async function userchat(req, res) {
  try {
    // const username = req.userid;
    const { role, content } = req.body;

    type messagetype = {
      role: string;
      content: string;
    };
    type payloadtype = {
      model: string;
      messages: messagetype[];
    };
    const payload: payloadtype = {
      model: "stepfun/step-3.5-flash:free",
      messages: [
        {
          role: "system",
          content: `Always format responses using Markdown:
- Use headings
- Use bullet points
- Use numbered lists
- Use tables for comparisons
- Use code blocks for commands
- Keep paragraphs short`,
        },
        {
          role,
          content,
        },
      ],
    };

    const start = Date.now();
    (async () => {
      await axios
        .post("https://openrouter.ai/api/v1/chat/completions", payload, {
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          },
        })
        .then((response) => {
          const diff = ((Date.now() - start)/ 1000).toFixed(1);
          const timeinms = diff + "s";
          const apiresponse = {
            model: response.data.model.split(":free")[0],
            timetaken: timeinms,
            content: response.data.choices[0].message.content,
          };
          console.log(apiresponse);
          res.status(200).json({
            success: true,
            message: apiresponse,
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(502).json({
            success: false,
            message: err.response.data.message,
          });
        });
    })();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong, plz try again.",
    });
  }
}
