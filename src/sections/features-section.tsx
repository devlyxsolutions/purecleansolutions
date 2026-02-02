import SectionTitle from "../components/section-title";
import { ZapIcon } from "lucide-react";
import { useState } from "react";

export default function FeaturesSection() {
    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <div className="mt-10">
                <SectionTitle
                    icon={<ZapIcon className="size-4 stroke-green-600" />}
                    badge="Our Services"
                    title="Professional Cleaning Solutions"
                    description="From homes to offices, Pure Clean Solutions provides reliable, eco-friendly, and affordable cleaning services tailored to your needs."
                />
            </div>
            <div id="features" className="flex flex-col md:flex-row items-center justify-center scroll-m-48">
                <img
                    className="max-w-2xl w-full xl:-ml-32 mb-8 md:mb-0"
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
                    alt="Cleaning service"
                />
                <div className="max-md:px-4 max-md:pb-32" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>

                    {/* Residential Cleaning */}
                    <div className={"flex items-center justify-center gap-6 max-w-md group cursor-pointer mb-4"}>
                        <div className={`p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors ${!isHover ? 'border-green-300 bg-green-100' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-green-600">
                                <path d="M3 9.75V21h18V9.75L12 3 3 9.75z" />
                            </svg>
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Residential Cleaning</h3>
                                <p className="text-sm text-slate-600 max-w-xs">
                                    Complete cleaning for homes, apartments, and condos, ensuring a spotless and healthy living space.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Commercial Cleaning */}
                    <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer mb-4">
                        <div className="p-6 group-hover:bg-teal-100 border border-transparent group-hover:border-teal-300 flex gap-4 rounded-xl transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-teal-600">
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                            </svg>
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Commercial Cleaning</h3>
                                <p className="text-sm text-slate-600 max-w-xs">
                                    Office, retail, and business cleaning with professional, eco-friendly solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Specialized Services */}
                    <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
                        <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
                            <svg className="size-6 stroke-orange-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" />
                            </svg>
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Specialized Services</h3>
                                <p className="text-sm text-slate-600 max-w-xs">
                                    Carpet, window, and deep-cleaning services to handle tough spots and maintain pristine environments.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
