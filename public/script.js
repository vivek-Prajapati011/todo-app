document.addEventListener("DOMContentLoaded", () => {
  const deleteButtons = document.querySelectorAll("button[data-id]");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const id = button.dataset.id;
      const response = await fetch(`/todos/${id}`, { method: "DELETE" });

      if (response.ok) {
        console.log("Deleted todo");
        button.closest("li").remove();
      } else {
        const data = await response.json();
        console.error("Delete failed:", data);
      }
    });
  });
});
