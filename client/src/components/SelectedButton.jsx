import PropTypes from "prop-types";
import CustomButton from "./stickers/CustomButton";

const SelectedButton = ({ text }) => {
  SelectedButton.propTypes = {
    text: PropTypes.string.isRequired,
  };
  return (
    <CustomButton
      variant="outlined"
      text={text}
      color="white"
      background="#3DD455"
      borderColor="#3DD455"
      hoverBackground="#3DD4557F"
      hoverborderColor="#3DD455"
      hoverColor="#3DD455"
      onClick={() => {}}
    />
  );
};

export default SelectedButton;
