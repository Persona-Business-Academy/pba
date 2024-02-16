// // Download the helper library from https://www.twilio.com/docs/node/install
// // Set environment variables for your credentials
// // Read more at http://twil.io/secure
// const accountSid = 'AC92d2d78e32340d81ab138611243eb1b2';
// const authToken = 'be88ccca5e6f34a3be9ca24d67ca4dbe';
// const verifySid = 'VA5ba146802f7468e18bd765958587cdc4';
// const client = require('twilio')(accountSid, authToken);

// client.verify.v2
//   .services(verifySid)
//   .verifications.create({ to: '+37477239701', channel: 'sms' })
//   .then(verification => console.log(verification.status))
//   .then(() => {
//     const readline = require('readline').createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//     readline.question('Please enter the OTP:', otpCode => {
//       client.verify.v2
//         .services(verifySid)
//         .verificationChecks.create({ to: '+37477239701', code: otpCode })
//         .then(verification_check => console.log(verification_check.status))
//         .then(() => readline.close());
//     });
//   });
