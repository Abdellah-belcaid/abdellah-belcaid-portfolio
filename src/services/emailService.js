// submitForm.js

export async function sendEmail(data) {
  try {
    const jsonData = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      return { success: true, data: resData };
    } else {
      return { success: false, error: "Error sending message" };
    }
  } catch (error) {
    return { success: false, error: "An error occurred on the server " };
  }
}
