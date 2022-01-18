import { Share } from "react-native";
const shareProduct = async () => {
  try {
    const result = await Share.share({
      message: "Hey! Check this All-in Product out!",
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

export default shareProduct;
