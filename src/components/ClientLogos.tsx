import choithrams from "@/assets/clients/choithrams.png";
import sriGowrish from "@/assets/clients/sri-gowrish.png";
import parrys from "@/assets/clients/parrys.png";
import wipro from "@/assets/clients/wipro.png";
import ibm from "@/assets/clients/ibm.png";
import nttData from "@/assets/clients/ntt-data.png";
import gmmco from "@/assets/clients/gmmco.png";
import mhh from "@/assets/clients/mhh.png";
import dhaksha from "@/assets/clients/dhaksha.png";
import jkFenner from "@/assets/clients/jk-fenner.png";

const logos = [
  { src: choithrams, alt: "Choithrams" },
  { src: sriGowrish, alt: "Sri Gowrish CNC" },
  { src: parrys, alt: "Parrys" },
  { src: wipro, alt: "Wipro" },
  { src: ibm, alt: "IBM" },
  { src: nttData, alt: "NTT Data" },
  { src: gmmco, alt: "GMMCO" },
  { src: mhh, alt: "MHH" },
  { src: dhaksha, alt: "Dhaksha Drones" },
  { src: jkFenner, alt: "JK Fenner" },
];

export default function ClientLogos() {
  return (
    <section className="py-10 bg-secondary/50 border-y border-border overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[.2em] text-muted-foreground mb-8">
        Trusted by Industry Leaders
      </p>
      <div className="relative">
        <div className="flex w-max" style={{ animation: "ticker 35s linear infinite" }}>
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-10 shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
