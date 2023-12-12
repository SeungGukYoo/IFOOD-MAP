import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import useAddress from "./useAddressStore";

const usePostcode = () => {
  const open = useDaumPostcodePopup();
  const { changeAddress } = useAddress();
  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress: string = data.address;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    changeAddress(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return { handleClick };
};

export default usePostcode;
