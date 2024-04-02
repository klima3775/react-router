export function apiResponse(url, valueShouldToUpdate) {
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error fetching data");
      }
      return res.json();
    })
    .then((data) => {
      valueShouldToUpdate(data);
    })
    .catch((error) => {
      console.error("Error fetching data", error);
    });
}
