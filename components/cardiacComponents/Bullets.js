import React from "react";

function Bullets({
  data,
  desc,
  footerdata,
  head,
  footerTitle,
  ulClass,
  boxClass,
  divClass,
}) {
  return (
    <div className={`${divClass ? divClass : "py-4 space-y-6"}`}>
      {data?.map((data, index) => (
        <div
          className={`border border-[#D84498] rounded-lg shadow-lg p-8 min-h-[250px] ${boxClass ? boxClass : "flex flex-col"}`}

          key={index}
        >
          {data && (
            <h2 className="text-lg font-medium mb-4 text-hciPrimary">
              {data.heading}
            </h2>
          )}

          {desc && (
            <p
              className="font-light mb-4 text-black"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          )}

          {data.description && (
            <p
              className="font-light mb-4 text-black"
              dangerouslySetInnerHTML={{
                __html: data.description ? data.description : "",
              }}
            />
          )}

          {head && (
            <p
              className="font-medium pb-2 text-black"
              dangerouslySetInnerHTML={{ __html: head }}
            />
          )}

          {/* Conditionally render aneurysmSymptoms */}
          {data.aneurysmSymptoms && data.aneurysmSymptoms.length > 0 && (
            data.aneurysmSymptoms.length === 1 ? (
              <div className="text-black font-light">
                <strong>{data.aneurysmSymptoms[0].title}</strong>{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: data.aneurysmSymptoms[0].description || "",
                  }}
                ></span>
              </div>
            ) : (
              <ul
                className={`space-y-4 list-disc ${ulClass ? ulClass : "list-outside"
                  } text-hciSecondary pl-5`}
              >
                {data.aneurysmSymptoms.map((symptom, index) => (
                  <li key={index}>
                    <p className="text-black font-light">
                      <strong>{symptom.title}</strong>{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: symptom.description || "",
                        }}
                      ></span>
                    </p>
                  </li>
                ))}
              </ul>
            )
          )}

          <div className="">
            {footerTitle && (
              <p className="font-semibold text-black">{footerTitle}</p>
            )}
            <p className="font-light text-black">{footerdata}</p>
            {data.footer && (
              <p
                className="font-light mb-4 text-black"
                dangerouslySetInnerHTML={{
                  __html: data.footer ? data.footer : "",
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bullets;
