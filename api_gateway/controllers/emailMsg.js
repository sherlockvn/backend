function getValidateEmail(code) {
  const subject = "Email to validate your register in SEO Hospital";
  const text = `Your validate code is ${code} please fill this code to complete your account.\nNote:This code only exist for 10 mins`;
  return { subject, text };
}

module.exports = {
  getValidateEmail,
};
