// servicesDataTwo.js
import Activity from "../../../public/icons/activity"
import Document from "../../../public/icons/document"
import Message from "../../../public/icons/message"
import Shield from "../../../public/icons/shield"

export const servicesDataTwo = [
    {
        id: 1,
        icon_1: <Activity height={36} width={35}/>,
        service_name: "Multi-Agent AI Systems",
        description: "Harness the power of collaborative AI agents using CrewAI framework to automate complex business processes and decision-making workflows.",
        features: [
            "Multiple AI agents working together on complex tasks",
            "Custom agent roles and specialized capabilities",
            "Integration with existing business tools and APIs",
            "Scalable architecture for growing business needs"
        ]
    },
    {
        id: 2,
        icon_1: <Document/>,
        service_name: "Intelligent Process Automation",
        description: "Transform your business operations with LangChain-powered AI agents that streamline workflows and eliminate repetitive tasks.",
        features: [
            "End-to-end process automation solutions",
            "Integration with major enterprise systems (SAP, Salesforce)",
            "Custom workflow design and optimization",
            "Real-time monitoring and analytics"
        ]
    },
    {
        id: 3,
        icon_1: <Shield height={36} width={29}/>,
        service_name: "Enterprise RAG Systems",
        description: "Build powerful knowledge management solutions that leverage your existing documentation and data to provide accurate, context-aware information retrieval.",
        features: [
            "Secure integration with document management systems",
            "Advanced search and retrieval capabilities",
            "Automated knowledge base maintenance",
            "Custom training on company-specific data"
        ]
    },
    {
        id: 4,
        icon_1: <Message/>,
        service_name: "Conversational AI Solutions",
        description: "Deploy sophisticated AI assistants that understand context, maintain conversation history, and provide personalized responses in multiple languages.",
        features: [
            "Multi-language support for Swiss market (DE, FR, IT, EN)",
            "Integration with popular communication platforms",
            "Context-aware responses and memory",
            "Customizable conversation flows"
        ]
    }
]