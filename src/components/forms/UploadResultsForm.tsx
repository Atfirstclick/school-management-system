"use client";

export default function UploadResultsForm() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = new FormData();
    form.append("file", e.target.file.files[0]);

    const res = await fetch("/api/upload-exam", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4">
      <input type="file" name="file" accept=".csv" required />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        CSV Yükle
      </button>
    </form>
  );
}
