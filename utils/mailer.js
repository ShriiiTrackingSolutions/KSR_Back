require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (
  name,
  companyName,
  email,
  mobile,
  message
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminMailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\Company Name: ${companyName}\nEmail: ${email}\nPhone number: ${mobile}\nMessage: ${message}`,
      replyTo: email,
    };

    await transporter.sendMail(adminMailOptions);

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting Us",
      text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you soon.\n\nBest Regards,\nShriii Tracking Solutions`,
    };

    await transporter.sendMail(userMailOptions);

    return { success: true, message: "Emails sent successfully" };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      message: "Failed to send emails",
      error: error.message,
    };
  }
};






const sendCompanyEmail = async (email, companyName) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to user
    const mailOptions = {
      from: '"KSR International Consultants & Engineers" <your-email@gmail.com>',
      to:  email,
      subject: `Welcome to ${companyName}`,
      text: `Dear Valued Customer,\n\nWelcome to ${companyName}! We are thrilled to have you with us.\n\nBest Regards,\n${companyName}`,
      html : `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        body {
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        table {
          border-spacing: 0;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
        td {
          padding: 0;
        }
        img {
          border: 0;
        }

        .email-content {
          width: 100%;
          max-width: 600px;
          background-color: #ffffff;
          margin: auto;
        }
      </style>

  </head>


  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
     <!--[if (gte mso 9)|(IE)]>
  <table role="presentation" width="600" align="center">
  <tr>
  <td>
  <![endif]-->
        <table width="600px" align="center" style="width: 600px;background-color: #f4f4f4; padding: 20px; text-align: center;" cellpadding="0" cellspacing="0">
        <tr>
            <td>
                <table class="email-content" align="center" style="margin: auto;width: 560px; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="text-align: center; ">
                            <div style="width: 175px;
                            border-radius: 0px;
                            padding: 0px;
                            margin: auto;">
                                <div style="display: flex; justify-content: center">
                                    <img width="100%" src="https://shriiitrackingsolution.in/wp-content/themes/Shrii-Tracking-Solution/image/ShriiTrackingSolutionLogo.png" alt="Shriii Tracking Solution " style="border-radius: 0px">
                                </div>
                            </div>
                            
                            <h2 style="
                            text-align: center;
                            padding: 10px;
                            color: rgb(30, 14, 75);
                            font-size: 22px;
                            font-family: inherit;
                            line-height: 120%;
                            direction: ltr;
                            font-weight: 700;
                            letter-spacing: normal;
                            min-height: 20px;
                            margin: 0px;
                          ">Welcome to Shriii Tracking Solution</h2>
                          <p style="color: rgb(68, 74, 91); direction: ltr; font-family: inherit; font-size: 16px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: left; ">
                            Hi ${companyName},
                          </p>
                          <p style="color: rgb(68, 74, 91); direction: ltr; font-family: inherit; font-size: 16px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: left; ">       
                            Thank you for reaching out to Shriii Tracking Solution. We have received your form submission and appreciate your interest in our services.
                          </p>
                          <p style="color: rgb(68, 74, 91); direction: ltr; font-family: inherit; font-size: 16px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: left; ">                          
                            We look forward to the opportunity to work with you and provide solutions tailored to your needs.
                          </p>
                          <p style="color: rgb(68, 74, 91); direction: ltr; font-family: inherit; font-size: 16px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: left; ">                         
                            Best regards,  
                          </p>
                          <p style="color: rgb(68, 74, 91); direction: ltr; font-family: inherit; font-size: 16px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: left; ">                         
                            Shriii Tracking Solution            
                          </p>
                          <p style="color: rgb(68, 74, 91); direction: ltr; font-family: inherit; font-size: 16px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: left; ">                         
                            https://shriiitrackingsolution.in/          
                          </p>

                        </td>
                    </tr>
                    <tr>
                        <td >
                        
                         <a href="https://shriiitrackingsolutions.github.io/KSR_International/image/dummy.pdf" 
   download="Shriii_Tracking_Solution.pdf" target="_blank"
   style="display: inline-block; padding: 12px 24px; background-color: #5e13b0; 
          color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; 
          border-radius: 5px; text-align: center;">
    Download PDF 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="#909090" d="m24.1 2.072l5.564 5.8v22.056H8.879V30h20.856V7.945z"></path><path fill="#f4f4f4" d="M24.031 2H8.808v27.928h20.856V7.873z"></path><path fill="#7a7b7c" d="M8.655 3.5h-6.39v6.827h20.1V3.5z"></path><path fill="#dd2025" d="M22.472 10.211H2.395V3.379h20.077z"></path><path fill="#464648" d="M9.052 4.534H7.745v4.8h1.028V7.715L9 7.728a2 2 0 0 0 .647-.117a1.4 1.4 0 0 0 .493-.291a1.2 1.2 0 0 0 .335-.454a2.1 2.1 0 0 0 .105-.908a2.2 2.2 0 0 0-.114-.644a1.17 1.17 0 0 0-.687-.65a2 2 0 0 0-.409-.104a2 2 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.193a.57.57 0 0 1 .459.181a.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.94.94 0 0 1-.524.114m3.671-2.306c-.111 0-.219.008-.295.011L12 4.538h-.78v4.8h.918a2.7 2.7 0 0 0 1.028-.175a1.7 1.7 0 0 0 .68-.491a1.9 1.9 0 0 0 .373-.749a3.7 3.7 0 0 0 .114-.949a4.4 4.4 0 0 0-.087-1.127a1.8 1.8 0 0 0-.4-.733a1.6 1.6 0 0 0-.535-.4a2.4 2.4 0 0 0-.549-.178a1.3 1.3 0 0 0-.228-.017m-.182 3.937h-.1V5.392h.013a1.06 1.06 0 0 1 .6.107a1.2 1.2 0 0 1 .324.4a1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a3 3 0 0 1-.033.513a1.8 1.8 0 0 1-.169.5a1.1 1.1 0 0 1-.363.36a.67.67 0 0 1-.416.106m5.08-3.915H15v4.8h1.028V7.434h1.3v-.892h-1.3V5.43h1.4v-.892"></path><path fill="#dd2025" d="M21.781 20.255s3.188-.578 3.188.511s-1.975.646-3.188-.511m-2.357.083a7.5 7.5 0 0 0-1.473.489l.4-.9c.4-.9.815-2.127.815-2.127a14 14 0 0 0 1.658 2.252a13 13 0 0 0-1.4.288Zm-1.262-6.5c0-.949.307-1.208.546-1.208s.508.115.517.939a10.8 10.8 0 0 1-.517 2.434a4.4 4.4 0 0 1-.547-2.162Zm-4.649 10.516c-.978-.585 2.051-2.386 2.6-2.444c-.003.001-1.576 3.056-2.6 2.444M25.9 20.895c-.01-.1-.1-1.207-2.07-1.16a14 14 0 0 0-2.453.173a12.5 12.5 0 0 1-2.012-2.655a11.8 11.8 0 0 0 .623-3.1c-.029-1.2-.316-1.888-1.236-1.878s-1.054.815-.933 2.013a9.3 9.3 0 0 0 .665 2.338s-.425 1.323-.987 2.639s-.946 2.006-.946 2.006a9.6 9.6 0 0 0-2.725 1.4c-.824.767-1.159 1.356-.725 1.945c.374.508 1.683.623 2.853-.91a23 23 0 0 0 1.7-2.492s1.784-.489 2.339-.623s1.226-.24 1.226-.24s1.629 1.639 3.2 1.581s1.495-.939 1.485-1.035"></path><path fill="#909090" d="M23.954 2.077V7.95h5.633z"></path><path fill="#f4f4f4" d="M24.031 2v5.873h5.633z"></path><path fill="#fff" d="M8.975 4.457H7.668v4.8H8.7V7.639l.228.013a2 2 0 0 0 .647-.117a1.4 1.4 0 0 0 .493-.291a1.2 1.2 0 0 0 .332-.454a2.1 2.1 0 0 0 .105-.908a2.2 2.2 0 0 0-.114-.644a1.17 1.17 0 0 0-.687-.65a2 2 0 0 0-.411-.105a2 2 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.194a.57.57 0 0 1 .459.181a.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.94.94 0 0 1-.524.114m3.67-2.306c-.111 0-.219.008-.295.011l-.235.006h-.78v4.8h.918a2.7 2.7 0 0 0 1.028-.175a1.7 1.7 0 0 0 .68-.491a1.9 1.9 0 0 0 .373-.749a3.7 3.7 0 0 0 .114-.949a4.4 4.4 0 0 0-.087-1.127a1.8 1.8 0 0 0-.4-.733a1.6 1.6 0 0 0-.535-.4a2.4 2.4 0 0 0-.549-.178a1.3 1.3 0 0 0-.228-.017m-.182 3.937h-.1V5.315h.013a1.06 1.06 0 0 1 .6.107a1.2 1.2 0 0 1 .324.4a1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a3 3 0 0 1-.033.513a1.8 1.8 0 0 1-.169.5a1.1 1.1 0 0 1-.363.36a.67.67 0 0 1-.416.106m5.077-3.915h-2.43v4.8h1.028V7.357h1.3v-.892h-1.3V5.353h1.4v-.892"></path></svg>
</a>

                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center; padding: 20px;">
                            <p style="color: #444; font-size: 14px;">If you have any urgent queries, feel free to <a href="mailto:contact@shriiitrackingsolutions.com" style="color: #25b325; text-decoration: none;">contact us</a>.</p>
                            <p style="color: #888; font-size: 12px; margin-top: 10px;">© 2025 Shriii Tracking Solution. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
     <!--[if (gte mso 9)|(IE)]>
  </td>
  </tr>
  </table>
  <![endif]-->
</body>
</html>
`,
    };

    await transporter.sendMail(mailOptions);

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New User Registration`,
      text: `A new user has registered with the email: ${email}\nCompany Name: ${companyName}`,

    };

    await transporter.sendMail(adminMailOptions);

    return {
      success: true,
      message: "Company email and admin notification sent successfully",
    };
  } catch (error) {
    console.error("Company email send error:", error);
    return {
      success: false,
      message: "Failed to send company email and admin notification",
      error: error.message,
    };
  }
};

// module.exports = {sendEmail, sendCompanyEmail };

module.exports = { sendEmail, sendCompanyEmail };
