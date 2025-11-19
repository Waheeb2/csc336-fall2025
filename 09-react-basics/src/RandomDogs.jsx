import { useEffect, useState } from "react";

function ApiPage() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDog() {
      try {
        const response = await fetch(
          "https://dog.ceo/api/breeds/image/random"
        );
        const data = await response.json();
        setDogImage(data.message);
      } catch (error) {
        console.error("Error fetching dog image:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDog();
  }, []);

  return (
    <div>
      <h1>Random Dog</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <img 
          src={dogImage} 
          alt="Random Dog" 
          style={{ width: "300px", borderRadius: "8px" }}
        />
      )}
    </div>
  );
}

export default ApiPage;
