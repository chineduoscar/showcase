const sendMessage = async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    const data = await Contact.create({
      fullName,
      email,
      message,
    });

    res.status(201).json({ message: "Message sent successfully", data });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const getAllMessages = async (req, res) => {
  try {
    const data = await Contact.find();
    res.status(200).json({
      message: "All messages loaded!",
      data: data,
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export { sendMessage, getAllMessages };
