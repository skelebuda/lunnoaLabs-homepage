'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '../../ui/button';
import Highlight from '../../ui/highlight';
import Title from '../../ui/title';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import Image from 'next/image';
import icon_1 from "../../../../public/images/shapes/approach-icon4-1.png";
import icon_2 from "../../../../public/images/shapes/approach-icon4-2.png";
import icon_4 from "../../../../public/images/shapes/approach-icon4-4.png";
import icon_5 from "../../../../public/images/shapes/approach-icon4-5.png";
import SlideUp from '../../animations/slideUp';
import { clientProfiles } from '@/lib/fackData/clientProfiles'
import Lottie from "lottie-react";
import animationData1 from '/public/images/lottie/profile_analyze.json'
import animationData2 from '/public/images/lottie/search_documents.json'
import animationData3 from '/public/images/lottie/writing.json'
import animationData4 from '/public/images/lottie/recording.json'
import AudioPlayer from './audioPlayer';
import Link from 'next/link';



// Updated tab content to reflect enterprise features
const tabContent = {
    investment_profile: {
        title: "Enterprise CRM Integration",
        description: "Seamlessly integrate with your existing CRM systems including Salesforce, Microsoft Dynamics, and other major platforms. Automatically fetch client profiles, preferences, and relationship history to create truly personalized content.",
        lottiePath: "/images/lottie/profile_analyze.json"
    },
    cms: {
        title: "Corporate Content Management",
        description: "Leverage your institution's content management system to source the latest market insights, research reports, and branded materials. Our system ensures all content aligns with your compliance requirements and brand guidelines.",
        lottiePath: "/images/lottie/"
    },
    writing: {
        title: "Brand-Aligned Script Creation",
        description: "Generate scripts that incorporate your institution's tone of voice, marketing messaging, and relationship manager's personal touch. Each script is tailored to reflect your brand philosophy while maintaining compliance standards.",
        lottiePath: "/images/lottie/"
    },
    recording: {
        title: "Professional Audio Production",
        description: "Create premium audio content using your relationship managers' voices or professional voice talents. Add custom intro/outro music, sound effects, and branded audio elements to deliver a polished, professional podcast.",
        lottiePath: "/images/lottie/"
    }
};

const tabList = [
    {
        id: "investment_profile",
        tab_name: "Query Client Data",
        tab_icon: icon_2,
        tab_content: "/images/resource/approach-image4-1.jpg",
        lottiePath: animationData1
    },
    {
        id: "cms",
        tab_name: "Content Selection",
        tab_icon: icon_4,
        tab_content: "/images/resource/approach-image4-2.jpg",
        lottiePath: animationData2
    },
    {
        id: "writing",
        tab_name: "Script Creation",
        tab_icon: icon_5,
        tab_content: "/images/resource/approach-image4-1.jpg",
        lottiePath: animationData3
    },
    {
        id: "recording",
        tab_name: "Audio Production",
        tab_icon: icon_1,
        tab_content: "/images/resource/approach-image4-2.jpg",
        lottiePath: animationData4
    }
];



