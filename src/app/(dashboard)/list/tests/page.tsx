"use client";

import UploadResultsForm from "@/components/forms/UploadResultsForm";
import ResultsTable from "@/components/ResultsTable";

// Geçici role mock
const role = "admin";

export default function ResultsListPage() {
  if (role !== "admin") {
    return <p>Yetkiniz yok.</p>;
  }

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Deneme Sınavı Sonuçları</h1>
      <UploadResultsForm />
      <ResultsTable />
    </div>
  );
}
