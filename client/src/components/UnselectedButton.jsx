import CustomButton from "./stickers/CustomButton";
import PropTypes from "prop-types";

const UnselectedButton = ({ text }) => {
  UnselectedButton.propTypes = {
    text: PropTypes.string.isRequired,
  };
  return (
    <CustomButton
      text={text}
      variant={"outlined"}
      color={"#3DD455"}
      borderColor={"#3DD455"}
      hoverBackground={"#3DD4557F"}
      hoverColor={"white"}
      hoverborderColor={"#3DD455"}
      onClick={() => {}}
    />
  );
};

export default UnselectedButton;
