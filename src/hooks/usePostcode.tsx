import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import useAddress from "./useAddressStore";

const usePostcode = () => {
  const open = useDaumPostcodePopup();
  const { changeAddress } = useAddress();
  const handleComplete = (data: Address) => {
    let postAddress = data.jibunAddress || data.address;
    let roadAddress: string = data.address;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        roadAddress += data.bname;
      }
      if (data.buildingName !== "") {
        roadAddress += roadAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
    }
    changeAddress(postAddress, roadAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return { handleClick };
};

export default usePostcode;
