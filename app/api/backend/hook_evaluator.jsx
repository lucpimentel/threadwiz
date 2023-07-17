const HookEvaluator = async (thread) => {
  const url = "https://ai_gen_backend-1-j5603624.deta.app/hook_evaluator";
  const payload = {
    thread: thread,
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

export default HookEvaluator;
