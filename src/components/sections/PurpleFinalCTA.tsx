import { Button } from "../ui/Button";
import { useIntl } from "react-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowUpRight, MessageCircleIcon, GitBranch, Github } from "lucide-react";
import { DAMUS_APP_STORE_URL, DAMUS_MERCH_STORE_URL, DAMUS_TESTFLIGHT_URL } from "@/lib/constants";
import { PurpleIcon } from "../icons/PurpleIcon";
import { MeshGradient5 } from "../effects/MeshGradient.5";

export function PurpleFinalCTA({ className }: { className?: string }) {
  const intl = useIntl()

  return (<>
    <div className={cn("bg-black overflow-hidden relative", className)}>
      <div className="container mx-auto px-6 pb-24 pt-24">
        <div className="flex flex-col items-center justify-center mt-32 lg:mt-16">
          <div className="relative mb-24 flex flex-col items-center justify-center">
            <div className="absolute pointer-events-none">
              <MeshGradient5 />
            </div>
            <div className="relative w-24 h-24 mb-8 rounded-xl overflow-hidden shadow-xl">
              <PurpleIcon />
            </div>
            <motion.h2 className="mb-8 text-4xl md:text-5xl lg:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-white from-5% to-[#E0A4D3] to-100% font-semibold pb-4 whitespace-pre-line leading-relaxed">
              {intl.formatMessage({ id: "purple.final_cta.headline", defaultMessage: "Get Purple today!" })}
            </motion.h2>
            <motion.div className="text-xl text-center max-w-2xl mb-12 text-transparent bg-clip-text bg-gradient-to-br from-white from-5% to-damuspink-500 to-100% whitespace-pre-line leading-loose">
              {(intl.locale != "ja" || process.env.FORCE_LOAD_ALL_JA_SECTIONS) && (<>
                {intl.formatMessage({ id: "purple.final_cta.subheadline", defaultMessage: "Contribute to the future of the free internet, and look cool doing it." })}
              </>)}
            </motion.div>
            <motion.div
              className="mt-10 md:mt-6 flex flex-col md:flex-row items-center md:items-center gap-y-4 gap-x-6"
              style={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}
            >
              <Link href="#">
                <Button variant="default" className="w-full md:w-auto">
                  {intl.formatMessage({ id: "purple.final_cta.subscribe", defaultMessage: "Subscribe" })}
                </Button>
              </Link>
              <Link href="#" target="_blank">
                <Button variant="link" className="w-full md:w-auto">
                  {intl.formatMessage({ id: "purple.final_cta.open_app", defaultMessage: "Open in Damus" })}
                  <ArrowUpRight className="text-damuspink-600 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </>)
}
