import Link from "next/link";

export default function Certificate() {
  return (
    <section className="mt-12">
      <div className="container mx-auto">
        <h1 className="text-md font-semibold">Certificate</h1>
        <div className="flex flex-col mt-6 gap-y-6">
          <CertificateCard />
        </div>
      </div>
    </section>
  );
}

function CertificateCard() {
  return (
    <div className="flex justify-between items-center ">
      <div>
        <Link
          href="https://drive.google.com/file/d/1x7kzrzxjHGyJJsvmDUmNxFTpEGVGElH_/view?usp=sharing"
          className="text-md hover:underline"
          target="_blank"
        >
          Badan Nasional Sertifikasi Profesi
        </Link>
        <h2 className="text-sm text-muted-foreground">Junior Web Developer</h2>
      </div>
      <p>Feb 2024 - Feb 2027</p>
    </div>
  );
}
