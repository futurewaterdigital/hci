import React from "react";
import Link from "next/link";

export default function edgeHCI() {
  return (
    <div className="mt-0 flex flex-col justify-center items-center text-center py-8">
      <div className="pt-0 w-10/12 gap-10">
        <h4 className="text-3xl font-bold pb-10 font-roboto">
          The HCI Edge <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
        </h4>
        <p className="font-light">
          Healthcare organizations joining hands with HCI can benefit in more
          ways than one. Considering that we are a reputed and fast-growing
          medical value travel company partners could leverage our equity
          effectively to deliver services to patients from across geographies.
          They can also have access to information on the latest in equipment,
          processes and expertise, leveraging our ecosystem.
        </p>
        <p className="font-light mt-3 text-[#0E56A0]">
          <Link href="/contact-us">For more information, contact us.</Link>
        </p>
      </div>
    </div>
  );
}