const Podcast = () => {
    const [showPlayer, setShowPlayer] = useState(false);
    const [processingComplete, setProcessingComplete] = useState(false);
    const [selectedProfileId, setSelectedProfileId] = useState(null);
    const [currentStep, setCurrentStep] = useState(null);
    const [progress, setProgress] = useState(0);
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState(null);
    const [audioUrl, setAudioUrl] = useState(null);
    const [stepComplete, setStepComplete] = useState(false);
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        console.log('Debug States:', {
            currentStep,
            processingComplete,
            selectedProfileId,
            showPlayer,
            isGenerating
        });
    }, [currentStep, processingComplete, selectedProfileId, showPlayer, isGenerating]);

    useEffect(() => {    
        let progressInterval;
        if (isGenerating && currentStep) {
            setProgress(0);
            setStepComplete(false);
    
            if (!activeTab) {
                setActiveTab(currentStep);
            }
            
            progressInterval = setInterval(() => {
                setProgress(prev => {
                    const newProgress = prev + 2;
                    if (newProgress >= 100) {
                        clearInterval(progressInterval);
                        setStepComplete(true);
                        
                        if (currentStep === "recording") {
                            setProcessingComplete(true);
                            // Remove the nested setTimeout and directly set showPlayer
                            setShowPlayer(true);
                            setActiveTab("recording");
                        } else {
                            setTimeout(() => {
                                setProgress(0);
                                setStepComplete(false);
                                const currentIndex = tabList.findIndex(tab => tab.id === currentStep);
                                if (currentIndex < tabList.length - 1) {
                                    setCurrentStep(tabList[currentIndex + 1].id);
                                }
                            }, 1000);
                        }
                        return 100;
                    }
                    return newProgress;
                });
            }, 100);
        }
    
        return () => {
            if (progressInterval) {
                clearInterval(progressInterval);
            }
        };
    }, [currentStep, isGenerating]);
    
    const generatePodcast = async (profileData) => {
        if (!profileData) {
            setError("Please select a client profile first");
            return;
        }
    
        setIsGenerating(true);
        setError(null);
    
        try {
            // Simulate API progress steps
            for (const step of tabList) {
                setCurrentStep(step.id);
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
            
        } catch (err) {
            console.error("Error fetching audio:", err);
            setError(err.message);
        }
    };

    const handleCardClick = (profile) => {
        if (isGenerating) return;
        setSelectedProfileId(profile.id); // This should now pass the numeric ID (1, 2, or 3)
        generatePodcast(profile);
    };

    return (
        <section className="py-25 pt-15">
            <div className="max-w-[1350px] mx-auto px-[15px]">
                <SlideUp>
                    <div className="flex flex-col items-center">
                        <Button variant="secondary">
                            {isGenerating ? "🎙️ Live from the AI Studio" : "Enterprise Solution"}
                        </Button>
                        <Title size="5xl" className="max-w-[872px] pt-6 text-center">
                            {isGenerating ? (
                                <>
                                    <Highlight>Lights, Camera, AI!</Highlight> Our digital crew is crafting the perfect podcast
                                </>
                            ) : (
                                <>
                                    <Highlight>Try our</Highlight> Podcast Generation for Financial Institutions
                                </>
                            )}
                        </Title>
                        {isGenerating && (
                            <p className="text-lg text-muted-foreground mt-4 text-center animate-pulse">
                                Our AI producers are mixing insights with personality. Stay tuned!
                            </p>
                        )}
                    </div>
                </SlideUp>

                {!currentStep && (
                    <div className="flex flex-col items-center gap-8 mt-12">
                        <div className="text-center max-w-2xl">
                            <h3 className="text-2xl font-semibold mb-4">Experience Our Enterprise Podcast Solution</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Select a client profile to see how our system creates personalized podcasts using your CRM data, content management system, and brand voice.
                            </p>
                        </div>
                        <div className='max-w-[1350px] mx-auto px-[15px]'>
                            <div>
                                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5 pt-12.5'>
                                    {clientProfiles.map((profile) => {
                                        const isSelected = selectedProfileId === profile.id;
                                        return(
                                            <SlideUp key={profile.id}>
                                                <div 
                                                    className={`bg-gray rounded-2.5xl py-12.5 transition-all duration-300 transform cursor-pointer
                                                        ${isSelected ? 'ring-2 ring-primary scale-[1.02]' : 'hover:scale-[1.01]'}
                                                        ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                    onClick={() => handleCardClick(profile)}
                                                >
                                                    <div className='px-7.5'>
                                                        <div className='flex justify-center items-center'>
                                                            <h5 className='text-2xl font-extrabold text-muted-foreground'>{profile.client_name}</h5>
                                                        </div>
                                                    </div>
                                                    <div className='px-7.5'>
                                                        <div className='pt-9'>
                                                            <h5 className='lg:text-1xl text-xl font-semibold text-muted-foreground'>Client Characteristics:</h5>
                                                            <ul className='flex flex-col gap-2 pt-2'>
                                                                {profile.characteristics.map((char) => (
                                                                    <li key={char.id} className='flex items-center gap-2'>
                                                                        <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt="check icon" />
                                                                        <span className='lg:text-lg text-base'>{char.character}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="pt-15 w-full">
                                                            <Button 
                                                                size={"lg"} 
                                                                className={`max-h-[64px] w-full group ${isSelected ? 'bg-primary text-white hover:bg-primary/90' : ''}`}
                                                                variant={isSelected ? "default" : "outline"}
                                                            >
                                                                {isSelected ? (
                                                                    <>
                                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                                        Generating...
                                                                    </>
                                                                ) : (
                                                                    "Generate Podcast"
                                                                )}
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SlideUp>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {currentStep && (
                    <div className="lg:pt-20 pt-8">
                        <Tabs value={activeTab || currentStep} onValueChange={setActiveTab}>
                            <TabsList className="bg-transparent justify-between lg:flex-nowrap flex-wrap xl:gap-5 gap-2 w-full">
                                {tabList.map(({ id, tab_icon, tab_name, index }) => {
                                    const currentStepIndex = tabList.findIndex(tab => tab.id === currentStep);
                                    const thisTabIndex = tabList.findIndex(tab => tab.id === id);
                                    
                                    return (
                                        <TabsTrigger
                                            key={id}
                                            value={id}
                                            className="relative dark:bg-[#1c242b] rounded-[10px] lg:basis-[20%] md:basis-[25%] sm:basis-[33%] basis-1/2 grow xl:px-6 px-2 xl:py-4 py-2 whitespace-normal text-start xl:gap-5 gap-1 overflow-hidden"
                                        >
                                                                                    {(() => {
                                            const isCompleted = thisTabIndex < currentStepIndex || (id === currentStep && stepComplete);
                                            const isLastStep = id === "recording" && processingComplete;
                                            const isLastStepComplete = id === "recording" && isLastStep;

                                            return (
                                                <div 
                                                    className={`absolute inset-0 transition-all duration-300 ease-linear ${
                                                        isLastStepComplete ? 'bg-green-500' : 'bg-primary'
                                                    } opacity-40`}
                                                    style={{ 
                                                        width: isCompleted || isLastStep ? '100%' : 
                                                            id === currentStep ? `${progress}%` : '0%',
                                                        zIndex: 0,
                                                        opacity: (id === currentStep && progress === 0) ? '0' : '0.4',
                                                        transition: 'width 100ms linear, opacity 300ms ease'
                                                    }}
                                                />
                                            );
                                        })()}
                                                
                                            <div className="relative z-10 flex items-center gap-2">
                                                <Image
                                                    src={tab_icon}
                                                    alt="icon"
                                                    className="mr-3 xl:mr-0"
                                                />
                                                <span className="max-w-[119px] font-semibold text-lg">{tab_name}</span>
                                            </div>
                                        </TabsTrigger>
                                    );
                                })}
                    </TabsList>

                    {tabList.map(({ id, tab_content, lottiePath }) => (
                        <TabsContent
                            key={id}
                            value={id}
                            className="lg:pt-7.5 md:pt-[110px] sm:pt-[190px] pt-[360px]"
                        >
                            <SlideUp>
                                <div className="flex lg:flex-row flex-col justify-between bg-[#F4F6FF] dark:bg-[#1c242b] py-7.5 rounded-[30px]">
                                    <div className="lg:pl-[86px] pl-7.5 pr-7.5 lg:pr-0 xl:max-w-[660px] lg:max-w-[550px]">
                                        <Title size="4xl">{tabContent[id].title}</Title>
                                        <p className="pt-5 pb-7.5">{tabContent[id].description}</p>
                                        {id === "recording" && processingComplete && (
                                            <div className="mt-6">
                                                {console.log('AudioPlayer render attempt:', { 
                                                    id, 
                                                    processingComplete, 
                                                    selectedProfileId,
                                                    'id === recording': id === 'recording',
                                                    'processingComplete value': processingComplete
                                                })}
                                                <p className="text-lg text-primary mb-4">
                                                    Your personalized podcast is ready to play!
                                                </p>
                                                <div>
                                                    <AudioPlayer 
                                                        className="mt-4 mb-4"
                                                        profileId={selectedProfileId}
                                                    />
                                                    <Button>
                                                        <Link target='_blank' href={"https://calendly.com/lunnoalabs/30min"}>
                                                            Schedule a call
                                                        </Link>
                                                    </Button> 
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="pr-7.5 pl-7.5 lg:pl-0 lg:max-w-[540px] w-full pt-7.5 lg:pt-0">
                                        <Lottie
                                            animationData={lottiePath}
                                            autoplay
                                            loop
                                            speed={1}
                                        />
                                    </div>
                                </div>
                            </SlideUp>
                        </TabsContent>
                    ))}
                        </Tabs>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Podcast;