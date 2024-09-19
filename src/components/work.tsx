export default function Work() {
  return (
    <section className="mt-12" id="work">
      <div className="container mx-auto">
        <h1 className="text-md font-semibold">Work Experience</h1>
        <div className="flex flex-col mt-6 gap-y-6">
          <WorkCard />
        </div>
      </div>
    </section>
  );
}

function WorkCard() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <h1 className="text-md">Puskomedia Indonesia Kreatif</h1>
        <h2 className="text-sm text-muted-foreground">Web Developer Intern</h2>
        <ul className="ml-8 mt-2 max-w-lg">
          <li className="list-disc">
            Membuat fitur geolokasi dengan peta data wilayah pada website Panda
            SID (Sistem Informasi Desa) menggunakan framework Code Igniter
          </li>
          <li className="list-disc">
            Memperbaiki query database pada fitur PKH (Program Keluarga Harapan)
            dengan SQL dan menampilkan data dari database dalam bentuk grafik
            menggunakan laravel dan highcharts.
          </li>
        </ul>
      </div>
      <p className="items-start">Aug 2022 - Sep 2022</p>
    </div>
  );
}
