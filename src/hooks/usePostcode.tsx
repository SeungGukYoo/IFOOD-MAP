import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import useKakaoClientStore from "./useKakaoClientStore";
import useLocationStore from "./useLocationStore";
import useAddress from "./useAddressStore";

const usePostcode = () => {
  const open = useDaumPostcodePopup();
  const { kakaoClient } = useKakaoClientStore();
  const { changeCoordinates } = useLocationStore();
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
    convertLocation(fullAddress);
    changeAddress(fullAddress);
  };

  const convertLocation = async (address: string) => {
    try {
      const locationResult = await kakaoClient.locationSearch(address);
      const { x, y } = locationResult;
      changeCoordinates(parseFloat(y), parseFloat(x));
    } catch (err) {
      console.error(err);
    }
  };
  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return { handleClick };
};

export default usePostcode;
