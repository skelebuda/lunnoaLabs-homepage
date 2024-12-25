import React from 'react'
import Title from '../../ui/title'

const TermsOfService = ({ sidebarShow }) => {
    return (
        <section className='lg:py-15 py-9'>
            <div className={`${sidebarShow ? "" : ""} max-w-[1350px] mx-auto px-[15px]`}>
                <div className={`grid ${sidebarShow ? "xl:grid-cols-[33%_66%] lg:grid-cols-[40%_60%] grid-cols-1" : "grid-cols-1"} gap-12.5`}>
                    <div>
                        <div>
                            <div className='max-w-[1080px] mx-auto lg:pt-12.5 pt-6 pb-6 lg:px-12.5'>
                                <Title size={"4xl"}>Terms of Service</Title>
                                <p className='pt-[15px]'>Last Updated: December 26, 2024</p>
                                
                                <div className='lg:pt-12.5 pt-6'>
                                    <Title size={"2xl"}>1. Introduction</Title>
                                    <p className='pt-[15px]'>Welcome to Lunnoa Labs ("we," "our," or "us"). By accessing or using our website and AI Agent services, you agree to be bound by these Terms of Service ("Terms"). Please read these Terms carefully before using our services.</p>
                                </div>

                                <div className='lg:pt-12.5 pt-6'>
                                    <Title size={"2xl"}>2. Services Description</Title>
                                    <p className='pt-[15px]'>Lunnoa Labs provides AI Agent development and deployment services. Our services include but are not limited to:</p>
                                    <ul className='list-disc list-inside pt-[15px] ml-5'>
                                        <li>Development of custom AI Agents</li>
                                        <li>Integration of AI solutions</li>
                                        <li>Related consulting services</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='max-w-[1080px] mx-auto lg:px-12.5'>
                                <div className='lg:pt-12.5 pt-6'>
                                    <Title size={"2xl"}>3. User Requirements</Title>
                                    <div className='pt-[15px]'>
                                        <Title size={"xl"}>3.1 Account Creation</Title>
                                        <p className='pt-[15px]'>To use certain features of our services, you may need to create an account. You agree to:</p>
                                        <ul className='list-disc list-inside pt-[15px] ml-5'>
                                            <li>Provide accurate and complete information</li>
                                            <li>Maintain the security of your account credentials</li>
                                            <li>Promptly update any changes to your information</li>
                                        </ul>
                                    </div>
                                    <div className='pt-[15px]'>
                                        <Title size={"xl"}>3.2 Acceptable Use</Title>
                                        <p className='pt-[15px]'>You agree not to:</p>
                                        <ul className='list-disc list-inside pt-[15px] ml-5'>
                                            <li>Use our services for any illegal purposes</li>
                                            <li>Attempt to gain unauthorized access to our systems</li>
                                            <li>Interfere with or disrupt our services</li>
                                            <li>Infringe upon intellectual property rights</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='lg:pt-12.5 pt-6'>
                                    <Title size={"2xl"}>4. Intellectual Property</Title>
                                    <div className='pt-[15px]'>
                                        <Title size={"xl"}>4.1 Our Rights</Title>
                                        <p className='pt-[15px]'>All content, features, and functionality of our services are owned by Lunnoa Labs and are protected by international copyright, trademark, and other intellectual property laws.</p>
                                    </div>
                                    <div className='pt-[15px]'>
                                        <Title size={"xl"}>4.2 License</Title>
                                        <p className='pt-[15px]'>We grant you a limited, non-exclusive, non-transferable license to use our services for their intended purposes.</p>
                                    </div>
                                </div>

                                <div className='lg:pt-12.5 pt-6'>
                                    <Title size={"2xl"}>5. Payment Terms</Title>
                                    <div className='pt-[15px]'>
                                        <Title size={"xl"}>5.1 Fees</Title>
                                        <ul className='list-disc list-inside pt-[15px] ml-5'>
                                            <li>Fees for our services will be clearly communicated before any engagement</li>
                                            <li>All fees are in Swiss Francs (CHF) unless otherwise specified</li>
                                            <li>Payment terms will be specified in individual service agreements</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Continue with remaining sections following the same pattern */}
                                
                                <div className='lg:pt-12.5 pt-6'>
                                    <Title size={"2xl"}>11. Contact Information</Title>
                                    <p className='pt-[15px]'>For questions about these Terms, please contact us at: [Your Contact Information]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TermsOfService