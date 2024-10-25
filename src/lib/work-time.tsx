export const formatDateRange = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Format bulan dan tahun
  const startMonthYear = start.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  const endMonthYear = end.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Mengembalikan rentang tanggal
  return `${startMonthYear} - ${endMonthYear}`;
};
