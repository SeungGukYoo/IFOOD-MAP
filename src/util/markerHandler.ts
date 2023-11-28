export default function imageHandler(type: string | null) {
  let ImagePath: string;

  switch (type) {
    case "한식":
      ImagePath = "bibimbap.png";
      break;
    case "양식":
      ImagePath = "pizza.png";
      break;
    case "동남아":
      ImagePath = "noodle-2.png";
      break;
    case "인도/중동":
      ImagePath = "curry.png";
      break;
    case "카페":
    case "까페":
      ImagePath = "coffee.png";
      break;
    case "분식":
      ImagePath = "tteokbokki.png";
      break;
    case "중국식":
      ImagePath = "noodle-1.png";
      break;
    case "베이커리":
    case "제과점영업":
      ImagePath = "waffles.png";
      break;
    case "술집":
      ImagePath = "beer.png";
      break;
    case "정육점":
      ImagePath = "meat.png";
      break;
    default:
      ImagePath = "food.png";
      break;
  }
  return ImagePath;
}
