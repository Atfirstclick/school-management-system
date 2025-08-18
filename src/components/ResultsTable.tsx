"use client";

export default function ResultsTable() {
  // Buraya veritabanından fetch işlemini ekleyebiliriz.
  // Şimdilik statik dummy veri gösteriyoruz.

  const results = [
    {
      name: "Ahmet Yılmaz",
      exam: "TYT Deneme 1",
      turkce: "30D / 6Y",
      matematik: "25D / 10Y",
      net: 47.5,
    },
    {
      name: "Zeynep Demir",
      exam: "TYT Deneme 1",
      turkce: "28D / 8Y",
      matematik: "20D / 15Y",
      net: 41.25,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Öğrenci</th>
            <th className="p-2 text-left">Sınav</th>
            <th className="p-2 text-left">Türkçe</th>
            <th className="p-2 text-left">Matematik</th>
            <th className="p-2 text-left">Net</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{r.name}</td>
              <td className="p-2">{r.exam}</td>
              <td className="p-2">{r.turkce}</td>
              <td className="p-2">{r.matematik}</td>
              <td className="p-2">{r.net}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
