import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

/**
 *
 * Function with code containing share options
 * Right now the options for sharing are: E-mail, Twitter, Whatsapp, Facebook
 * NOTE: Facebook won't work with localhost, but will work with other domains like www.giftle.nl
 * @returns front-end popup message if boolean isPopUp is true else returns null
 */
const ShareMenu = (props) => {
  const url = props.url || "";
  const message = props.message || "";
  const iconSize = props.iconSize || 30;

  if (props.isOpen) {
    return (
      <span className="popuptext" id="myPopup">
        <div className="icon-container">
          <div className="icon">
            <EmailShareButton url={url} subject="Giftle video" body={message}>
              <EmailIcon size={iconSize} round={true} />
            </EmailShareButton>
          </div>
          <div className="icon">
            <TwitterShareButton url={url} title={message}>
              <TwitterIcon size={iconSize} round={true} />
            </TwitterShareButton>
          </div>
          <div className="icon">
            <FacebookShareButton url={url} quote={message}>
              <FacebookIcon size={iconSize} round={true} />
            </FacebookShareButton>
          </div>
          <div className="icon">
            <WhatsappShareButton url={url} title={message}>
              <WhatsappIcon size={iconSize} round={true} />
            </WhatsappShareButton>
          </div>
        </div>
      </span>
    );
  } else {
    return null;
  }
};

export default ShareMenu;
