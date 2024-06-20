"use client";
import Script from "next/script";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Home = () => {
  return (
    <>
      <Script
        type="module"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
         import mermaid from "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs";
         mermaid.initialize({startOnLoad: true});
         mermaid.contentLoaded();`,
        }}
      />
      <TransformWrapper limitToBounds={false} centerOnInit={true}>
        <TransformComponent>
          <div className="w-full h-full mt-10">
            <pre className="mermaid">{`flowchart LR
    A["Aici are voie facturarea"]  --> B["Aici are voie dispeceratul"]
    B --> C["Aici are voie tehnicianul"]
    C --> D["Aici are voie facturarea"]
    D --> E["Aici are voie tehnicianul"]
    E --> F["Aici are voie dispeceratul"]

    click B "/dispecerat"
`}</pre>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </>
  );
};

export default Home;
