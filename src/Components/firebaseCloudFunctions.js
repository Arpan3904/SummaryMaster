// firebaseCloudFunctions.js

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

admin.initializeApp();

exports.sendOTP = functions.https.onCall(async (data, context) => {
  const email = data.email;
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
  
  // Save OTP to Firestore or Realtime Database
  await admin.firestore().collection('otp').doc(email).set({ otp: otp.toString() });

  // Send OTP via email
  sgMail.setApiKey('YOUR_SENDGRID_API_KEY');
  const msg = {
    to: email,
    from: 'your@example.com',
    subject: 'Your OTP for Email Verification',
    text: `Your OTP is ${otp}. This OTP is valid for 10 minutes.`,
  };

  await sgMail.send(msg);

  return { success: true };
});
