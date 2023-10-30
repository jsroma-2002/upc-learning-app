import axios from "axios";

export const getResponse = async (
  message: string,
  characterName: string
): Promise<string> => {
  console.log(message);
  const response = await axios.post("http://127.0.0.1:5000/api/chat", {
    sentence: message,
    bot_name: characterName,
  });
  return response.data.response;
};
