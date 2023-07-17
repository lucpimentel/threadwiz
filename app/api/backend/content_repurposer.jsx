const ContentRepurposer = async (content) => {
    const url = "https://ai_gen_backend-1-j5603624.deta.app/content_repurposer";
    const payload = {
      content: content,
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  
  export default ContentRepurposer;
  