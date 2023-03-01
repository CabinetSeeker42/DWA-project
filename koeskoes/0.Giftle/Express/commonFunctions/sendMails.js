const nodemailer = require("nodemailer");
const mailTextCode = require("../mailTemplates/mailTextCode");
const mailVideoWatched = require("../mailTemplates/mailVideoWatched");
const mailUploadReminder = require("../mailTemplates/mailUploadReminder");
const mailOrderPlaced = require("../mailTemplates/mailOrderPlaced");
const mailTextReaction = require("../mailTemplates/mailTextReaction");
const mailVideoReaction = require("../mailTemplates/mailVideoReaction");

/**
 * This class adds the ability to send mails via an SMTP server.
 * It will send multiple presets that have been built specifically for this application.
 */
class MailModule {
  constructor() {
    this.transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAILUSERNAME,
        pass: process.env.EMAILPASSWORD,
      },
    });
  }

  /**
   *
   * @param {string} to
   * @param {string} firstNameBuyer
   * @param {string} lastNameBuyer
   * @param {string} firstNameReceiver
   * @param {string} lastNameReceiver
   * @param {string} textCode
   */
  sendTextCode = async (
    to,
    firstNameBuyer,
    lastNameBuyer,
    firstNameReceiver,
    lastNameReceiver,
    textCode
  ) => {
    if (to === "null" || !to)
      return { status: "error", message: "Mail not included" };
    if (!firstNameBuyer)
      return { status: "error", message: "Firstname buyer not included" };
    if (!lastNameBuyer)
      return { status: "error", message: "Lastname buyer not included" };
    if (!firstNameReceiver)
      return { status: "error", message: "Firstname receiver not included" };
    if (!lastNameReceiver)
      return { status: "error", message: "Lastname receiver not included" };
    if (!textCode) return { status: "error", message: "Textcode not included" };

    try {
      const mailInfo = await this.transport.sendMail({
        from: '"Giftle.nl" info@giftle.nl',
        to: to,
        subject: `Giftle - ${firstNameBuyer} ${lastNameBuyer} heeft jou een videoboodschap gestuurd!`,
        html: mailTextCode(
          firstNameBuyer,
          lastNameBuyer,
          firstNameReceiver,
          lastNameReceiver,
          textCode
        ),
      });

      return { status: "success", message: mailInfo };
    } catch (e) {
      return { status: "error", message: e };
    }
  };

  /**
   *
   * @param {string} to
   * @param {string} firstNameBuyer
   * @param {string} lastNameBuyer
   * @param {string} firstNameReceiver
   * @param {string} lastNameReceiver
   */
  sendReminderVideoWatched = async (
    to,
    firstNameBuyer,
    lastNameBuyer,
    firstNameReceiver,
    lastNameReceiver
  ) => {
    if (!to) return { status: "error", message: "Mail not included" };
    if (!firstNameBuyer)
      return { status: "error", message: "Firstname buyer not included" };
    if (!lastNameBuyer)
      return { status: "error", message: "Lastname buyer not included" };
    if (!firstNameReceiver)
      return { status: "error", message: "Firstname receiver not included" };
    if (!lastNameReceiver)
      return { status: "error", message: "Lastname receiver not included" };

    try {
      const mailInfo = await this.transport.sendMail({
        from: '"Giftle.nl" info@giftle.nl',
        to: to,
        subject: "Giftle - Jouw videoboodschap is ontvangen en bekeken!",
        html: mailVideoWatched(
          firstNameBuyer,
          lastNameBuyer,
          firstNameReceiver,
          lastNameReceiver
        ),
      });

      return { status: "success", message: mailInfo };
    } catch (e) {
      return { status: "error", message: e };
    }
  };

  /**
   *
   * @param {string} to
   * @param {string} firstNameBuyer
   * @param {string} lastNameBuyer
   * @param {string} textCode
   */
  sendReminderUploadVideo = async (
    to,
    firstNameBuyer,
    lastNameBuyer,
    textCode
  ) => {
    if (!to) return { status: "error", message: "Mail not included" };
    if (!firstNameBuyer)
      return { status: "error", message: "Buyer firstname not included" };
    if (!lastNameBuyer)
      return { status: "error", message: "Buyer lastname not included" };
    if (!textCode) return { status: "error", message: "Textcode not included" };

    try {
      const mailInfo = await this.transport.sendMail({
        from: '"Giftle.nl" info@giftle.nl',
        to: to,
        subject: "Giftle - Je hebt nog geen videoboodschap geüpload!",
        html: mailUploadReminder(firstNameBuyer, lastNameBuyer, textCode),
      });

      return { status: "success", message: mailInfo };
    } catch (e) {
      return { status: "error", message: e };
    }
  };

  /**
   *
   * @param {string} to
   * @param {string} firstNameBuyer
   * @param {string} lastNameBuyer
   * @param {string} textCode
   */
  sendMailOrderPlaced = async (to, firstNameBuyer, lastNameBuyer, textCode) => {
    if (!to) return { status: "error", message: "Mail not included" };
    if (!firstNameBuyer)
      return { status: "error", message: "Firstname buyer not included" };
    if (!lastNameBuyer)
      return { status: "error", message: "Lastname buyer not included" };

    try {
      const mailInfo = await this.transport.sendMail({
        from: '"Giftle.nl" info@giftle.nl',
        to: to,
        subject: "Giftle - Bedankt voor je bestelling!",
        html: mailOrderPlaced(firstNameBuyer, lastNameBuyer, textCode),
      });

      return { status: "success", message: mailInfo };
    } catch (e) {
      return { status: "error", message: e };
    }
  };

  /**
   *
   * @param {string} to
   * @param {string} firstNameBuyer
   * @param {string} lastNameBuyer
   * @param {string} firstNameReceiver
   * @param {string} lastNameReceiver
   * @param {string} textCode
   */
  sendTextReaction = async (
    to,
    firstNameBuyer,
    lastNameBuyer,
    firstNameReceiver,
    lastNameReceiver,
    textCode
  ) => {
    if (!to) return { status: "error", message: "Mail not included" };
    if (!firstNameBuyer)
      return { status: "error", message: "Firstname buyer not included" };
    if (!lastNameBuyer)
      return { status: "error", message: "Lastname buyer not included" };
    if (!firstNameReceiver)
      return { status: "error", message: "Firstname receiver not included" };
    if (!lastNameReceiver)
      return { status: "error", message: "Lastname receiver not included" };
    if (!textCode) return { status: "error", message: "Textcode not included" };

    try {
      const mailInfo = await this.transport.sendMail({
        from: '"Giftle.nl" info@giftle.nl',
        to: to,
        subject: "Giftle - Tekstreactie ontvangen!",
        html: mailTextReaction(
          firstNameBuyer,
          lastNameBuyer,
          firstNameReceiver,
          lastNameReceiver,
          textCode
        ),
      });

      return { status: "success", message: mailInfo };
    } catch (e) {
      return { status: "error", message: "ERROR:" + e };
    }
  };

  /**
   *
   * @param {string} to
   * @param {string} firstNameBuyer
   * @param {string} lastNameBuyer
   * @param {string} firstNameReceiver
   * @param {string} lastNameReceiver
   * @param {string} textCode
   */
  sendVideoReaction = async (
    to,
    firstNameBuyer,
    lastNameBuyer,
    firstNameReceiver,
    lastNameReceiver,
    textCode
  ) => {
    if (!to) return { status: "error", message: "Mail not included" };
    if (!firstNameBuyer)
      return { status: "error", message: "Firstname buyer not included" };
    if (!lastNameBuyer)
      return { status: "error", message: "Lastname buyer not included" };
    if (!firstNameReceiver)
      return { status: "error", message: "Firstname receiver not included" };
    if (!lastNameReceiver)
      return { status: "error", message: "Lastname receiver not included" };
    if (!textCode) return { status: "error", message: "Textcode not included" };

    try {
      const mailInfo = await this.transport.sendMail({
        from: '"Giftle.nl" info@giftle.nl',
        to: to,
        subject: "Giftle - Videoreactie ontvangen!",
        html: mailVideoReaction(
          firstNameBuyer,
          lastNameBuyer,
          firstNameReceiver,
          lastNameReceiver,
          textCode
        ),
      });

      return { status: "success", message: mailInfo };
    } catch (e) {
      return { status: "error", message: e };
    }
  };
}

module.exports = MailModule;
