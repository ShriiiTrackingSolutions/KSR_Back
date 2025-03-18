const { sendCompanyEmail } = require("../utils/mailer");

const handleCompanyEmail = async (req, res) => {
  const { email, companyName } = req.body;
  try {
    if (!email || !companyName) {
      return res.status(400).json({
          success: false,
          message: "Email and company name are required.",
        });
    }

    const result = await sendCompanyEmail(email, companyName);

    if (result.success) {
      return res.status(200).json({ success: true, message: result.message });
    } else {
      return res.status(500).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error("API error:", error);
    return res.status(500)  .json({
        success: false,
        message: "An error occurred while sending the email.",
        error: error.message,
      });
  }
};

module.exports = handleCompanyEmail;



